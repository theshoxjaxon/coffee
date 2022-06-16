import "./app-head.css";
import Logo from "../../img/Logo.png";
import beansLogoWhite from "../../img/beansLogoWhite.png";
function AppHead() {
  return (
    <>
      <header>
        <div className="container header__container">
          <div className="nav">
            <ul className="list">
              <li className="item">
                <a className="link" href={"./inbdex.html"}>
                  <img
                    src={Logo}
                    alt="Logo Site Img "
                    width="108"
                    height="35"
                  />
                </a>
              </li>
              <li className="item" style={{ padding: "20px" }}>
                <a className="link" href={"#"}>
                  Our coffee
                </a>
              </li>
              <li className="item" style={{ padding: "20px" }}>
                <a className="link" href={"#"}>
                  For your pleasure
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h1 className="box__head">Everything You Love About Coffee</h1>
            <img
              className="beans"
              src={beansLogoWhite}
              alt="Box section img"
              height="29.3"
            />
            <p className="box__desc">
              We makes every day full of energy and taste
            </p>
            <p className="box__desc">Want to try our beans?</p>
            <button className="buttton">More</button>
          </div>
        </div>
      </header>
    </>
  );
}
export default AppHead;
