import { useState } from "react";
import "./App.css";

import Webinar from "./components/webinar/webinar";
import Email from "./components/email/email";

function App() {
  const [view, setView] = useState("email");

  const queryParameters = new URLSearchParams(window.location.search);
  const variation = queryParameters.get("variation") || "upcoming";

  return (
    <div className="app">
      {view === "email" ? (
        <Email changeView={() => setView("webinar")} variation={variation} />
      ) : (
        <Webinar variation={variation} />
      )}
    </div>
  );
}

export default App;
