import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "16px",
            fontFamily: "var(--font-sans)",
            color: "var(--color-dark)",
            backgroundColor: "var(--color-bg)",
          }}
        >
          <p
            style={{
              fontSize: "var(--font-size-body)",
              color: "var(--color-text-muted)",
            }}
          >
            Oopsie! Something went wrong.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              fontSize: "var(--font-size-body)",
              background: "none",
              border: "1px solid var(--color-muted)",
              padding: "8px 20px",
              borderRadius: "var(--radius-full)",
              cursor: "pointer",
              color: "var(--color-dark)",
            }}
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
