type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  // Log errors to console in development
  if (process.env.NODE_ENV === "development") {
    console.error("Application Error:", error, context);
  }

  // You can add your own error reporting service here (Sentry, etc.)
  // Example:
  // if (typeof window !== "undefined" && window.errorReportingService) {
  //   window.errorReportingService.captureException(error, context);
  // }
}

