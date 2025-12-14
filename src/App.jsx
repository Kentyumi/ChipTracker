import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const chipSound = new Audio('/chip.mp3')

export default function App() {
  const [name, setName] = useState('')
  const [players, setPlayers] = useState([])
  const [flyingChips, setFlyingChips] = useState([])

  const addPlayer = () => {
    if (!name) return
    setPlayers([...players, { name, chips: 0 }])
    setName('')
  }

  const spawnChip = () => {
    const id = Date.now()
    setFlyingChips(c => [...c, id])

    setTimeout(() => {
      setFlyingChips(c => c.filter(x => x !== id))
    }, 700)
  }

  const updateChip = (i, value) => {
    chipSound.currentTime = 0
    chipSound.play()
    spawnChip()

    const copy = [...players]
    copy[i].chips += value
    setPlayers(copy)
  }

  return (
    <div className="bg">
      <div className="card">
        <h1>♠ Poker Chip Counter</h1>

        {/* QR */}
        <div className="qr">
          <QRCodeCanvas
            value={window.location.href}
            size={120}
            fgColor="#ff0033"
            bgColor="transparent"
          />
          <p>Scan to join</p>
        </div>

        {/* INPUT */}
        <div className="inputRow">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Player name"
          />
          <button className="addBtn" onClick={addPlayer}>
            Add
          </button>
        </div>

        {/* PLAYERS */}
        {players.map((p, i) => (
          <div className="player" key={i}>
            <span>{p.name}</span>

            <div className="chipArea">
              {flyingChips.map(id => (
                <div key={id} className="chipFly">
                  🎲
                </div>
              ))}

              <div className="chipControl">
                <button onClick={() => updateChip(i, -1000)}>−</button>
                <b>{p.chips}</b>
                <button onClick={() => updateChip(i, 1000)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
