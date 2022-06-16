import "./app-about-us.css";
import BearnDark from "../../img/beans-logo-dark.png";
function AppAbout() {
  return (
    <section className="About-Us">
      <div className="container">
        <h1 className="main__head">About Us</h1>
        <div className="bearns__black">
          <img src={BearnDark} alt="Bearns Logo Black Img" />
        </div>
        <div className="main__desc">
          <p className="main-desc">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
          <p className="main-desc">
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AppAbout;
