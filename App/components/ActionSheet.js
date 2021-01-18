import React from 'react'
import { Text } from 'react-native'
import ActionSheet from 'react-native-actions-sheet';


const ActionSheetCom = ({actionSheet}) => {
    return (
        <ActionSheet
        ref={actionSheet}
        bounceOnOpen={true}
        bounciness={8}
        gestureEnabled={true}>
          <Text>more information </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            finibus lobortis nibh, ultrices elementum purus porta et. Donec
            maximus imperdiet libero, volutpat gravida justo mollis nec. Mauris
            imperdiet blandit accumsan. Sed pellentesque blandit felis, quis
            facilisis sem suscipit id. Curabitur vulputate neque enim
          </Text>
      </ActionSheet>
    )
}

export default ActionSheetCom;
