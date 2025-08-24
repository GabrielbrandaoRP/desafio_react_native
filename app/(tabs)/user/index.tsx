import FilterTabs from '@/app/components/FilterTabs';
import Task from '@/app/components/Task'
import TaskDescModal from '@/app/components/TaskDescModal';
import { themes } from '@/globals/themes'
import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import { useTasks } from '../context/TaskContext';

// const mockTasks = [
//   {
//     id: "1",
//     title: "Tarefa 1",
//     status: "A fazer",
//     createdAt: "17/03/2021",
//     updatedAt: "17/03/2021",
//     completed: false, // Add completed property
//   },
//   {
//     id: "2",
//     title: "Tarefa 2",
//     status: "Feita",
//     createdAt: "17/03/2021",
//     updatedAt: "17/03/2021",
//     completed: true, // Add completed property
//   },
//   {
//     id: "3",
//     title: "Tarefa 3",
//     status: "A fazer",
//     createdAt: "17/03/2021",
//     updatedAt: "17/03/2021",
//     completed: false, // Add completed property
//   },
// ];


export default function Home() {
  
  
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = (task: any) => {
    setSelectedTask(task);
    setModalVisible(true);
  };
  function setFilter(filter: 'todas' | 'fazer' | 'feitas'): void {
    throw new Error('Function not implemented.');
  }
  const { tasks } = useTasks();
  return (
    <View style={styles.container}>
      <FilterTabs onChange={setFilter} />
      <Text style={styles.textTitle}>Seg. 25 de agosto de 2025</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task task={item} onPress={() => handleOpenModal(item)} onToggleComplete={function (id: string): void {
            throw new Error('Function not implemented.');
          } } onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          } } onEdit={function (id: string, newTitle: string): void {
            throw new Error('Function not implemented.');
          } } />
        )}
      />

      <TaskDescModal
        visible={modalVisible}
        task={selectedTask}
        onClose={() => setModalVisible(false)}
      />

      <Text style={styles.footer}>
        Total de tarefas: {tasks.filter(t => t.completed).length}/{tasks.length}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: themes.colors.background,
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: themes.colors.textDark,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: "30%", // 👈 ocupa só 1/3 da tela
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#e0e0e0",
  },
  saveButton: {
    backgroundColor: themes.colors.green,
  },
  cancelText: {
    color: "#333",
    fontWeight: "600",
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
  footer: {
    color: themes.colors.gray,
    textAlign: "center",
    padding: 10,
    bottom: 30,
    fontWeight: "500",
    left: -10,
  },
  taskItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  }
})


