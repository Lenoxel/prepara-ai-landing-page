<script lang="ts">
  export let width: number;
  export let height: number;
  export let source: string;
  export let title: string;
</script>

<!-- <video controls>
  <source src="https://youtu.be/GkG_SE8b-q4" />
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
