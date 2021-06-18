import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Profilephoto from "./Component/Profile/Profilephoto";
import Fullname from "./Component/Profile/Fullname";
import Address from "./Component/Profile/Address";
function App() {
  return (
    <div className="App">
      <main>
        <section className="profile">
          <Profilephoto />
          <Fullname />
          <Address />
        </section>
      </main>
    </div>
  );
}

export default App;
