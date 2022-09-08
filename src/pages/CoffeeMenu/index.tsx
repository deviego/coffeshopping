import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

export default function CoffeMenuPage({ children }: Props) {
    return (
      <>
        <h2>Coffemenu</h2>
      </>
    );
  }