import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TaskActionsModal from "./TaskActionsModal";
import TaskDescModal from "./TaskDescModal";
import { themes } from "@/globals/themes";


type TaskItemProps = {
  task: {
    id: string;
    description: string;
    completed: boolean;
  };
  onPress:()  => void;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const Task: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [isActionsVisible, setActionsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Checkbox simples */}
      <TouchableOpacity onPress={(onPress) => setDetailVisible(true)} style={styles.taskInfo}>
        <Ionicons
          name={task.completed ? "checkmark-circle" : "ellipse-outline"}
          size={22}
          color={task.completed ? themes.colors.green : themes.colors.gray}
        />
        <Text style={[styles.taskText, task.completed && styles.completed]}>{task.description}</Text>
      </TouchableOpacity>

      {/* Botão dos 3 pontos */}
      <TouchableOpacity onPress={() => setActionsVisible(true)}>
        <Ionicons name="ellipsis-vertical" size={20} color="#555" />
      </TouchableOpacity>

      {/* Modal de detalhes */}
      <TaskDescModal 
        visible={isDetailVisible} 
        task={{ 
          ...task, 
          status: task.completed ? "completed" : "pending", 
          createdAt: new Date().toISOString(), 
          updatedAt: new Date().toISOString() 
        }} 
        onClose={() => setDetailVisible(false)} 
      />

      {/* Modal de ações */}
      <TaskActionsModal
        visible={isActionsVisible}
        onClose={() => setActionsVisible(false)}
        task={task}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggleComplete={onToggleComplete}
      />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
  },
  taskInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
    color: themes.colors.textDark,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
});
