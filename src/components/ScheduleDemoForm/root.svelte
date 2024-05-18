<div class="form-container">
  <form class="form-card">
    <h3 class="form-title">
      Solicite aqui uma demo e vem conhecer a plataforma!
    </h3>

    <section class="form-inputs-container">
      <div class="form-input-container">
        <label class="form-label" for="client-name">Qual o seu Nome?</label>
        <input class="form-input" id="client-name" type="text" />
      </div>

      <div class="form-input-container">
        <label class="form-label" for="client-email"
          >Digite o seu melhor Email</label
        >
        <input class="form-input" id="client-email" type="email" />
      </div>

      <div class="form-input-container">
        <label class="form-label" for="client-phone-number"
          >Digite o seu Telefone</label
        >
        <input class="form-input" id="client-phone-number" type="tel" />
      </div>
    </section>

    <button class="form-button">SOLICITAR DEMO</button>
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
    cursor: pointer;
  }

  .form-input {
    font-size: 1.2rem;
    text-align: center;

    @media (min-width: 480px) {
      min-width: 375px;
      max-width: 375px;
    }
  }

  .form-button {
    font-weight: bold;
  }
</style>
