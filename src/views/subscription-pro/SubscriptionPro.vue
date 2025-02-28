<template>
  <div class="subscription-pro">
    <ViewHeader>
      <template #left>
        <GoBackButton />
      </template>
      <template #center>
        <h1 class="subscription-pro__title">
          <template v-if="currentSpace">
            {{ $t("SubscriptionPro.upgradeTitle") }}
          </template>
          <template v-else>
            {{ $t("SubscriptionPro.subscribeTitle") }}
          </template>
        </h1>
      </template>
    </ViewHeader>

    <div class="subscription-pro__content">
      <div class="subscription-pro__content__text">
        {{
          $t("SubscriptionPro.text", { size: formatBytes(newSizeAvailable) })
        }}
      </div>

      <div class="subscription-pro__content__head">
        <template v-if="currentSpace">
          <SpaceSelected :space="currentSpace" />
        </template>
        <template v-else>
          <SpaceCreator
            :disabled="!!space"
            :organizations="organizations"
            :initialOrga="orga"
            @space-created="onSpacePreCreated"
          />
        </template>
      </div>

      <transition name="slide-fade-down">
        <div
          ref="contentBody"
          class="subscription-pro__content__body"
          v-show="space"
        >
          <div class="subscription-pro__content__body__start" v-show="!isLG">
            <ProPlanInfo />
          </div>
          <div class="subscription-pro__content__body__center">
            <ProPlanForm :space="space" @space-created="onSpaceCreated" />
          </div>
          <div class="subscription-pro__content__body__end" v-show="!isXL">
            <SpaceSizePreview
              :spaceSubInfo="spaceSubInfo"
              :newSizeAvailable="newSizeAvailable"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useAppNotification } from "../../components/specific/app/app-notification/app-notification.js";
import { useStandardBreakpoints } from "../../composables/responsive.js";
import { PRO_PLAN_STORAGE } from "../../config/subscription.js";
import routeNames from "../../router/route-names.js";
import { useOrganizations } from "../../state/organizations.js";
import { useSubscriptions } from "../../state/subscriptions.js";
import { formatBytes } from "../../utils/files.js";
// Components
import GoBackButton from "../../components/specific/app/go-back-button/GoBackButton.vue";
import ViewHeader from "../../components/specific/app/view-header/ViewHeader.vue";
import ProPlanForm from "../../components/specific/subscriptions/pro-plan-form/ProPlanForm.vue";
import ProPlanInfo from "../../components/specific/subscriptions/pro-plan-info/ProPlanInfo.vue";
import SpaceCreator from "../../components/specific/subscriptions/space-creator/SpaceCreator.vue";
import SpaceSelected from "../../components/specific/subscriptions/space-selected/SpaceSelected.vue";
import SpaceSizePreview from "../../components/specific/subscriptions/space-size-preview/SpaceSizePreview.vue";

export default {
  components: {
    GoBackButton,
    ProPlanForm,
    ProPlanInfo,
    SpaceCreator,
    SpaceSelected,
    SpaceSizePreview,
    ViewHeader
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const { pushNotification } = useAppNotification();
    const { userOrganizations, getPersonalOrganization } = useOrganizations();
    const {
      currentOrga,
      currentSpace,
      fetchSpaceSubInfo,
      waitForUpdatedSpaceSize
    } = useSubscriptions();

    const orga = ref(currentOrga.value || getPersonalOrganization());
    const space = ref(currentSpace.value);
    const spaceSubInfo = ref({});
    const newSizeAvailable = ref(+PRO_PLAN_STORAGE);

    const contentBody = ref(null);

    const onSpacePreCreated = preCreatedSpace => {
      space.value = preCreatedSpace;
      setTimeout(() =>
        contentBody.value.scrollIntoView({ behavior: "smooth" })
      );
    };

    const onSpaceCreated = async createdSpace => {
      const isSpaceUpgrade = !!currentSpace.value;

      if (isSpaceUpgrade) {
        await waitForUpdatedSpaceSize(
          currentSpace.value,
          spaceSubInfo.value.smart_data_size_available,
          newSizeAvailable.value
        );
      }

      pushNotification({
        type: "success",
        title: t("Success"),
        message: t(
          `SubscriptionPro.${
            isSpaceUpgrade
              ? "spaceUpgradedNotification"
              : "spaceCreatedNotification"
          }`,
          {
            organizationName: createdSpace.organization.name,
            spaceName: createdSpace.name
          }
        )
      });
      router.push({
        name: routeNames.spaceBoard,
        params: {
          spaceID: createdSpace.id
        }
      });
    };

    onMounted(async () => {
      if (space.value) {
        contentBody.value.scrollIntoView({ behavior: "smooth" });
        spaceSubInfo.value = await fetchSpaceSubInfo(space.value);
      }
    });

    return {
      // References
      contentBody,
      currentSpace,
      newSizeAvailable,
      orga,
      organizations: userOrganizations,
      space,
      spaceSubInfo,
      // Methods
      formatBytes,
      onSpaceCreated,
      onSpacePreCreated,
      // Responsive breakpoints
      ...useStandardBreakpoints()
    };
  }
};
</script>

<style scoped lang="scss" src="./SubscriptionPro.scss"></style>
