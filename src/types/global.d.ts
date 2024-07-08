interface Window {
  gtag(
    command: "event",
    action: string,
    params?: Record<string, unknown>,
    deferrable?: boolean
  ): void;
  dataLayer: any[];
}

declare let gtag: Window["gtag"];
