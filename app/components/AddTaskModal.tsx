import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTasks } from "../(tabs)/context/TaskContext";

// type AddTaskModalProps = {
//   visible: boolean;
//   onClose: () => void;
//   onAddTask: (task: { id: number; description: string; completed: boolean }) => void;
// };
type Props = { visible: boolean; onClose: () => void; };
export default function AddTaskModal({ visible, onClose }: Props) {
  const { addTask } = useTasks();
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    const text = description.trim();
    if (!text) return;
    await addTask(text);     // cria já com completed: false
    setDescription("");
    onClose();               // fecha e “volta” para a Home
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Criar nova tarefa</Text>

          <TextInput
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
          />

          <View style={styles.actions}>
            <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onClose}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.save]} onPress={handleSave}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  cancel: {
    backgroundColor: "#f1f1f1",
    marginRight: 10,
  },
  save: {
    backgroundColor: "#00C851",
    marginLeft: 10,
  },
  cancelText: {
    color: "#444",
    fontWeight: "500",
  },
  saveText: {
    color: "#fff",
    fontWeight: "500",
  },
});
