const initAnalytics = (args: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", args);
  }
};

const trackPageView = () => {
  initAnalytics({
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

export { trackPageView };
