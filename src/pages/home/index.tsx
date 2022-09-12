
import "bootstrap/dist/css/bootstrap.min.css";
import './style.scss'
import img from '../../assets/img/coffeCapa.png'

export default function HomePage() {
    return (
      <>
        <div className="container">
            <section className="InitalHome">
              <div className="textarea">
                  <h1>Enjoy your  <span className="lightText">coffee</span> <br /> before activity</h1>
                  <p>Boost your productivity and build your <br /> mood with a glass of coffee in the morning</p>
              </div>
              <div>
                <img src={img} className="illustrationImg" alt="imagem do café" />
              </div>
              
            </section>
        </div>
      </>
    );
  }
