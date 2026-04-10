import type { ContentPart } from "@data/about";

/**
 * Renders an array of ContentPart into JSX —
 * plain strings become <span>, bold objects become <strong>.
 */
export const renderContent = (content: ContentPart[]) =>
  content.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <strong key={i}>{part.bold}</strong>
    ),
  );
