import { ReactNode } from "react";
import "./style.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonCart } from "../buttonCart";
import { Link } from "react-router-dom";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-center">
          <a className="navbar-brand" href="#">
             <span className="logoLight">Shopping</span>Coffee
          </a>
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
                <a className="nav-link ">sobre</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-end">
          <ButtonCart children={undefined} />
        </div>
        
        </div>
      </nav>
    </>
  );
}
