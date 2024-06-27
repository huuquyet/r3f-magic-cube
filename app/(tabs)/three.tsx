import MyView, { Common, MagicCube } from '@/components'
import { YStack } from 'tamagui'

export default function TabThreeScreen() {
  return (
    <YStack f={1} ai="center" jc="center">
      <MyView>
        <MagicCube aspect={3} />
        <Common orbit color="black" />
      </MyView>
    </YStack>
  )
}
