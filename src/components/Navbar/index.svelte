<script lang="ts">
  import { clientRequestOptionSelected } from "../../application/client-store";
</script>

<nav>
  <ul>
    <li><a href="#top">Início</a></li>
    <li>
      <a
        href="#demo"
        on:click={() => {
          clientRequestOptionSelected.set("requestDemo");
        }}>Demonstração</a
      >
    </li>
    <li>
      <a
        href="#free-tier"
        on:click={() => {
          clientRequestOptionSelected.set("requestFreeTrial");
        }}>Plano gratuito</a
      >
    </li>
  </ul>
</nav>

<style>
  a {
    transition: background-color 0.3s;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
</style>
