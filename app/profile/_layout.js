import {Stack} from "expo-router";
import { View } from "react-native";
import {MyThemeProvider} from "../../src/context/MyTheme";

export default function ProfileLayout() {
    return (
        <MyThemeProvider>
            <Stack>
                <Stack.Screen 
                    name='index'
                    options={{
                        headerShown: false,
                        title: 'All Pokemon'
                    }}/>
                <Stack.Screen 
                    name='[id]'
                    options={{
                        headerShown: false,
                        title: 'Pokemon Details'
                    }}/>
            </Stack>
        </MyThemeProvider>
        
    );
}