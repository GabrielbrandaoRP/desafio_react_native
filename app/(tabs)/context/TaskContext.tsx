import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Task = {
  id: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

type Ctx = {
  tasks: Task[];
  addTask: (description: string) => Promise<void>;
};

const TasksContext = createContext<Ctx | undefined>(undefined);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const API_URL = "http://localhost:8080/tasks"; // ajuste quando sua API estiver pronta

  // Mock inicial se a API não responder
  const fallback = [
    { id: "1", description: "Tarefa 1", completed: false, createdAt: "17/03/2021", updatedAt: "17/03/2021" },
    { id: "2", description: "Tarefa 2", completed: true,  createdAt: "17/03/2021", updatedAt: "17/03/2021" },
    { id: "3", description: "Tarefa 3", completed: false, createdAt: "17/03/2021", updatedAt: "17/03/2021" },
  ];

  const load = async () => {
    try {
      const r = await fetch(API_URL);
      if (!r.ok) throw new Error();
      const data: Task[] = await r.json();
      setTasks(data);
    } catch {
      setTasks(fallback);
    }
  };

  useEffect(() => { load(); }, []);

  const addTask = async (description: string) => {
    const payload = { description, completed: false };
    try {
      const r = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error();
      await load();
    } catch {
      // fallback local
      const now = new Date().toLocaleDateString();
      const newTask: Task = {
        id: String(Date.now()),
        description,
        completed: false,
        createdAt: now,
        updatedAt: now,
      };
      setTasks(prev => [newTask, ...prev]); // aparece imediatamente na Home
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasks deve ser usado dentro de TasksProvider");
  return ctx;
};
