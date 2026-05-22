function PlayerCard({ xp, nextLevelXp, level, rank }) {
  const progress = (xp / nextLevelXp) * 100;

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl mb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-zinc-400">
            Rango actual
          </p>

          <h2 className="text-3xl font-bold text-yellow-400">
            {rank}
          </h2>
        </div>

        <div className="text-right">
          <p className="text-zinc-400">
            Nivel
          </p>

          <h2 className="text-4xl font-bold">
            {level}
          </h2>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span>XP</span>
          <span>{xp} / {nextLevelXp}</span>
        </div>

        <div className="w-full bg-zinc-800 h-6 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-600 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;