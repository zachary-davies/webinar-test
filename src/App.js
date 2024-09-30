import { useState } from "react";
import "./App.css";

import Webinar from "./components/webinar/webinar";
import Email from "./components/email/email";

function App() {
  const [view, setView] = useState("email2");

  return (
    <div className="app">
      {view === "email" ? (
        <Email changeView={() => setView("webinar")} />
      ) : (
        <Webinar />
      )}
    </div>
  );
}

export default App;
