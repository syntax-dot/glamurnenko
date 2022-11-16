<template>
  <button :class="$style.btn"
          :style="{
            backgroundColor: color ?? '#ff0c3a',
            width: width ?? '240px',
            height: height ?? '50px',
          }"
          @click="emit('click')">
    {{ title }}
  </button>
</template>

<script lang="ts" setup>
import { BaseButtonProps, BaseButtonEmits } from './BaseButton.props'

defineProps<BaseButtonProps>()
const emit = defineEmits<BaseButtonEmits>()
</script>

<style module>
.btn {
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
}
</style>
