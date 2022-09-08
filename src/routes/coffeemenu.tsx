import { ReactNode } from "react";
import CoffeeMenuPage from "../pages/CoffeeMenu";

interface Props {
    children: ReactNode;
  }

export default function CoffeMenu() {
    return (
      <>
        <CoffeeMenuPage children={undefined} />
      </>
    );
  }