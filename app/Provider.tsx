import { CurrentToast } from '@/CurrentToast'
import { type mode, themeWithToggle } from '@/atoms/theme'
import { Scene } from '@/r3f'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { useAtom } from 'jotai'
import { Appearance, StatusBar, StyleSheet } from 'react-native'
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui'
import { config } from '../tamagui.config'

export const themeAtom = themeWithToggle('dark' as mode)

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const [scheme] = useAtom(themeAtom)

  const current = () => {
    if (scheme === ('system' as mode)) {
      return Appearance.getColorScheme() as mode
    }
    return scheme
  }

  return (
    <TamaguiProvider config={config} defaultTheme={current() === 'dark' ? 'dark' : 'light'} {...rest}>
      <ThemeProvider value={current() === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle={current() === 'dark' ? 'light-content' : 'dark-content'} />
        <ToastProvider
          swipeDirection="horizontal"
          duration={6000}
          native={
            [
              /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
              // 'mobile'
            ]
          }
        >
          {children}
          <Scene style={styles.scene} />
          <CurrentToast />
          <ToastViewport t="$8" l={0} r={0} />
        </ToastProvider>
      </ThemeProvider>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  scene: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
})
