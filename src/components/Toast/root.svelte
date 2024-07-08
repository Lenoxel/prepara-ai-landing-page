<script lang="ts">
  import { fade, fly } from "svelte/transition";

  let message: string;
  let description: string;
  let type: "success" | "error" | null;

  let isVisible = false;

  export const showToast = (
    toastType: "success" | "error",
    toastTime: number,
    toastMessage: string,
    toastDescription = ""
  ) => {
    type = toastType;
    message = toastMessage;
    isVisible = true;
    description = toastDescription;

    setTimeout(() => {
      type = null;
      message = "";
      description = "";
      isVisible = false;
    }, toastTime);
  };
</script>

{#if isVisible}
  <div
    class="toast"
    class:success={type === "success"}
    class:error={type === "error"}
    in:fly={{ x: 50, duration: 750 }}
    out:fade={{ duration: 250 }}
  >
    <h4 class="toast-message">{message}</h4>

    {#if description}
      <p class="toast-description">{description}</p>
    {/if}
  </div>
{/if}

<style>
  .toast {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 1rem;
    min-width: 250px;
    position: fixed;
    top: 0.125rem;
    right: 0.125rem;
    border-radius: 0.175rem;
  }

  .toast-message {
    font-size: 1rem;
    margin: 0.5rem;
  }

  .toast-description {
    font-size: 1rem;
    margin: 0.5rem;
  }

  .toast.success {
    background-color: rgba(0, 133, 120, 1);
  }

  .toast.error {
    background-color: #ff3333;
  }
</style>
