
<svelte:options tag="svelte-app" />
<script lang="ts">
  import CustomButton from "./components/custom-button/CustomButton.svelte";

  function handleClick() {
    console.log("custom button clicked");
  }
</script>

<style>
  .title{
    color: red;
  }
</style>

<template>
  <h1 class="title">Demo Svelte application</h1>
  <CustomButton myDescription="My description" on:customClick={handleClick}>
    <span>My button</span>
  </CustomButton>
</template>
