import logo from './logo.svg';
import './App.css';

function App() {
  fetch("https://472f948f-fbdf-4d46-bd71-1180982e048b-00-31apl40sif0ny.sisko.replit.dev/add-patient").then((e)=>e.json()).then((e)=>console.log(e))
  return (

    <div className="App">

    </div>
  );
}

export default App;
