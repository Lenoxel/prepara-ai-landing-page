import { writable } from "svelte/store";

type RequestOption = "requestPlan" | "requestDemo" | "requestFreeTrial";

type PlanType = "individual" | "essential" | "advanced" | "premium";

const clientRequestOptionSelected = writable<RequestOption | null>(null);

const ourPlansEvent = writable({});

const selectedPlan = writable<PlanType | null>(null);

export {
  clientRequestOptionSelected,
  ourPlansEvent,
  selectedPlan,
  type RequestOption,
  type PlanType,
};
