<script>
import { h } from "vue";
import { useAppSlot } from "./app-slot.js";

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  render() {
    const slot = useAppSlot(this.$props.name);

    return slot.value ? h(slot.value) : [];
  }
};
</script>
