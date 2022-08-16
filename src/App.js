import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <header className="navbar fixed-top">
        <div className="left">
          <span className="navbar-brand" href="#">
            WIX
          </span>
          <span className="nav-link">
            <i class="fa-solid fa-tv"></i>
          </span>
          <span className="nav-link">
            <i class="fa-solid fa-mobile-screen"></i>
          </span>
        </div>
        <div className="right">
          <span>Нажмите Редактировать, чтобы создать ваш сайт!</span>
          <span className="nav-link">Подробнее</span>
          <button className="btn btn-primary">Редактировать</button>
        </div>
      </header>
      <section>
        <div className="container text-center">
          <h1>Олег Марков</h1>
          <div className="links">
            <span>Главная</span>
            <span>Обо мне</span>
            <span>Связаться</span>
          </div>
          <div className="images container">
            <div className="left">
              <img src={img1} alt="not found" />
              <img src={img4} alt="not found" />
              <img src={img3} alt="not found" />
            </div>
            <div className="center">
              <img src={img2} alt="not found" />
              <img src={img5} alt="not found" />
              <img src={img6} alt="not found" />
            </div>
            <div className="right">
              <img src={img7} alt="not found" />
              <img src={img8} alt="not found" />
              <img src={img9} alt="not found" />
            </div>
          </div>
        </div>
        <div className="footer container text-center">
          <p>© 2023 Олег Марков. Сайт создан на Wix.com.</p>
          <div className="socials">
            <i class="fa-brands fa-facebook-square fa-2xl"></i>
            <i class="fa-brands fa-flickr fa-2xl"></i>
            <i class="fa-brands fa-twitter-square fa-2xl"></i>
            <i class="fa-brands fa-pinterest-square fa-2xl"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
