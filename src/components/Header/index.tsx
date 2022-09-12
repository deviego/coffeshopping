import { ReactNode } from "react";
import "./style.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Outlet} from "react-router-dom";
import { ButtonCart } from "../buttonCart";


interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
          <h2  >
             <span className="logoLight">Shopping</span>Coffee
          </h2>
          <div className="navMenu">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/coffeemenu" className="nav-link">
                  Cardápio
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/sobre" className="nav-link ">sobre</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-end">
          <ButtonCart children={undefined} />
        </div>
        
        </div>
      </nav>
      <Outlet />
      
    </>
  );
}
