<template>
  <div class="maplibre-wrapper" :id="containerID">
    <!-- Mapbox will be displayed here -->
  </div>
</template>

<script>
import { onMounted, watchEffect } from "vue";
import { useMaplibre } from "../../../composables/maplibre.js";

export default {
  props: {
    containerID: {
      type: String,
      default: "maplibre-container"
    },
    longitude: {
      type: Number,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { loadMap } = useMaplibre(props.containerID);

    onMounted(() => {
      watchEffect(() => {
        loadMap(props.longitude, props.latitude);
      });
    });
  }
};
</script>

<style scoped lang="scss" src="./MaplibreWrapper.scss"></style>
