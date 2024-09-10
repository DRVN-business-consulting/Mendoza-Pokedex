import {StyleSheet, View, Text, Button, Switch, TouchableOpacity} from "react-native";
import {Link, router} from "expo-router";
import {useMyTheme} from "../../src/context/MyTheme";

export default function SettingsScreen() {
    const {  theme, setTheme, toggleTheme, data } = useMyTheme();
    return (
        <View 
            style = {[styles.container, (theme === 'light' ? styles.container : styles.containerDark)]}>
            {/* <Text>Settings {theme}</Text> */}
            <Text>
                {theme}
            </Text>
            <TouchableOpacity
                onPress={() => toggleTheme()}
                style = {{
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                        borderRadius: 16,
                        backgroundColor: '#fec202',
                        width: "80%",
                        marginTop: 20,
                        borderColor: "#2f489c",
                        borderStyle: "solid",
                        borderWidth: 10,
                }}>
                <Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>Change Theme</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.dismissAll}
                style = {{
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                        borderRadius: 16,
                        backgroundColor: '#fec202',
                        width: "80%",
                        marginTop: 20,
                        borderColor: "#2f489c",
                        borderStyle: "solid",
                        borderWidth: 10,
                }}>
                <Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>Logged Off</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});