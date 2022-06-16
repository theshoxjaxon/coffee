import AppHead from "../app-head/app-head.js";
import AppAbout from "../app-about-us/app-about-us.js";
import Ourbeast from "../our-beast/our-beast.js";

function App() {
  return (
    <>
      <AppHead />
      <main className="main" style={{ flexGrow: 1 }}>
        <AppAbout />
        <Ourbeast />
      </main>
    </>
  );
}
export default App;
