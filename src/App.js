import "./App.css"
import Header from './components/Header';
import Slider from "./components/Slider";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
  <Header/>
  <TextEditor/>
  <Slider/>
    </div>
  );
}

export default App;
