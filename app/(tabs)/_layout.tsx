import { Heading1, Heading2, Heading3, Heading4 } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { useTheme } from 'tamagui'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Aspect I',
          headerShown: false,
          tabBarIcon: ({ color }) => <Heading1 color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Aspect II',
          headerShown: false,
          tabBarIcon: ({ color }) => <Heading2 color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Aspect III',
          headerShown: false,
          tabBarIcon: ({ color }) => <Heading3 color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Aspect IV',
          headerShown: false,
          tabBarIcon: ({ color }) => <Heading4 color={color} />,
        }}
      />
    </Tabs>
  )
}
