import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Micro Frontend Demo</h1>
      <div className="menu"></div>
    </div>
  );
}

export default App;
