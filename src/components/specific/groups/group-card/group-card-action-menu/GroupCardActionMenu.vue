<template>
  <div class="group-card-action-menu" v-click-away="resetMenu">
    <transition name="fade">
      <div v-if="loading" class="group-card-action-menu__loader">
        <BIMDataSpinner />
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <template v-if="showUpdateForm">
        <GroupCardUpdateForm
          :project="project"
          :group="group"
          @close="closeUpdateForm"
          @success="closeMenu"
        />
      </template>

      <template v-else-if="showColorPicker">
        <GroupCardColorPicker
          :project="project"
          :group="group"
          @close="closeColorPicker"
          @success="closeMenu"
        />
      </template>

      <template v-else-if="showDeleteGuard">
        <GroupCardDeleteGuard
          :project="project"
          :group="group"
          @close="closeDeleteGuard"
        />
      </template>

      <template v-else>
        <div class="group-card-action-menu__menu">
          <div class="group-card-action-menu__menu__title">
            <BIMDataTextbox maxWidth="200px" :text="group.name" />
            <BIMDataButton
              data-test-id="btn-close-menu"
              ghost
              rounded
              icon
              @click="closeMenu"
            >
              <BIMDataIcon name="close" size="xxs" />
            </BIMDataButton>
          </div>
          <BIMDataButton
            data-test-id="btn-open-update"
            ghost
            squared
            @click="openUpdateForm"
          >
            {{ $t("GroupCardActionMenu.renameButtonText") }}
          </BIMDataButton>
          <BIMDataButton
            data-test-id="btn-open-color"
            ghost
            squared
            @click="openColorPicker"
          >
            {{ $t("GroupCardActionMenu.changeColorButtonText") }}
          </BIMDataButton>
          <BIMDataButton
            data-test-id="btn-open-delete"
            ghost
            squared
            @click="openDeleteGuard"
          >
            {{ $t("GroupCardActionMenu.deleteButtonText") }}
          </BIMDataButton>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import { useToggle } from "../../../../../composables/toggle.js";
// Components
import GroupCardColorPicker from "../group-card-color-picker/GroupCardColorPicker.vue";
import GroupCardDeleteGuard from "../group-card-delete-guard/GroupCardDeleteGuard.vue";
import GroupCardUpdateForm from "../group-card-update-form/GroupCardUpdateForm.vue";

export default {
  components: {
    GroupCardColorPicker,
    GroupCardDeleteGuard,
    GroupCardUpdateForm
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    group: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const loading = ref(false);
    provide("loading", loading);

    const {
      isOpen: showUpdateForm,
      open: openUpdateForm,
      close: closeUpdateForm
    } = useToggle();
    const {
      isOpen: showColorPicker,
      open: openColorPicker,
      close: closeColorPicker
    } = useToggle();
    const {
      isOpen: showDeleteGuard,
      open: openDeleteGuard,
      close: closeDeleteGuard
    } = useToggle();

    const resetMenu = () => {
      closeColorPicker();
      closeDeleteGuard();
      closeUpdateForm();
      loading.value = false;
    };

    const closeMenu = () => {
      resetMenu();
      emit("close");
    };

    return {
      // References
      loading,
      showColorPicker,
      showDeleteGuard,
      showUpdateForm,
      // Methods
      closeColorPicker,
      closeDeleteGuard,
      closeMenu,
      closeUpdateForm,
      openColorPicker,
      openDeleteGuard,
      openUpdateForm,
      resetMenu
    };
  }
};
</script>

<style scoped lang="scss" src="./GroupCardActionMenu.scss"></style>
