<script>
  import { buildTestIds } from "../../application/utils.svelte";
  import logo from "/logo-only-icon.svg";
</script>

<header>
  <section class="header-container">
    <img
      class="logo-img"
      src={logo}
      alt="logo do prepara aí contendo computador, checklist e o nome da plataforma"
    />
    <h1 {...buildTestIds("header-title")} class="header-title">Prepara Aí</h1>
  </section>
</header>

<style>
  .header-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (min-width: 480px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  .header-title {
    margin: 0;

    @media (min-width: 480px) {
      margin: 1rem;
    }
  }

  .logo-img {
    display: flex;

    @media (min-width: 480px) {
      display: none;
    }
  }
</style>
