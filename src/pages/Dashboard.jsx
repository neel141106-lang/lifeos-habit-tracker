import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import HabitCard from "../components/HabitCard";
import AddHabit from "../components/AddHabit";

function Dashboard() {
  const [habits, setHabits] = useState(() => {
    const savedHabits =
      localStorage.getItem("habits");

    return savedHabits
      ? JSON.parse(savedHabits)
      : [
          {
            id: 1,
            name: "Workout",
            streak: 12,
            completed: false,
          },
          {
            id: 2,
            name: "Read Book",
            streak: 20,
            completed: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      streak: 0,
      completed: false,
    };

    setHabits([
      ...habits,
      newHabit,
    ]);
  };

  const completeHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed:
                !habit.completed,
            }
          : habit
      )
    );
  };

  const deleteHabit = (id) => {
  setHabits(
    habits.filter(
      (habit) => habit.id !== id
    )
  );
};
  const editHabit = (id) => {
  const newName = prompt(
    "Enter new habit name"
  );

  if (!newName) return;

  setHabits(
    habits.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            name: newName,
          }
        : habit
    )
  );
};
  const completedCount =
    habits.filter(
      (habit) => habit.completed
    ).length;

  const progress =
    habits.length > 0
      ? Math.round(
          (completedCount /
            habits.length) *
            100
        )
      : 0;

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <h1>
          Good Evening 👋
        </h1>

        <div className="cards">
          <StatsCard
            title="🔥 Streak"
            value="15 Days"
          />

          <StatsCard
            title="⭐ XP"
            value={
              completedCount * 10
            }
          />

          <StatsCard
            title="🎯 Progress"
            value={`${progress}%`}
          />
        </div>

        <h2 className="section-title">
          Add Habit
        </h2>

        <AddHabit
          addHabit={addHabit}
        />

        <h2 className="section-title">
          Today's Habits
        </h2>

        <div className="habit-list">
          {habits.map(
            (habit) => (
              <HabitCard
  key={habit.id}
  id={habit.id}
  name={habit.name}
  streak={habit.streak}
  completed={habit.completed}
  completeHabit={completeHabit}
  deleteHabit={deleteHabit}
  editHabit={editHabit}
/>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;