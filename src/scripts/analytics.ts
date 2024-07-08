const trackEvent = (
  action: "page_view" | "click",
  args: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, args);
  }
};

const trackPageView = () => {
  trackEvent("page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

const trackClickOnButton = (
  buttonName: string,
  buttonValue: string | number
) => {
  trackEvent("click", {
    event_category: "button",
    event_label: buttonName,
    value: buttonValue,
  });
};

export { trackPageView, trackClickOnButton };
