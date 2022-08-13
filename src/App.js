import { useEffect } from 'react';
import './styles/App.css';

function App({ hideLoader }) {
  useEffect(hideLoader, [])
  return (
    <div className="App">
      <div>App is loaded</div>
    </div>
  );
}

export default App;
