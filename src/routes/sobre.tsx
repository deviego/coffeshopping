
import { ReactNode } from "react";
import SobrePage from "../pages/sobre";


interface Props {
    children: ReactNode;
  }

export default function Sobre() {
    return (
      <>
       <SobrePage children={undefined} />
      </>
    );
  }