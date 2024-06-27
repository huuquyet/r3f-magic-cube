import MyView, { Common, MagicCube } from '@/components'
import { YStack } from 'tamagui'

export default function TabTwoScreen() {
  return (
    <YStack f={1} ai="center" jc="center">
      <MyView>
        <MagicCube aspect={2} />
        <Common orbit color="black" />
      </MyView>
    </YStack>
  )
}
