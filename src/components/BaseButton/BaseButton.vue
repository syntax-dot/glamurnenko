<template>
  <div :class="$style.root">
    <button :class="$style.btn"
            :style="{ backgroundColor: color?? `#ff0c3a` }"
            @click="emit('click')">
      {{ title }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { BaseButtonProps, BaseButtonEmits } from './BaseButton.props'

defineProps<BaseButtonProps>()
const emit = defineEmits<BaseButtonEmits>()
</script>

<style module>
.root {

}

.btn {
  width: 240px;
  height: 50px;
  background-color: #ff0c3a;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
}
</style>
