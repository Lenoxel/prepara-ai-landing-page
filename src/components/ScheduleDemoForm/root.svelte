<script lang="ts">
  type RequestOption = "requestDemo" | "requestFreeTrial";

  import emailjs from "@emailjs/browser";
  import type { SvelteComponent } from "svelte";
  import Button from "../Button/index.svelte";
  import Toast from "../Toast/root.svelte";

  let toast: SvelteComponent;

  const clientRequestOptions: {
    value: RequestOption;
    label: string;
  }[] = [
    {
      value: "requestDemo",
      label: "Solicitar uma demo",
    },
    {
      value: "requestFreeTrial",
      label: "Solicitar período gratuito",
    },
  ];

  let clientRequestOptionSelected: RequestOption | null = null;

  const selectClientOption = (chosenValue: RequestOption) => {
    clientRequestOptionSelected = chosenValue;
  };

  const getClientRequestButtonText = (
    currentClientRequestOptionSelected: RequestOption
  ) => {
    if (currentClientRequestOptionSelected === "requestDemo") {
      return "SOLICITAR DEMO";
    }

    if (currentClientRequestOptionSelected === "requestFreeTrial") {
      return "SOLICITAR AMBIENTE";
    }

    return "";
  };

  let clientName = "";
  let clientEmail = "";
  let clientPhoneNumber = "";
  let clientEnvironmentName = "";
  let clientKnowledgeAreas = "";
  let isSendingEmail = false;

  const handleIsFormDisabled = (
    requestOptionSelected: RequestOption | null,
    name: string,
    email: string,
    phoneNumber: string,
    environmentName: string,
    knowledgeAreas: string
  ) => {
    if (requestOptionSelected === "requestDemo") {
      return !!(!name || !email || !phoneNumber);
    }

    if (requestOptionSelected === "requestFreeTrial") {
      return !!(
        !name ||
        !email ||
        !phoneNumber ||
        !environmentName ||
        !knowledgeAreas
      );
    }

    return true;
  };

  const resetForm = () => {
    clientRequestOptionSelected = null;
    clientName = "";
    clientEmail = "";
    clientPhoneNumber = "";
    clientEnvironmentName = "";
    clientKnowledgeAreas = "";
  };

  $: isFormDisabled = handleIsFormDisabled(
    clientRequestOptionSelected,
    clientName,
    clientEmail,
    clientPhoneNumber,
    clientEnvironmentName,
    clientKnowledgeAreas
  );

  const sendEmail = async () => {
    try {
      isSendingEmail = true;

      const { status } = await emailjs.send(
        "service_ps3xv7h",
        "template_dxtu0tv",
        {
          client_request_type: clientRequestOptionSelected,
          client_name: clientName,
          client_email: clientEmail,
          client_phone_number: clientPhoneNumber,
          client_environment_name: clientEnvironmentName,
          client_knowledge_areas: clientKnowledgeAreas,
        },
        {
          publicKey: "dqzZHw8603oOTmKPa",
        }
      );

      isSendingEmail = false;

      if (status === 200) {
        toast.showToast("success", 3500, "Solicitação enviada com sucesso!");
        resetForm();
        return;
      }

      toast.showToast(
        "error",
        3500,
        "Erro ao enviar solicitação",
        "Revise as suas informações e tente novamente"
      );
    } catch (err) {
      isSendingEmail = false;
      toast.showToast(
        "error",
        3500,
        "Erro ao enviar solicitação",
        "Revise as suas informações e tente novamente"
      );
    }
  };
</script>

<Toast bind:this={toast} />

