function MissionCard({
  id,
  title,
  description,
  reward,
  status,
  onComplete,
}) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-5 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="text-zinc-400">
          {description}
        </p>
      </div>

      <div>
        {status === "done" ? (
          <span className="text-green-400 font-bold">
            ✅ COMPLETADA
          </span>
        ) : (
          <button
            onClick={() => onComplete(id, reward)}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl font-bold transition-all"
          >
            Completar
          </button>
        )}
      </div>
    </div>
  );
}

export default MissionCard;