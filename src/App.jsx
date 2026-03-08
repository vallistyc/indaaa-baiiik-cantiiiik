import { useState } from "react"
import "./App.css"

function App() {

  const [screen, setScreen] = useState("question")
  const [noCount, setNoCount] = useState(0)
  const [position, setPosition] = useState({x:0, y:0})

  const handleYes = () => {
    setScreen("thanks")
  }

  const handleNo = () => {
    const newCount = noCount + 1
    setNoCount(newCount)

    // setelah klik kedua, tombol mulai kabur
    if(newCount >= 2){
      const randomX = Math.random() * 300 - 150
      const randomY = Math.random() * 300 - 150

      setPosition({
        x: randomX,
        y: randomY
      })
    }
  }

  if(screen === "thanks"){
    return(
      <div className="container">
        <h1>Makasiii ya indaaa yg cantiik baiik imuuut maniiis pinteerrr gemoyyy idamaannn 🥹</h1>
        <p>hehe &lt;3</p>
      </div>
    )
  }

  return (
    <div className="container">

      <h1>Mau maafin Kak Vall ga? 🥺</h1>

      {noCount === 1 && (
        <p className="warning">
          Serius niih gamau maafin? 😭
        </p>
      )}

      <div className="buttons">

        <button className="yes" onClick={handleYes}>
          Iya
        </button>

        <button
          className="no"
          onClick={handleNo}
          style={{
            transform:`translate(${position.x}px, ${position.y}px)`
          }}
        >
          Ga
        </button>

      </div>

    </div>
  )
}

export default App