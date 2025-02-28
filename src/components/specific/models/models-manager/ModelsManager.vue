<template>
  <div class="models-manager">
    <div class="models-manager__head">
      <template v-for="tab of tabs" :key="tab.id">
        <div
          v-if="tab.displayed"
          class="models-manager__tab"
          :class="{ selected: tab.id === currentTab.id }"
          :style="{ width: isLG ? 'auto' : '' }"
          @click="selectTab(tab)"
        >
          <span class="models-manager__tab__icon">
            <img v-if="tab.img" :src="tab.img" />
            <BIMDataIcon v-else size="m" :name="tab.icon" />
          </span>
          <span v-if="!isMD" class="models-manager__tab__text">
            {{ tab.label }}
          </span>
          <span v-if="tab.beta" class="beta-badge">BETA</span>
          <span class="models-manager__tab__count" v-if="tab.models.length > 0">
            {{ tab.models.length }}
          </span>
        </div>
      </template>

      <div class="models-manager__menu" v-click-away="closeMenu">
        <BIMDataButton>
          <BIMDataIcon
            color="granite-light"
            name="ellipsis"
            size="l"
            fill
            :rotate="90"
            @click="toggleMenu"
          />
        </BIMDataButton>

        <div class="models-manager__menu__container" v-show="showMenu">
          <template v-for="tab of tabs" :key="tab.id">
            <div
              class="models-manager__menu__item"
              :class="{ disabled: tab.models.length > 0 }"
            >
              <BIMDataCheckbox
                :disabled="tab.models.length > 0"
                :modelValue="tab.models.length > 0 || tab.displayed"
                @update:modelValue="tab.displayed = !tab.displayed"
              />
              <span>{{ tab.label }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="models-manager__body">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component
            :key="currentTab.id"
            :is="currentTab.component"
            :project="project"
            :models="currentTab.models"
          />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStandardBreakpoints } from "../../../../composables/responsive.js";
import { useToggle } from "../../../../composables/toggle.js";
import { MODEL_TYPE } from "../../../../config/models.js";
import { segregateByType } from "../../../../utils/models.js";
// Components
import DWGManager from "./dwg-manager/DWGManager.vue";
import IFCManager from "./ifc-manager/IFCManager.vue";
import PDFManager from "./pdf-manager/PDFManager.vue";

const tabsDef = [
  {
    id: "ifc",
    label: "IFC",
    icon: "fileIfcPolychrome",
    modelTypes: [MODEL_TYPE.IFC],
    component: "IFCManager"
  },
  {
    id: "dwg",
    label: "DWG",
    icon: "fileDwgPolychrome",
    modelTypes: [MODEL_TYPE.DWG],
    component: "DWGManager",
    beta: true
  },
  {
    id: "dxf",
    label: "DXF",
    img: "/static/dxf-file.svg",
    modelTypes: [MODEL_TYPE.DXF],
    component: "DWGManager",
    beta: true
  },
  {
    id: "pdf",
    label: "PDF",
    icon: "filePdfPolychrome",
    modelTypes: [MODEL_TYPE.PDF, MODEL_TYPE.META_BUILDING],
    component: "PDFManager"
  }
];

export default {
  components: {
    DWGManager,
    IFCManager,
    PDFManager
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    models: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const {
      isOpen: showMenu,
      close: closeMenu,
      toggle: toggleMenu
    } = useToggle();

    const tabs = ref([]);
    const currentTab = ref({});

    const selectTab = tab => {
      currentTab.value = tab;
    };

    watch(
      () => props.models,
      models => {
        const modelsByType = segregateByType(models);
        tabs.value = tabsDef.map(tab => ({
          ...tab,
          models: tab.modelTypes.flatMap(type => modelsByType[type] || []),
          displayed: true
        }));
        currentTab.value =
          tabs.value.find(tab => tab.id === currentTab.value?.id) ||
          tabs.value[0];
      },
      { immediate: true }
    );

    return {
      // References
      currentTab,
      showMenu,
      tabs,
      // Methods
      closeMenu,
      selectTab,
      toggleMenu,
      // Responsive breakpoints
      ...useStandardBreakpoints()
    };
  }
};
</script>

<style scoped lang="scss" src="./ModelsManager.scss"></style>
