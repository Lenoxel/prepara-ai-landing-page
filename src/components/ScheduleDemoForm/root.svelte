<script lang="ts">
  import emailjs from "@emailjs/browser";
  import type { SvelteComponent } from "svelte";
  import Button from "../Button/index.svelte";
  import Toast from "../Toast/root.svelte";

  let toast: SvelteComponent;

  let clientName = "";
  let clientEmail = "";
  let clientPhoneNumber = "";
  let isSendingEmail = false;

  const handleIsFormDisabled = (
    name: string,
    email: string,
    phoneNumber: string
  ) => {
    if (!name || !email || !phoneNumber) {
      return true;
    }

    return false;
  };

  const resetForm = () => {
    clientName = "";
    clientEmail = "";
    clientPhoneNumber = "";
  };

  $: isFormDisabled = handleIsFormDisabled(
    clientName,
    clientEmail,
    clientPhoneNumber
  );

  const sendEmail = async () => {
    try {
      isSendingEmail = true;

      const { status } = await emailjs.send(
        "service_ps3xv7h",
        "template_dxtu0tv",
        {
          client_name: clientName,
          client_email: clientEmail,
          client_phone_number: clientPhoneNumber,
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
    <h3 class="form-title">
      Solicite aqui uma demo e vem conhecer a plataforma!
    </h3>

    <section class="form-inputs-container">
      <div class="form-input-container">
        <label class="form-label" for="client-name">Qual o seu Nome?</label>
        <input
          class="form-input"
          id="client-name"
          type="text"
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
          bind:value={clientEmail}
          disabled={isSendingEmail}
        />
      </div>

      <div class="form-input-container">
        <label class="form-label" for="client-phone-number"
          >Digite o seu Telefone (WhatsApp)</label
        >
        <input
          class="form-input"
          id="client-phone-number"
          type="tel"
          bind:value={clientPhoneNumber}
          disabled={isSendingEmail}
        />
      </div>
    </section>

    <Button
      isDisabled={isFormDisabled || isSendingEmail}
      text={isSendingEmail ? "ENVIANDO SOLICITAÇÃO..." : "SOLICITAR DEMO"}
      onClick={sendEmail}
    />
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
    font-size: 1.2rem;
    text-align: center;
    border-radius: 0.75rem;

    @media (min-width: 480px) {
      min-width: 375px;
      max-width: 375px;
    }
  }
</style>
