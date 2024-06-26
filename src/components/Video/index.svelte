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

<iframe class="video-iframe" {width} {height} src={source} {title} />

<style>
  .video-iframe {
    @media (max-width: 760px) {
      max-width: 90vw;
    }

    @media (max-width: 480px) {
      max-width: 100vw;
    }
  }
</style>
