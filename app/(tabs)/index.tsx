import MyView, { Common, MagicCube } from '@/components'
import { YStack } from 'tamagui'

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" jc="center">
      <MyView>
        <MagicCube aspect={1} />
        <Common orbit color="black" />
      </MyView>
    </YStack>
  )
}
