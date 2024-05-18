<script lang="ts">
  import mock_tests from "./assets/mock_tests.jpg";
  import login from "./assets/login.jpg";
  import questions from "./assets/questions.jpg";
  import segments from "./assets/segments.jpg";
</script>

<div class="slideshow-container">
  <div class="mySlides fade">
    <img src={login} alt="Login da plataforma Prepara Aí" style="width:30%" />
  </div>
  <div class="mySlides fade">
    <img
      src={questions}
      alt="Questões da plataforma Prepara Aí"
      style="width:50%"
    />
  </div>
  <div class="mySlides fade">
    <img
      src={mock_tests}
      alt="Simulados da plataforma Prepara Aí"
      style="width:50%"
    />
  </div>
  <div class="mySlides fade">
    <img
      src={segments}
      alt="Segmentos da plataforma Prepara Aí"
      style="width:50%"
    />
  </div>
</div>
