<template>
  <div class="project-card-action-bar">
    <BIMDataButton
      v-if="viewerButton"
      class="project-card-action-bar__btn viewer-button"
      ghost
      rounded
      icon
      :disabled="models.length === 0"
      @click.prevent.stop="$emit('open-viewer')"
    >
      <BIMDataIcon name="show" size="s" />
    </BIMDataButton>

    <BIMDataButton
      v-if="actionMenu"
      data-test-id="btn-open-menu"
      class="project-card-action-bar__btn action-menu"
      color="default"
      ripple
      rounded
      icon
      @click.prevent.stop="$emit('open-menu')"
    >
      <BIMDataIcon name="ellipsis" size="l" />
    </BIMDataButton>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    models: {
      type: Array,
      required: true
    },
    actionMenu: {
      type: Boolean,
      default: true
    },
    viewerButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ["open-viewer", "open-menu"]
};
</script>

<style scoped lang="scss" src="./ProjectCardActionBar.scss"></style>
