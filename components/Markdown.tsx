import React from "react";

export default function Markdown({ dataMarkdown }: any) {
  return (
    <section
      data-markdown={dataMarkdown}
      data-separator="^\n\n\n"
      data-separator-vertical="^\n\n"
      data-separator-notes="^Note:"
      data-charset="iso-8859-15"
    />
  );
}
