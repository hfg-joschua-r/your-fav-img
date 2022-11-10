import assets from "./assets/index";
import "./App.css"
import Poc from "./Poc/"
// import Poc from "./PocArchived.jsx"

function App() {
  return (
    <div className="App">
      <h3>relighting </h3>
      <Poc img={assets[1]}/>
      <hr/>
      <Poc img={assets[0]}/>
      <Poc img={assets[2]}/>
      <Poc img={assets[3]}/>

      {/* <Poc /> */}
    </div>
  )
}

export default App
