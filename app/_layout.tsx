import '../tamagui-web.css'
import { Provider, themeAtom } from '@/Provider'
import { Inter_400Regular, Inter_900Black, useFonts } from '@expo-google-fonts/inter'
import { Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import { inject } from '@vercel/analytics'
import { SplashScreen, Stack } from 'expo-router'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Button, XStack } from 'tamagui'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  inject()

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: 'Magic Cube',
            headerRight: () => <ThemeButton />,
          }}
        />
      </Stack>
    </Provider>
  )
}

const icons = {
  dark: <Moon />,
  light: <Sun />,
  system: <Monitor />,
}

const ThemeButton = () => {
  const [theme, toggle] = useAtom(themeAtom)

  return (
    <XStack mr="$4" gap="$2">
      <Button icon={icons[theme]} onPress={() => toggle()} circular />
    </XStack>
  )
}
