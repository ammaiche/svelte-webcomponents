<script lang="ts">
  import CustomButton from "./components/custom-button/CustomButton.svelte";

  function handleClick() {
    console.log("custom button clicked");
  }
</script>

<style>
</style>

<template>
  <h1>Demo Svelte application</h1>
  <CustomButton myDescription="My description" on:customClick={handleClick}>
    <span>My button</span>
  </CustomButton>
</template>
