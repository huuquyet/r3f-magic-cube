import MyView, { Common, MagicCube } from '@/components'
import { StyleSheet } from 'react-native'
import { YStack } from 'tamagui'

export default function AspectThree() {
  return (
    <YStack f={1} ai="center" jc="center">
      <MyView style={styles.view}>
        <MagicCube aspect={3} />
        <Common orbit color="black" />
      </MyView>
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
