<script lang="ts">
  import Content from "./content.svelte";
  import ScheduleDemoForm from "../ScheduleDemoForm/root.svelte";
  import Button from "../Button/index.svelte";
  import Video from "../Video/index.svelte";
  import clientTestimonial from "../../assets/client-testimonial.mp4";
  import { clientRequestOptionSelected } from "../../application/client-store";

  const scrollIntoScheduleForm = () => {
    const element = document.getElementById("schedule-demo-form-container");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  clientRequestOptionSelected.subscribe(scrollIntoScheduleForm);
</script>

<main>
  <h1 class="main-title">Engaje e prepare os seus alunos</h1>
  <p class="main-subtitle">
    Você está pronto para elevar sua prática educacional a um novo patamar?
  </p>
  <p class="main-subtitle">
    Prepare-se para uma jornada de <strong>transformação</strong> com a
    Plataforma
    <strong>Prepara Aí</strong>, a sua aliada no caminho rumo à excelência
    acadêmica.
  </p>

  <Button text="Comece a usar a plataforma" onClick={scrollIntoScheduleForm} />

  <!-- <div style="text-align:center">
    <span class="dot"></span>
  </div> -->

  <p class="main-subtitle">
    Que tal assistir ao depoimento de um de nossos clientes?
  </p>

  <Video
    width={760}
    height={360}
    source={clientTestimonial}
    title="Demonstração da plataforma"
  />

  <section class="content-container">
    <Content
      title="Personalização e Excelência"
      description="Crie <strong>simulados personalizados</strong> de forma simples e eficiente, escolhendo entre uma ampla gama de questões que você pode <strong>gerar automaticamente</strong> ou <strong>adicionando as suas próprias</strong>. Garanta que cada teste seja <strong>único</strong>, <strong>adaptado</strong> às necessidades específicas de sua turma, e prepare seus alunos para os desafios que os aguardam."
    />

    <Content
      title="Automatização Inteligente para o Sucesso"
      description="<strong>Transforme</strong> seu processo de ensino com nossa automação inteligente. Ofereça
    uma experiência de exame realista, ajustando <strong>temporizadores</strong> e <strong>pesos de questões</strong> conforme sua preferência. Prepare seus alunos não apenas para
    responder às perguntas, mas para <strong>dominar</strong> o tempo e <strong>otimizar</strong> sua estratégia
    de teste."
    />

    <Content
      title="Envolva todos os seus parceiros e colaboradores"
      description="Divida suas turmas em <strong>segmentos</strong> e atribua cada segmento para o professor <strong>responsável pela turma</strong>. Desse modo, você consegue extrair o máximo de <strong>engajamento</strong> dos seus alunos através da dedicação exclusiva de cada professor."
    />

    <Content
      title="Alcance o Pico da Educação"
      description="Com a Plataforma <strong>Prepara Aí</strong>, você não apenas alcança o topo da educação, mas também <strong>lidera o caminho</strong>. Desenvolvida especialmente para educadores apaixonados, nossa plataforma oferece as ferramentas e recursos necessários para <strong>impulsionar o aprendizado</strong> dos seus alunos."
    />

    <!-- <Content
      title="Junte-se à Revolução Educacional"
      description="Prepare-se para o futuro da educação com a Plataforma <strong>Prepara Aí</strong>. Junte-se a milhares de educadores visionários que estão moldando a próxima geração de líderes, capacitando seus alunos com o <strong>conhecimento</strong> e as <strong>habilidades</strong> necessárias para enfrentar os desafios do mundo moderno."
    /> -->

    <!-- <Content
      title="Desafie os Limites do Aprendizado"
      description="Na Plataforma <strong>Prepara Aí</strong>, a jornada educacional é uma experiência <strong>dinâmica</strong> e <strong>envolvente</strong>. Desperte a curiosidade dos seus alunos, <strong>desafie-os</strong> a alcançar novos patamares e inspire-os a buscar o conhecimento com paixão e determinação."
    /> -->
  </section>

  <ScheduleDemoForm onSelectClientOption={scrollIntoScheduleForm} />
</main>

<style>
  .main-title {
    font-size: 2.5rem;
    text-align: center;
  }

  .main-subtitle {
    text-align: center;
    font-size: 1.25rem;
    margin: 1rem 0;

    @media (min-width: 1024px) {
      max-width: 50vw;
    }
  }

  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem 1rem;
    max-width: 1024px;
    gap: 3rem;
  }
</style>
