import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
    return(
        <View className="items-center justify-center gap-0">
            <Image
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold':
                'font-regular'} text-xs`} style={{color:color}}>
            
                 {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
   <>
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle:{
          backgroundColor: '#F5EFF7',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        }
       }}
       >    
        <Tabs.Screen
            name="home"
            options={{
                title:"Home",
                headerShown: false,
            tabBarIcon:({icon, focused}) => {
                <TabIcon
                    
                />



            }
            }}
        />

    </Tabs>
   </>
  )
}

export default TabsLayout