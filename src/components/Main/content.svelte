<script lang="ts">
  import { buildTestIds } from "../../application/utils.svelte";

  export let title: string;
  export let description: string | undefined = undefined;
  export let backgroundColor: string | undefined = "#fff";
  export let textColor: string | undefined = "#000";
  export let isClickable = false;
  export let isAnimated = false;

  let isHovered = false;

  $: contentSectionStyles = `background-color: ${backgroundColor}; color: ${textColor}; cursor: ${isClickable ? "pointer" : "initial"}; ${isHovered && "outline: 0.25rem solid rgba(0, 145, 138, 1);"}`;
</script>

<section
  id="content-section"
  class="content-section"
  role="banner"
  {...buildTestIds("content-section")}
  style={contentSectionStyles}
  on:mouseenter={() => {
    if (isAnimated) {
      isHovered = true;
    }
  }}
  on:mouseleave={() => {
    if (isAnimated) {
      isHovered = false;
    }
  }}
>
  <h2 class="content-title" {...buildTestIds("content-title")}>
    {title}
  </h2>

  {#if description}
    <p class="content-description" {...buildTestIds("content-description")}>
      {@html description}
    </p>
  {/if}

  <slot name="children"></slot>
</section>

<style>
  .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    min-width: 320px;
    max-width: 320px;
    text-align: center;
  }

  .content-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 4rem;
  }

  .content-description {
    padding: 1rem;
  }
</style>
