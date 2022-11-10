import {assets} from "./assets/index";
import "./App.css"
import Poc from "./Poc/"
// import Poc from "./PocArchived.jsx"

function App() {
  return (
    <div className="App">
      <h3>relighting </h3>
      <Poc img={assets}/>
      {/* <Poc /> */}
    </div>
  )
}

export default App
