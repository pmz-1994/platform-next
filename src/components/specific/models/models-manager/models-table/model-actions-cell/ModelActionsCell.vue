<template>
  <div class="model-actions-cell" v-click-away="closeMenu">
    <template v-if="model.type === MODEL_TYPE.IFC">
      <template v-for="window of [WINDOWS.V2D, WINDOWS.V3D]" :key="window">
        <ViewerButton
          :disabled="!isModelReady"
          :project="project"
          :model="model"
          :window="window"
        />
      </template>
    </template>

    <template v-else-if="model.type === MODEL_TYPE.DWG">
      <ViewerButton
        :disabled="!isModelReady"
        :project="project"
        :model="model"
        :window="WINDOWS.DWG"
        text="2D"
      />
    </template>

    <template v-else-if="model.type === MODEL_TYPE.DXF">
      <ViewerButton
        :disabled="!isModelReady"
        :project="project"
        :model="model"
        :window="WINDOWS.DXF"
        text="2D"
      />
    </template>

    <template
      v-else-if="
        model.type === MODEL_TYPE.PDF || model.type === MODEL_TYPE.META_BUILDING
      "
    >
      <ViewerButton
        :disabled="!isModelReady"
        :project="project"
        :model="model"
        :window="WINDOWS.PLAN"
        text="2D"
      />
    </template>

    <template v-if="model.document">
      <BIMDataButton
        class="model-actions-cell__btn"
        data-test-id="btn-download-model"
        ripple
        rounded
        icon
        @click="onClick('download')"
      >
        <BIMDataIcon name="download" size="m" />
      </BIMDataButton>
    </template>

    <BIMDataButton
      class="model-actions-cell__btn"
      data-test-id="btn-toggle-menu"
      :disabled="!project.isAdmin && model.document?.user_permission < 100"
      ripple
      rounded
      icon
      @click="toggleMenu"
    >
      <BIMDataIcon name="ellipsis" size="l" />
    </BIMDataButton>

    <transition name="fade">
      <div class="model-actions-cell__menu" v-show="showMenu">
        <template v-if="model.document">
          <BIMDataButton
            class="model-actions-cell__menu__btn"
            data-test-id="btn-update-model"
            ghost
            squared
            @click="onClick('update')"
          >
            {{ $t("ModelActionsCell.renameButtonText") }}
          </BIMDataButton>
        </template>
        <BIMDataButton
          class="model-actions-cell__menu__btn"
          data-test-id="btn-archive-model"
          ghost
          squared
          @click="onClick(model.archived ? 'unarchive' : 'archive')"
        >
          <template v-if="model.archived">
            {{ $t("ModelActionsCell.unarchiveButtonText") }}
          </template>
          <template v-else>
            {{ $t("ModelActionsCell.archiveButtonText") }}
          </template>
        </BIMDataButton>
        <template v-if="model.type === MODEL_TYPE.META_BUILDING">
          <BIMDataButton
            class="model-actions-cell__menu__btn"
            ghost
            squared
            @click="onClick('edit-metaBuilding')"
          >
            {{ $t("ModelActionsCell.editButtontext") }}
          </BIMDataButton>
        </template>
        <BIMDataButton
          class="model-actions-cell__menu__btn"
          data-test-id="btn-delete-model"
          color="high"
          ghost
          squared
          @click="onClick('delete')"
        >
          {{ $t("ModelActionsCell.deleteButtonText") }}
        </BIMDataButton>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed } from "vue";
import { useToggle } from "../../../../../../composables/toggle.js";
import { MODEL_STATUS, MODEL_TYPE } from "../../../../../../config/models.js";
import { WINDOWS } from "../../../../../../config/viewer.js";
// Components
import ViewerButton from "./ViewerButton.vue";

export default {
  components: {
    ViewerButton
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      required: true
    }
  },
  emits: ["archive", "delete", "download", "update", "edit-metaBuilding"],
  setup(props, { emit }) {
    const {
      isOpen: showMenu,
      close: closeMenu,
      toggle: toggleMenu
    } = useToggle();

    const isModelReady = computed(
      () => MODEL_STATUS.COMPLETED === props.model.status
    );

    const onClick = event => {
      closeMenu();
      emit(event, props.model);
    };

    return {
      // References
      isModelReady,
      MODEL_TYPE,
      showMenu,
      WINDOWS,
      // Methods
      closeMenu,
      onClick,
      toggleMenu
    };
  }
};
</script>

<style scoped lang="scss" src="./ModelActionsCell.scss"></style>
