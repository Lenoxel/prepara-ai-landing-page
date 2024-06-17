<script lang="ts">
  import { buildTestIds } from "../../application/utils.svelte";

  export let title: string;
  export let description: string;
</script>

<section class="content-section" {...buildTestIds("content-section")}>
  <h2 class="content-title" {...buildTestIds("content-title")}>
    {title}
  </h2>

  <p class="content-description" {...buildTestIds("content-description")}>
    {@html description}
  </p>
</section>

<style>
  .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
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
    height: 100px;
  }

  .content-description {
    padding: 1rem;
  }
</style>
