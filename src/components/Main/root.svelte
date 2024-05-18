<script lang="ts">
  import Content from "./content.svelte";
  import ScheduleDemoForm from "../ScheduleDemoForm/root.svelte";
</script>

<main>
  <h1 class="main-title">Engaje e prepare os seus alunos</h1>
  <p class="main-subtitle">
    Você está pronto para elevar sua prática educacional a um novo patamar?
    Prepare-se para uma jornada de transformação com a Plataforma Prepara Aí -
    sua aliada no caminho rumo à excelência acadêmica.
  </p>

  <!-- <div style="text-align:center">
    <span class="dot"></span>
  </div> -->

  <ScheduleDemoForm />

  <section class="content-container">
    <Content
      title="Automatização Inteligente para o Sucesso"
      description="Transforme seu processo de ensino com nossa automação inteligente. Ofereça
    uma experiência de exame realista, ajustando temporizadores e pesos de
    questões conforme sua preferência. Prepare seus alunos não apenas para
    responder às perguntas, mas para dominar o tempo e otimizar sua estratégia
    de teste."
    />

    <Content
      title="Alcance o Pico da Educação"
      description=" Com a Plataforma Prepara Aí, você não apenas alcança o topo da educação,
      mas também lidera o caminho. Desenvolvida especialmente para educadores
      apaixonados, nossa plataforma revolucionária oferece as ferramentas e
      recursos necessários para impulsionar o aprendizado dos seus alunos."
    />

    <Content
      title="Personalização e Excelência"
      description="Crie simulados personalizados de forma simples e eficiente, escolhendo
    entre uma ampla gama de questões ou adicionando suas próprias. Garanta
    que cada teste seja único, adaptado às necessidades específicas da sua
    turma, e prepare seus alunos para os desafios que os aguardam."
    />

    <Content
      title="Junte-se à Revolução Educacional"
      description="Prepare-se para o futuro da educação com a Plataforma Prepara Aí.
    Junte-se a milhares de educadores visionários que estão moldando a
    próxima geração de líderes, capacitando seus alunos com o conhecimento e
    as habilidades necessárias para enfrentar os desafios do mundo moderno."
    />

    <Content
      title="Desafie os Limites do Aprendizado"
      description="Na Plataforma Prepara Aí, a jornada educacional é uma experiência
    dinâmica e envolvente. Desperte a curiosidade dos seus alunos,
    desafie-os a alcançar novos patamares e inspire-os a buscar o
    conhecimento com paixão e determinação."
    />
  </section>
</main>

<style>
  .main-title {
    font-size: 2.5rem;
    text-align: center;
  }

  .main-subtitle {
    display: flex;
    text-align: center;
    font-size: 1.25rem;

    @media (min-width: 1024px) {
      max-width: 50vw;
    }
  }

  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem;
    max-width: 100vw;
    gap: 3rem;
  }
</style>
