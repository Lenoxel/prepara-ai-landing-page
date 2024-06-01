<script lang="ts">
  export let isDisabled: boolean = false;
  export let text: string;
  export let onClick: () => void;
</script>

<button
  type="button"
  class="form-button"
  disabled={isDisabled}
  on:click={onClick}>{text}</button
>

<style>
  .form-button {
    font-weight: bold;
  }

  .form-button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>
