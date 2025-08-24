import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

type EditTaskModalProps = {
  visible: boolean;
  task: { id: string; title: string; completed: boolean };
  onClose: () => void;
  onSave: (id: string, newTitle: string) => void;
};

const EditTaskModal: React.FC<EditTaskModalProps> = ({ visible, task, onClose, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");

  const handleSave = () => {
    onSave(task.id, title);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.label}>Editar tarefa</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <View style={styles.buttons}>
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
};

export default EditTaskModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "85%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancel: {
    backgroundColor: "#eee",
    marginRight: 10,
  },
  save: {
    backgroundColor: "#2ecc71",
  },
  cancelText: {
    color: "#555",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
