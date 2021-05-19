import './App.css';
import Weather from "./Weather"
import "./Weather.css"

function App() {
  return (
    <div className="App">
     <Weather defaultCity="Zurich" />
     <footer>
       <div className="name">
         This project is created by Xheni Xhelilaj and is 
       <a href="https://github.com/xhenixhelilaj/react-weather-project" target="_blank"> open-sourced </a> 
       on GitHub.
        </div>
       </footer>
    </div>
  );
}

export default App;
