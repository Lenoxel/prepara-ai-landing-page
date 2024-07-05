<script lang="ts">
  export let onSelectClientOption: () => void;

  import {
    clientRequestOptionSelected,
    selectedPlan,
    type RequestOption,
    type PlanType,
  } from "../../application/client-store";
  import type { SvelteComponent } from "svelte";
  import Button from "../Button/index.svelte";
  import Toast from "../Toast/root.svelte";

  let toast: SvelteComponent;

  const clientRequestOptions: {
    value: RequestOption;
    label: string;
  }[] = [
    {
      value: "requestPlan",
      label: "Solicitar Plano",
    },
    {
      value: "requestDemo",
      label: "Solicitar Demonstração",
    },
    {
      value: "requestFreeTrial",
      label: "Solicitar Período Gratuito",
    },
  ];

  const selectClientOption = (chosenValue: RequestOption) => {
    clientRequestOptionSelected.set(chosenValue);
    onSelectClientOption();
  };

  const getClientRequestButtonText = (
    currentClientRequestOptionSelected: RequestOption
  ) => {
    if (currentClientRequestOptionSelected === "requestDemo") {
      return "SOLICITAR";
    }

    if (currentClientRequestOptionSelected === "requestFreeTrial") {
      return "SOLICITAR";
    }

    if (currentClientRequestOptionSelected === "requestPlan") {
      return "SOLICITAR";
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
    selectedPlan: PlanType | null,
    name: string,
    email: string,
    phoneNumber: string,
    environmentName: string,
    knowledgeAreas: string
  ) => {
    if (requestOptionSelected === "requestPlan") {
      return !!(
        !selectedPlan ||
        !name ||
        !email ||
        !phoneNumber ||
        !environmentName ||
        !knowledgeAreas
      );
    }

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
    clientRequestOptionSelected.set(null);
    selectedPlan.set(null);
    clientName = "";
    clientEmail = "";
    clientPhoneNumber = "";
    clientEnvironmentName = "";
    clientKnowledgeAreas = "";
  };

  $: isFormDisabled = handleIsFormDisabled(
    $clientRequestOptionSelected,
    $selectedPlan,
    clientName,
    clientEmail,
    clientPhoneNumber,
    clientEnvironmentName,
    clientKnowledgeAreas
  );

  const sendEmail = async () => {
    try {
      isSendingEmail = true;

      const sendEmailResponse = await fetch(
        "https://email-api.preparaai.com.br/api/v1/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientRequestOptionSelected: $clientRequestOptionSelected,
            selectedPlan: $selectedPlan,
            clientName,
            clientEmail,
            clientPhoneNumber,
            clientEnvironmentName,
            clientKnowledgeAreas,
          }),
        }
      );

      const { status } = sendEmailResponse;

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

  let selectedPlanValue: PlanType | null = null;

  selectedPlan.subscribe((value) => (selectedPlanValue = value));
</script>

<Toast bind:this={toast} />

<div id="schedule-demo-form-container" class="form-container">
  <form class="form-card">
    <h1 class="form-title">Comece agora a usar a plataforma</h1>

    <section class="form-inputs-container">
      <div class="form-input-card-group">
        {#each clientRequestOptions as { value, label }}
          <button
            class="form-input-card {$clientRequestOptionSelected
              ? $clientRequestOptionSelected === value
                ? 'form-input-card-selected'
                : 'form-input-card-not-selected'
              : ''}"
            on:click={() => {
              selectClientOption(value);
            }}
            type="button"
          >
            <span class="form-input-card-text">{label}</span>
          </button>
        {/each}
      </div>

      {#if $clientRequestOptionSelected}
        {#if $clientRequestOptionSelected === "requestPlan"}
          <div class="form-input-container">
            <label class="form-label" for="plans">Plano Escolhido</label>
            <select
              id="plans"
              class="form-select"
              name="plans"
              bind:value={selectedPlanValue}
              on:change={() => selectedPlan.set(selectedPlanValue)}
            >
              <option class="form-select-option" value=""></option>
              <option class="form-select-option" value="individual"
                >Individual</option
              >
              <option class="form-select-option" value="essential"
                >Essencial</option
              >
              <option class="form-select-option" value="advanced"
                >Avançado</option
              >
              <option class="form-select-option" value="premium">Premium</option
              >
            </select>
          </div>
        {/if}

        <div class="form-input-container">
          <label class="form-label" for="client-name">Digite o seu Nome</label>
          <input
            class="form-input"
            id="client-name"
            type="text"
            placeholder="João Silva"
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
            placeholder="joaosilva@gmail.com"
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

        {#if ["requestPlan", "requestFreeTrial"].includes($clientRequestOptionSelected)}
          <div class="form-input-container">
            <label class="form-label" for="client-environment-name"
              >Escolha um nome para o seu Ambiente</label
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

    {#if $clientRequestOptionSelected}
      <Button
        isDisabled={isFormDisabled || isSendingEmail}
        text={isSendingEmail
          ? "ENVIANDO SOLICITAÇÃO..."
          : getClientRequestButtonText($clientRequestOptionSelected)}
        color="success"
        onClick={sendEmail}
      />
    {/if}
  </form>
</div>

<style>
  .form-container {
    display: flex;
    justify-content: center;
    /* border-top: 1px solid gray; */
    /* border-bottom: 1px solid gray; */
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
    font-size: 2.5rem;
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
    min-width: 100%;
    max-width: 100%;
    padding: 0.25rem 0;
    border: 1px solid #333;
    outline: 1px solid transparent;
    transition: border 0.3s;
    transition: outline 0.3s;
    border-radius: 0.75rem;

    &:focus,
    &:hover {
      border: 1px solid #000;
      outline: 1px solid #000;
    }

    @media (min-width: 480px) {
      font-size: 1.2rem;
      min-width: 375px;
      max-width: 375px;
    }
  }

  .form-select {
    font-size: 1rem;
    text-align: center;
    min-width: 100%;
    max-width: 100%;
    padding: 0.25rem 0;
    border: 1px solid #333;
    outline: 1px solid transparent;
    transition: border 0.3s;
    transition: outline 0.3s;
    border-radius: 0.75rem;

    &:focus,
    &:hover {
      border: 1px solid #000;
      outline: 1px solid #000;
    }

    @media (min-width: 480px) {
      font-size: 1.2rem;
      min-width: 375px;
      max-width: 375px;
    }
  }

  .form-input-card-group {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (min-width: 480px) {
      gap: 2rem;
    }
  }

  .form-input-card {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.3s;
    opacity: 0.5;
    border-radius: 10px;
    background-color: rgba(245, 247, 250, 1);

    &:focus,
    &:hover {
      transform: translate(0, -0.75rem);
      opacity: 1;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }
  }

  .form-input-card-selected {
    transform: translate(0, -0.75rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    opacity: 1;
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
    min-height: 30vh;
  }
</style>
