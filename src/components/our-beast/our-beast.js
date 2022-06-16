// ? CSS FILE HERE
import "./our-beast.css";
// ! IMAGES FOR PAGE
import presto from "../../img/presto.png";
import solimo from "../../img/solimo.png";
import aramistiko from "../../img/aramistiko.png";
function Ourbeast() {
  return (
    <section className="our-best">
      <div className="container our-best__container">
        <h1 className="our-best__head">Our best</h1>
        <ul className="our-list">
          <li className="our-iten">
            <img
              className="our-img"
              src={solimo}
              alt="img for item our section"
              width="151"
              height="130"
            />
            <h3 className="our-head">Solimo Coffee Beans 2 kg</h3>
            <h1 className="our-price">10.73$</h1>
          </li>
          <li className="our-iten">
            <img
              className="our-img"
              src={presto}
              alt="img for item our section"
              width={"150px"}
              height={"130px"}
            />
            <h3 className="our-head">Solimo Coffee Beans 2 kg</h3>
            <h1 className="our-price">10.73$</h1>
          </li>
          <li className="our-iten">
            <img
              className="our-img"
              src={aramistiko}
              alt="img for item our section"
              width="151"
              height="130"
            />
            <h3 className="our-head">Solimo Coffee Beans 2 kg</h3>
            <h1 className="our-price">10.73$</h1>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Ourbeast;
