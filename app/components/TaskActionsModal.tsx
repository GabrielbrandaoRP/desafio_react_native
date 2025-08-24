import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EditTaskModal from "./EditTaskModal";

type TaskActionsModalProps = {
  visible: boolean;
  onClose: () => void;
  task: { id: string; title: string; completed: boolean };
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const TaskActionsModal: React.FC<TaskActionsModalProps> = ({ visible, onClose, task, onToggleComplete, onDelete, onEdit }) => {
  const [isEditVisible, setEditVisible] = useState(false);

  return (
    <>
      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.option} onPress={() => { setEditVisible(true); onClose(); }}>
              <Ionicons name="create-outline" size={20} color="#3498db" />
              <Text style={[styles.text, { color: "#3498db" }]}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => { onToggleComplete(task.id); onClose(); }}>
              <Ionicons name="checkmark-circle-outline" size={20} color="#2ecc71" />
              <Text style={[styles.text, { color: "#2ecc71" }]}>Concluir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => { onDelete(task.id); onClose(); }}>
              <Ionicons name="trash-outline" size={20} color="#e74c3c" />
              <Text style={[styles.text, { color: "#e74c3c" }]}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Modal de edição */}
      <EditTaskModal
        visible={isEditVisible}
        task={task}
        onClose={() => setEditVisible(false)}
        onSave={onEdit}
      />
    </>
  );
};

export default TaskActionsModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: 220,
    elevation: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});
