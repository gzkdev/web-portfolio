import { NextJsIcon, ReactIcon, TypeScriptIcon } from "@/components/icons";
import { ReactNode } from "react";

export const ICONS: Record<string, ReactNode> = {
  TypeScript: <TypeScriptIcon className="size-4" />,
  React: <ReactIcon className="size-4" />,
  "Next.js": <NextJsIcon className="size-4" />,
};

export const PROJECTS = [
  {
    name: "Boring Avatars Config",
    description:
      "A fun project to explore the different configurations for the custom Avatar package. Built with the aim of exploring possible config combinations",
    stack: ["TypeScript", "React", "Next.js", "Motion"],
    github_url: "https://github.com/gzkdev/boring-avatars-config-app",
    live_url: "#",
  },
  {
    name: "Solana Wallet Connector",
    description:
      "Simple frontend application that implements smooth wallet authentication flow using the solana-wallet-adapter/react package",
    stack: ["TypeScript", "React", "Next.js", "Motion", "Solana Wallet SDK"],
    github_url: "https://github.com/gzkdev/boring-avatars-config-app",
    live_url: "#",
  },
];
