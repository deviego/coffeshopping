import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

export default function HomePage({ children }: Props) {
    return (
      <>
        <h2>Home</h2>
      </>
    );
  }