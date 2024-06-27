import MyView, { Common, MagicCube } from '@/components'
import { YStack } from 'tamagui'

export default function TabFourScreen() {
  return (
    <YStack f={1} ai="center" jc="center">
      <MyView>
        <MagicCube aspect={4} />
        <Common orbit color="black" />
      </MyView>
    </YStack>
  )
}
