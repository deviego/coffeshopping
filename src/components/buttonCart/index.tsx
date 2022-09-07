import { ReactNode } from "react";
import { Link } from "react-router-dom";
import iconcart from '../../assets/img/iconcart.png'
import './style.scss'
interface CartProps {
  children: ReactNode;
}

export function ButtonCart({ children }: CartProps) {
  return (
    <>
      <Link to="/cart"><img src={iconcart} alt="image cart" /></Link>
      {children}

      
    </>
  );
}
