import {StyleSheet, View, Text, Button, Image, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import {Link, router} from "expo-router";
import React from "react";
import {useMyTheme} from "../../src/context/MyTheme";
import PokemonLogo from '../../assets/pokemonName.png'; 
import BgImage from '../../assets/Pokedex-preview.png'; 

export default function ProfileScreen() {
    const {  theme, setTheme, data } = useMyTheme();

    const posts = require('../../assets/json/posts.json');
    console.log('posts:', posts.length);

    return (
            <View style={styles.container}>
                <Image
                    source = {PokemonLogo}
                    style = {{
                        borderBottomColor: "red",
                        borderBottomWidth: 2,
                    }} />
                <FlatList
                    style = {{
                        width: "100%"
                    }}
                    data = {posts}
                    renderItem={ ({item}) => (
                        <TouchableOpacity
                            onPress={() => router.push('profile/ ' + item.id)}
                            style = {styles.pokemonList}>
                                <Image
                                    source = {{
                                        uri : item.image.hires
                                    }}
                                    style = {styles.pokemonThumb}></Image>
                                <Text style>{item.name.english}</Text>
                        </TouchableOpacity>
                    )}></FlatList>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
		width: "100%",
		height: "100%",
    },
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
    pokemonList: {
        borderBottomColor: "red",
        borderBottomWidth: 2,
        padding: 20,
        flex: 1,
        alignItems: "center"
    },
    pokemonThumb: {
        width :100,
        height: 100,
        textAlign: "center"
    }
});