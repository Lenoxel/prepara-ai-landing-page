<script>
  import { buildTestIds } from "../../application/utils.svelte";

  const currentYear = new Date().getFullYear();
</script>

<footer>
  <p {...buildTestIds("footer-title")}>
    &copy; {currentYear} Prepara Aí ~ A sua plataforma de simulados
  </p>
</footer>
