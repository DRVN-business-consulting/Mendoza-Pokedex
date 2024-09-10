import {StyleSheet, View, Text, Button} from "react-native";
import {Link, router} from "expo-router";
import {useMyTheme} from "../../src/context/MyTheme";

export default function FavoriteScreen() {
    const {  theme, setTheme, data } = useMyTheme();
    return (
        <View 
            style = {[styles.container, (theme === 'light' ? styles.container : styles.containerDark)]}>
            <Text 
                style = {(theme === 'light' ? styles.textlayout : styles.textlayoutDark)}>No Favorite</Text>

            
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
    textlayout: {
        fontSize: 25
    },
    textlayoutDark: {
        color: "white",
        fontSize: 25
    },
});