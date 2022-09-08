import { ReactNode } from "react";
import CartPage from "../pages/Cart";


interface Props {
    children: ReactNode;
  }

export default function Cart() {
    return (
      <>
        <CartPage children={undefined} />
      </>
    );
  }