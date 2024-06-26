import { writable } from "svelte/store";

type RequestOption = "requestDemo" | "requestFreeTrial";

const clientRequestOptionSelected = writable<RequestOption | null>(null);

export { clientRequestOptionSelected, type RequestOption };
