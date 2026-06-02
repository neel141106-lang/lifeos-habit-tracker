function HabitCard({
  id,
  name,
  streak,
  completed,
  completeHabit,
  deleteHabit,
}) {
  return (
    <div className="habit-card">
      <div>
        <h3>{name}</h3>

        <p>
          🔥 {streak} day streak
        </p>
      </div>

      <div className="habit-actions">
        <button
          onClick={() =>
            completeHabit(id)
          }
        >
          {completed
            ? "Completed ✅"
            : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteHabit(id)
          }
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default HabitCard;