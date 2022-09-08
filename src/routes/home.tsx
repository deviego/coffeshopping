

import { ReactNode } from "react";
import HomePage from "../pages/home";


interface Props {
    children: ReactNode;
  }

export default function Home() {
    return (
      <>
        <HomePage children={undefined} />
      </>
    );
  }