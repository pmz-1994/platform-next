<template>
  <div data-test-id="view-dashboard" class="view dashboard">
    <div class="dashboard__head">
      <DashboardWelcomeTile data-guide="welcome-title" />
      <AppLink
        data-test-id="btn-spaces"
        data-guide="btn-spaces"
        :to="{ name: routeNames.userSpaces }"
      >
        <DashboardButtonTile color="primary">
          <template #title>
            {{ $t("Dashboard.spacesTileTitle") }}
          </template>
          <template #content>
            <span style="font-size: 3rem; font-weight: bold">
              {{ spaces.length }}
            </span>
          </template>
          <template #bottom-text>
            {{ $t("Dashboard.spacesTileBottomText") }}
          </template>
        </DashboardButtonTile>
      </AppLink>
      <AppLink
        data-test-id="btn-projects"
        data-guide="btn-projects"
        :to="{ name: routeNames.userProjects }"
      >
        <DashboardButtonTile color="secondary">
          <template #title>
            {{ $t("Dashboard.projectsTileTitle") }}
          </template>
          <template #content>
            <span style="font-size: 3rem; font-weight: bold">
              {{ projects.length }}
            </span>
          </template>
          <template #bottom-text>
            {{ $t("Dashboard.projectsTileBottomText") }}
          </template>
        </DashboardButtonTile>
      </AppLink>
      <AppLink
        v-if="isSubscriptionEnabled"
        data-test-id="btn-subscriptions"
        data-guide="btn-subscriptions"
        :to="{ name: routeNames.userSubscriptions }"
      >
        <DashboardButtonTile>
          <template #title>
            {{ $t("Dashboard.subscriptionsTileTitle") }}
          </template>
          <template #content>
            {{ $t("Dashboard.subscriptionsTileText") }}
          </template>
          <template #bottom-text>
            {{ $t("Dashboard.subscriptionsTileBottomText") }}
          </template>
        </DashboardButtonTile>
      </AppLink>
    </div>
    <div class="dashboard__body" :class="{ isSubscribeHorizontal }">
      <template v-if="isSubscribeHorizontal">
        <div>
          <SubscribeCard v-if="isSubscriptionEnabled" layout="horizontal" />
        </div>
        <div class="dashboard__body__down">
          <DashboardSpaceList :spaces="spaces" />
          <DashboardProjectList :projects="projects" />
        </div>
      </template>
      <template v-else>
        <div class="dashboard__body__left">
          <DashboardSpaceList :spaces="spaces" isCarousel />
          <DashboardProjectList :projects="projects" isCarousel />
        </div>
        <div class="dashboard__body__right">
          <SubscribeCard
            v-if="isSubscriptionEnabled"
            :layout="isXL ? 'horizontal' : 'vertical'"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStandardBreakpoints } from "../../composables/responsive.js";
import { IS_SUBSCRIPTION_ENABLED } from "../../config/subscription.js";
import routeNames from "../../router/route-names.js";
import { useProjects } from "../../state/projects.js";
import { useSpaces } from "../../state/spaces.js";

// Components
import AppLink from "../../components/specific/app/app-link/AppLink.vue";
import DashboardButtonTile from "../../components/specific/dashboard/dashboard-button-tile/DashboardButtonTile.vue";
import DashboardProjectList from "../../components/specific/dashboard/dashboard-project-list/DashboardProjectList.vue";
import DashboardSpaceList from "../../components/specific/dashboard/dashboard-space-list/DashboardSpaceList.vue";
import DashboardWelcomeTile from "../../components/specific/dashboard/dashboard-welcome-tile/DashboardWelcomeTile.vue";
import SubscribeCard from "../../components/specific/subscriptions/subscribe-card/SubscribeCard.vue";

export default {
  components: {
    AppLink,
    DashboardButtonTile,
    DashboardProjectList,
    DashboardSpaceList,
    DashboardWelcomeTile,
    SubscribeCard
  },
  setup() {
    const { userSpaces } = useSpaces();
    const { userProjects } = useProjects();

    const isSubscribeHorizontal = computed(
      () => userSpaces.value.length + userProjects.value.length < 4
    );

    return {
      // References
      isSubscriptionEnabled: IS_SUBSCRIPTION_ENABLED,
      projects: userProjects,
      routeNames,
      spaces: userSpaces,
      isSubscribeHorizontal,
      // Responsive breakpoints
      ...useStandardBreakpoints()
    };
  }
};
</script>

<style scoped lang="scss" src="./Dashboard.scss"></style>
