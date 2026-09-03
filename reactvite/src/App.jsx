
import ICard from './component/ICard'
import './App.css'

function App() {
  let a = 23;
  let name = "Ram";

  return (
    <div
      style={{
        border: "1px solid black",
        width: "1000px",
        height: "400px",
        textAlign: "center"
      }}
    >
      <h2>Welcome to React using Vite</h2>

      <h2>Value of a={a}</h2>

      <h2>Name={name}</h2>

      <div>
        <ICard />
      </div>

    </div>
  )
}

export default App