import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5em",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></svg>
      CS Book
    </span>
  ),
  project: {
    link: "https://github.com/YouMingYeh/cs-book.git",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/YouMingYeh/cs-book.git',
  footer: {
    text: "Created by YouMingYeh",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="CS Book" />
      <meta property="og:description" content="A book for learning computer science" />
    </>
  ),
};

export default config;
