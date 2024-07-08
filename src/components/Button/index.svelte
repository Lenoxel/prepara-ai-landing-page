<script lang="ts">
  import { trackClickOnButton } from "../../scripts/analytics";

  export let isDisabled: boolean = false;
  export let text: string;
  export let color: "primary" | "success" | "error";
  export let onClick: () => void;
  export let trackingDetails: {
    name: string;
    value?: string | number;
  } | null;
</script>

<button
  type="button"
  class="form-button {color}"
  disabled={isDisabled}
  on:click={() => {
    onClick();
    if (trackingDetails) {
      const { name, value = 1 } = trackingDetails;
      trackClickOnButton(name, value);
    }
  }}>{@html text}</button
>

<style>
  .form-button {
    font-weight: bold;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  .form-button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .success {
    background-color: rgba(0, 137, 123, 1);

    &:hover {
      background-color: rgba(0, 145, 138, 1);
    }
  }
</style>
