import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

export default function SobrePage({ children }: Props) {
    return (
      <>
        <h2>sobre</h2>
      </>
    );
  }