<div id="schedule-demo-form-container" class="form-container">
  <form class="form-card">
    <h3 class="form-title">O que você deseja?</h3>

    <!-- <img src={check} /> -->

    <section class="form-inputs-container">
      <div class="form-input-card-group">
        {#each clientRequestOptions as { value, label }}
          <button
            class="form-input-card {clientRequestOptionSelected
              ? clientRequestOptionSelected === value
                ? 'form-input-card-selected'
                : 'form-input-card-not-selected'
              : ''}"
            on:click={() => selectClientOption(value)}
            type="button"
          >
            <span class="form-input-card-text">{label}</span>
          </button>
        {/each}
      </div>

      {#if clientRequestOptionSelected}
        <div class="form-input-container">
          <label class="form-label" for="client-name">Digite o seu Nome</label>
          <input
            class="form-input"
            id="client-name"
            type="text"
            placeholder="João da Silva"
            bind:value={clientName}
            disabled={isSendingEmail}
          />
        </div>

        <div class="form-input-container">
          <label class="form-label" for="client-email"
            >Digite o seu melhor Email</label
          >
          <input
            class="form-input"
            id="client-email"
            type="email"
            placeholder="joaodasilva@meuemail.com"
            bind:value={clientEmail}
            disabled={isSendingEmail}
          />
        </div>

        <div class="form-input-container">
          <label class="form-label" for="client-phone-number"
            >Digite o seu WhatsApp</label
          >
          <input
            class="form-input"
            id="client-phone-number"
            type="tel"
            placeholder="81 92222-2222"
            bind:value={clientPhoneNumber}
            disabled={isSendingEmail}
          />
        </div>

        {#if clientRequestOptionSelected === "requestFreeTrial"}
          <div class="form-input-container">
            <label class="form-label" for="client-environment-name"
              >Qual nome você deseja para o seu ambiente?</label
            >
            <input
              class="form-input"
              id="client-environment-name"
              type="text"
              placeholder="Matemática com João"
              bind:value={clientEnvironmentName}
              disabled={isSendingEmail}
            />
          </div>

          <div class="form-input-container">
            <label class="form-label" for="client-knowledge-areas"
              >Qual é o foco do seu ensino?</label
            >
            <textarea
              class="form-input"
              id="client-knowledge-areas"
              placeholder="ENEM, Português, Matemática, Física, Concursos Militares..."
              rows="5"
              bind:value={clientKnowledgeAreas}
              disabled={isSendingEmail}
            />
          </div>
        {/if}
      {:else}
        <div class="empty-section"></div>
      {/if}
    </section>

    {#if clientRequestOptionSelected}
      <Button
        isDisabled={isFormDisabled || isSendingEmail}
        text={isSendingEmail
          ? "ENVIANDO SOLICITAÇÃO..."
          : getClientRequestButtonText(clientRequestOptionSelected)}
        onClick={sendEmail}
      />
    {/if}
  </form>
</div>

<style>
  .form-container {
    display: flex;
    justify-content: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    max-width: 85vw;
    min-width: 85vw;
  }

  .form-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    min-width: 320px;
    max-width: 760px;
  }

  .form-title {
    color: #333;
    text-align: center;
    font-size: 1.5rem;
  }

  .form-inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .form-label {
    font-size: 1.2rem;
  }

  .form-input {
    font-size: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    min-width: 100%;
    max-width: 100%;
    padding: 0.25rem 0;

    @media (min-width: 480px) {
      font-size: 1.2rem;
      min-width: 375px;
      max-width: 375px;
    }
  }

  .form-input-card-group {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    @media (min-width: 480px) {
      gap: 3rem;
    }
  }

  .form-input-card {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.3s;

    &:focus,
    &:hover {
      transform: scale(1.2);
    }
  }

  .form-input-card-selected {
    transform: scale(1.2);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  .form-input-card-not-selected {
    transform: scale(0.8);
    opacity: 0.5;

    &:focus,
    &:hover {
      transform: scale(1);
    }
  }

  .form-input-card-text {
    font-size: 1rem;
    text-align: center;

    @media (min-width: 480px) {
      font-size: 1.25rem;
    }
  }

  .empty-section {
    min-height: 15vh;
  }

  /* input[type="radio"] {
    transform: scale(1.5);
  } */
</style>
