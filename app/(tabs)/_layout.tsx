import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { COLORS, Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        headerTintColor:COLORS.primary2,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={COLORS.darkQoutes} />
          ),
          
        }}
      />
       <Tabs.Screen
        name="list"
        options={{
          title: 'Student List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list-circle' : 'list-circle-outline'} color={COLORS.darkQoutes} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={COLORS.darkQoutes} />
          ),
        }}
      />
    </Tabs>
  );
}
