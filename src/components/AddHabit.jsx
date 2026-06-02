import { useState } from "react";

function AddHabit({ addHabit }) {
  const [habitName, setHabitName] =
    useState("");

  const handleSubmit = () => {
    if (!habitName.trim()) return;

    addHabit(habitName);

    setHabitName("");
  };

  return (
    <div className="add-habit">
      <input
        type="text"
        placeholder="Enter habit..."
        value={habitName}
        onChange={(e) =>
          setHabitName(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        Add Habit
      </button>
    </div>
  );
}

export default AddHabit;