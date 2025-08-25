// *TODO: Criar função de indicador de página semelhante ao filterTabs

import { useState } from "react";
import { Tabs } from "expo-router";
import { View, TouchableOpacity, Text, StyleSheet, Modal, Task } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { themes } from "@/globals/themes";
import { AlignCenter, Plus } from 'lucide-react-native'; 
import AddTaskModal from "@/app/components/AddTaskModal";
import Logout from "./logout";
import { TasksProvider } from "../context/TaskContext";

export default function UserLayout() {


  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <TasksProvider>

      <View style={{
        flex: 1, justifyContent: "center", marginBottom: 40, height: 100,
      }}>
      
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 5,
            justifyContent: "space-between",
          },
          tabBarActiveTintColor: themes.colors.green,
          tabBarInactiveTintColor: themes.colors.gray,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={24} color={themes.colors.gray} />
            ),
          }}
        />
        <TouchableOpacity
          style={styles.fab}
          onPress={() => setIsAddModalVisible(true)}>
      
          <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
        <Tabs.Screen
          name="logout"
          options={{
            tabBarLabel: "Logout",
            tabBarIcon: () => (
              <Ionicons name="log-out-outline" size={32} color={themes.colors.gray} />
            ),
          }}
        />
        
      </Tabs>
      <View style={styles.fabCtn}>
        <TouchableOpacity style={styles.fab} onPress={() => setIsAddModalVisible(true)}>
          <Plus color="white"/>
        </TouchableOpacity>
      </View>
      
      <AddTaskModal
      visible={isAddModalVisible}
      onClose={() => setIsAddModalVisible(false)}
      // onAddTask={(newTask) => setTasks((prev) => [...prev, newTask])}
      />
     
      
    </View>
    </TasksProvider>
  );
}

const styles = StyleSheet.create({
  fabCtn: {
    position: "absolute",
    bottom: -40,
    left: 0,
    right: 140,
    alignItems: "center",
    justifyContent: "center",
    
  },
  fab: {
    position: "absolute",
    bottom: 70, // fica acima da TabBar
    right: 20,
    backgroundColor: themes.colors.green,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
