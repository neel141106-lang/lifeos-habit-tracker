function HabitCard({
  id,
  name,
  streak,
  completed,
  completeHabit,
  deleteHabit,
  editHabit,
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
          className="edit-btn"
          onClick={() =>
            editHabit(id)
          }
        >
          ✏️
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