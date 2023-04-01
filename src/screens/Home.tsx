import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabsHome from './BottomTabs/BottomTabsHome';
import Plus from './BottomTabs/Plus';
import Settings from './BottomTabs/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/Entypo'

export default function Home() {
    const Tab = createBottomTabNavigator();
    
    const TabBarAdvancedButton = ({ bgColor, ...props }: any) => {
        return (
            <View style={styles.container} pointerEvents="box-none">
                <TouchableOpacity
                    style={styles.button}
                    onPress={props.onPress}
                >
                    <AntDesign name='plus' size={30} color={'#FFF'} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#49A6FC' }}>
            <Tab.Screen
                name="BottomTabsHome"
                options={{
                    tabBarIcon: ({ color }: any) => (
                        <Ionicons name='layers' size={20} color={color}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
                component={BottomTabsHome}
            />
            <Tab.Screen
                name="Plus"
                options={{
                    tabBarButton: (props) => (
                        <TabBarAdvancedButton
                            bgColor={"#FFF"} // background space color.
                            {...props}
                        />
                    )
                }}
                component={Plus}
            />
            <Tab.Screen
                name="Settings"
                options={{
                    tabBarIcon: ({ color }: any) => (
                        <Ionicons name='settings-sharp' size={20} color={color}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
                component={Settings}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 75,
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        top: 0,
    },
    button: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#49A6FC',
    }
})