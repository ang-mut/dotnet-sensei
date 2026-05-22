import { useEffect, useState } from "react";

import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import MissionCard from "./components/MissionCard";

function App() {
  // =========================
  // STATE
  // =========================

  const [xp, setXp] = useState(70);
  const [level, setLevel] = useState(0);
  const [rank, setRank] = useState("🌱 Aprendiz");
  const [missions, setMissions] = useState([
  {
    id: 1,
    title: "Completar Nivel 0",
    description: "Aprender fundamentos de .NET",
    reward: 100,
    status: "done",
  },
  {
    id: 2,
    title: "Aprender React Components",
    description: "Separar UI en componentes",
    reward: 50,
    status: "progress",
  },
  {
    id: 3,
    title: "Guardar progreso local",
    description: "Usar localStorage y useEffect",
    reward: 75,
    status: "progress",
  },
]);

  // =========================
  // LOAD SAVE DATA
  // =========================

  useEffect(() => {
    const savedXp = localStorage.getItem("xp");
    const savedLevel = localStorage.getItem("level");
    const savedRank = localStorage.getItem("rank");
    const savedMissions = localStorage.getItem("missions");

    if (savedXp) {
      setXp(Number(savedXp));
    }

    if (savedLevel) {
      setLevel(Number(savedLevel));
    }

    if (savedRank) {
      setRank(savedRank);
    }

    if (savedMissions) {
  setMissions(JSON.parse(savedMissions));
}
  }, []);

  // =========================
  // SAVE DATA
  // =========================

  useEffect(() => {
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("rank", rank);
    localStorage.setItem(
  "missions",
  JSON.stringify(missions)
);
  }, [xp, level, rank, missions]);

  // =========================
  // GAME LOGIC
  // =========================

  function gainXp(amount) {
    const newXp = xp + amount;

    if (newXp >= 100) {
      const nextLevel = level + 1;

      setLevel(nextLevel);
      setXp(0);

      if (nextLevel >= 3) {
        setRank("🔧 Junior");
      }
    } else {
      setXp(newXp);
    }
  }

  function completeMission(id, reward) {
  const updatedMissions = missions.map((mission) => {
    if (mission.id === id && mission.status !== "done") {
      gainXp(reward);

      return {
        ...mission,
        status: "done",
      };
    }

    return mission;
  });

  setMissions(updatedMissions);
}

  function resetProgress() {
    localStorage.clear();
    window.location.reload();
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        <PlayerCard
          xp={xp}
          nextLevelXp={100}
          level={level}
          rank={rank}
        />

        {/* ACTION BUTTONS */}

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => gainXp(10)}
            className="bg-green-500 hover:bg-green-600 transition-all px-6 py-3 rounded-2xl font-bold"
          >
            Ganar +10 XP
          </button>

          <button
            onClick={resetProgress}
            className="bg-red-500 hover:bg-red-600 transition-all px-6 py-3 rounded-2xl font-bold"
          >
            Reset Progress
          </button>
        </div>

        {/* MISSIONS */}

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">
            🎯 Misiones
          </h2>

          <div className="space-y-4">
            {missions.map((mission) => (
              <MissionCard
                id={mission.id}
                key={mission.id}
                title={mission.title}
                description={mission.description}
                reward={mission.reward}
                status={mission.status}
                onComplete={completeMission}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;