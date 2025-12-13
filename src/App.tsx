import { useEffect, useState } from "react";
import { ref, onValue, set, remove } from "firebase/database";
import { db } from "./firebase";

type Player = {
  name: string;
  chips: number;
};

function App() {
  const [players, setPlayers] = useState<Record<string, Player>>({});
  const today = new Date().toISOString().split("T")[0];

  const dbRef = ref(db, `chipData/${today}`);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      setPlayers(snapshot.val() || {});
    });
  }, []);

  const updateChips = (name: string, delta: number) => {
    const current = players[name]?.chips || 0;
    set(ref(db, `chipData/${today}/${name}`), { name, chips: current + delta });
  };

  const addPlayer = () => {
    const name = prompt("Enter player name");
    if (name && !players[name]) {
      set(ref(db, `chipData/${today}/${name}`), { name, chips: 0 });
    }
  };

  const resetDay = () => {
    if (confirm("Are you sure you want to reset today's data?")) {
      remove(dbRef);
    }
  };

  return (
    <div className="min-h-screen bg-iosGray p-4 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-iosText">Chip Tracker</h1>
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">{today}</span>
          <div className="flex space-x-2">
            <button
              className="px-4 py-2 bg-iosBlue text-white font-semibold rounded-lg shadow-ios hover:bg-blue-600 transition"
              onClick={addPlayer}
            >
              + Add Player
            </button>
            <button
              className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-ios hover:bg-gray-500 transition"
              onClick={resetDay}
            >
              Reset Day
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {Object.values(players).map(player => (
            <div key={player.name} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-ios">
              <span className="font-semibold text-iosText">{player.name}: {player.chips}</span>
              <div className="flex space-x-2">
                <button
                  className="px-3 py-1 bg-iosGreen text-white rounded-lg shadow-ios hover:bg-green-500 transition"
                  onClick={() => updateChips(player.name, 1)}
                >+1</button>
                <button
                  className="px-3 py-1 bg-iosRed text-white rounded-lg shadow-ios hover:bg-red-500 transition"
                  onClick={() => updateChips(player.name, -1)}
                >-1</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-ios text-center font-bold text-iosText">
          Total Chips: {Object.values(players).reduce((a, b) => a + b.chips, 0)}
        </div>
      </div>
    </div>
  );
}

export default App;
