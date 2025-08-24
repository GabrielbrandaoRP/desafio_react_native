import { themes } from "@/globals/themes";
import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  task: {
    id: string;
    title: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export default function TaskDescModal({ visible, onClose, task }: Props) {
  if (!task) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.value}>{task.title}</Text>

          <Text style={styles.label}>Id</Text>
          <Text style={styles.value}>{task.id}</Text>

          <Text style={styles.label}>Data de criação</Text>
          <Text style={styles.value}>{task.createdAt}</Text>

          <Text style={styles.label}>Última atualização</Text>
          <Text style={styles.value}>{task.updatedAt}</Text>

          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>{task.status}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Voltar para Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modal: {
    width: "80%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },
  value: {
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: themes.colors.green,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
