<template>
  <div class="space-size-info flex">
    <ProgressBar
      class="m-r-12"
      :width="isLG ? '80px' : isXXL ? '115px' : '230px'"
      :progress="spaceSubInfo.usedSizePercent"
    >
      <template #text-below-left>
        <div v-if="isXXL">
          {{
            `${
              Math.round((100 * spaceSubInfo.smart_data_size) / GB) / 100
            } / ${formatBytes(spaceSubInfo.smart_data_size_available)}`
          }}
        </div>
        <div v-else>
          {{
            $t("SpaceSizeInfo.usage", {
              used: formatBytes(spaceSubInfo.smart_data_size),
              total: formatBytes(spaceSubInfo.smart_data_size_available)
            })
          }}
        </div>
      </template>
    </ProgressBar>
    <AppLink
      v-if="
        spaceSubInfo.isPlatformSubscription &&
        spaceSubInfo.isOrganizationMember &&
        !spaceSubInfo.isCustomSubscription
      "
      :to="{
        name: spaceSubInfo.isPlatformPro
          ? routeNames.subscriptionDatapack
          : routeNames.subscriptionPro,
        query: {
          space: space.id
        }
      }"
    >
      <BIMDataButton color="secondary" fill radius :icon="isXL">
        <template v-if="isXL">
          <BIMDataIcon name="plus" size="xxxs" />
        </template>
        <template v-else-if="spaceSubInfo.isPlatformPro">
          <BIMDataIcon name="plus" size="xxxs" margin="0 6px 0 0" />
          DataPack
        </template>
        <template v-else>
          {{ $t("SpaceSizeInfo.subscribePlatformButton") }}
        </template>
      </BIMDataButton>
    </AppLink>
  </div>
</template>

<script>
import { useStandardBreakpoints } from "../../../../composables/responsive.js";
import SIZE_UNIT from "../../../../config/size-unit.js";
import routeNames from "../../../../router/route-names.js";
import { formatBytes } from "../../../../utils/files.js";
// Components
import AppLink from "../../app/app-link/AppLink.vue";
import ProgressBar from "../../../generic/progress-bar/ProgressBar.vue";

export default {
  components: {
    AppLink,
    ProgressBar
  },
  props: {
    space: {
      type: Object,
      required: true
    },
    spaceSubInfo: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      // References
      GB: SIZE_UNIT.GB,
      routeNames,
      // Methods
      formatBytes,
      // Responsive breakpoints
      ...useStandardBreakpoints()
    };
  }
};
</script>
