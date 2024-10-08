import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
    return(
        <TouchableOpacity onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-primary rounded-xl min-h-[62] justify-center items-start ${containerStyles} ${isLoading ? 'opacity-50': ''}`}>
            <Text className={`text-newBackGround font-psemibold text-lg ${textStyles}`}> {title} </Text>
         </TouchableOpacity>
    );
}

export default CustomButton