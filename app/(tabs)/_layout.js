import {Stack, Tabs} from "expo-router";
import { View } from "react-native";
import {MyThemeProvider} from "../../src/context/MyTheme";

export default function TabLayout() {
    return (
        <MyThemeProvider>

            <Tabs>
                <Tabs.Screen 
                    name='index'
                    options={{
                        headerShown: false,
                        title: 'All Pokemon'
                    }}/>
                <Tabs.Screen 
                    name='favorite'
                    options={{
                        headerShown: false,
                        title: 'Favorites'
                    }} />
                <Tabs.Screen 
                    name='settings'
                    options={{
                        headerShown: false,
                        title: 'App Settings'
                    }} />
            </Tabs>
        </MyThemeProvider>
        
    );
}