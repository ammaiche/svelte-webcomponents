
<svelte:options tag="custom-button" />
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
  .title{
    color: blue;
  }
</style>

<template>
  <csm-button primary on:csmClick={onButtonClick}>
    <div class="title">
      <slot />
    </div>
    {myDescription}
  </csm-button>
</template>
