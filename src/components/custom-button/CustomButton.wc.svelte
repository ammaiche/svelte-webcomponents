<script lang="ts">
  export let myDescription = "Custom button";

  function onButtonClick() {
    const event = new CustomEvent("customClick", {
      composed: true, // makes the event jump shadow DOM boundary
    });

    this.dispatchEvent(event);
  }
</script>

<style lang="scss">
  @import "./CustomButton.scss";
  .title {
    color: blue;
  }
</style>

<svelte:options tag="custom-button" /><template>
  <csm-button primary on:csmClick={onButtonClick}>
    <div class="title">
      <slot />
    </div>
    {myDescription}
  </csm-button>
</template>
