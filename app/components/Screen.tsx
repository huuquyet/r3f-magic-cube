import { Common, MagicCube } from '@/r3f'
import { View } from '@react-three/drei'
import { StyleSheet } from 'react-native'
import { YStack } from 'tamagui'

export function Screen({ aspect }: { aspect: number }) {
  return (
    <YStack f={1} ai="center" jc="center">
      <View style={styles.view}>
        <MagicCube aspect={aspect} />
        <Common orbit color="$background" />
      </View>
    </YStack>
  )
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})
