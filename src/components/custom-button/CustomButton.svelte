<script lang="ts">
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


  export let myDescription = "Custom button";

  function onButtonClick() {
   dispatch('customClick');
  }
</script>

<style lang="scss">
  @import "./CustomButton.scss";
</style>

<template>
  <csm-button primary on:csmClick={onButtonClick}>
    <div class="slot">
      <slot />
    </div>
    {myDescription}
  </csm-button>
</template>
