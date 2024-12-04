<script lang="ts">
  export let width: number;
  export let height: number;
  export let source: string;
  export let title: string;
</script>

<!-- <video class="video-iframe" {width} {height} controls>
  <source src={source} />
  <track kind="captions" />
</video> -->

<iframe
  class="video-iframe"
  {width}
  {height}
  src={`${source}?autoplay=0&controls=0`}
  {title}
  role="presentation"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
  on:contextmenu={() => false}
/>

<style>
  .video-iframe {
    border-radius: 1rem;

    @media (max-width: 760px) {
      max-width: 90vw;
    }

    @media (max-width: 480px) {
      max-width: 100vw;
    }
  }
</style>
