import { render, screen } from "@testing-library/svelte";
import Footer from "./index.svelte";

describe("Footer", () => {
  it("should render footer text", () => {
    render(Footer);

    const footerTextElement = screen.getByTestId("footer-title");

    const currentYear = new Date().getFullYear();
    expect(footerTextElement.textContent).toBe(
      `© ${currentYear} Prepara Aí ~ A sua plataforma de simulados`
    );
  });
});
