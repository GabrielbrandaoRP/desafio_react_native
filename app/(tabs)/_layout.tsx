import { Tabs } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
   
      <Tabs>
        <Tabs.Screen name='Home'options={{title:'Home'}}/>
        <Tabs.Screen name="AddTask" options={{ title: 'Adicionar' }} />
        <Tabs.Screen name="LogOut" options={{ title: 'Logout' }} /> 
    </Tabs>
    
    
  )
}
