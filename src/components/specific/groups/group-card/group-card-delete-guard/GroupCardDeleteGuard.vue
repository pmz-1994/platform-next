<template>
  <div class="group-card-delete-guard">
    <div class="group-card-delete-guard__title">
      {{ $t("GroupCardDeleteGuard.title") }}
      <BIMDataButton
        data-test-id="btn-close-delete"
        ghost
        rounded
        icon
        @click="close"
      >
        <BIMDataIcon name="close" size="xxs" />
      </BIMDataButton>
    </div>
    <div class="group-card-delete-guard__message">
      {{ $t("GroupCardDeleteGuard.message", { name: group.name }) }}
    </div>
    <BIMDataButton
      data-test-id="btn-submit-delete"
      class="group-card-delete-guard__btn-submit"
      color="high"
      fill
      radius
      @click="removeGroup"
    >
      {{ $t("GroupCardDeleteGuard.deleteButtonText") }}
    </BIMDataButton>
  </div>
</template>

<script>
import { inject } from "vue";
import { useGroups } from "../../../../../state/groups.js";

export default {
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
  emits: ["close", "success"],
  setup(props, { emit }) {
    const { deleteGroup } = useGroups();

    const loading = inject("loading", false);

    const removeGroup = async () => {
      try {
        loading.value = true;
        await deleteGroup(props.project, props.group);
        emit("success");
      } finally {
        loading.value = false;
      }
    };

    const close = () => {
      emit("close");
    };

    return {
      // Methods
      close,
      removeGroup
    };
  }
};
</script>

<style scoped lang="scss" src="./GroupCardDeleteGuard.scss"></style>
