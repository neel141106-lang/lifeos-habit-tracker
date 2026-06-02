function HabitCard({
  id,
  name,
  streak,
  completed,
  completeHabit,
}) {
  return (
    <div className="habit-card">
      <div>
        <h3>{name}</h3>
        <p>🔥 {streak} day streak</p>
      </div>

      <button
        onClick={() => completeHabit(id)}
      >
        {completed
          ? "Completed ✅"
          : "Complete"}
      </button>
    </div>
  );
}

export default HabitCard;