import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1>Hello world</h1>
    </main>
  );
}

export default App;
