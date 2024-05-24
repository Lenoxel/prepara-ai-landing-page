import "jest-environment-jsdom";
import { render, screen } from '@testing-library/svelte';
import Header from './index.svelte';

describe("Header", () => {
    it('should render header text', () => {
        render(Header);
        
        const headerTitleElement = screen.getByTestId("header-title");

        expect(headerTitleElement.textContent).toBe("Prepara Aí");
    })
})