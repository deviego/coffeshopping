import React from "react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

export default function CartPage({ children }: Props) {
    return (
      <>
        <h2>cart</h2>
      </>
    );
  }