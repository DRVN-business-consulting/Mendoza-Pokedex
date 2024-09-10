import {Alert, Button, Text, View, Image, StyleSheet,ImageBackground, TouchableOpacity} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useMyTheme} from "../../src/context/MyTheme";
import React from "react";
import axios from "axios";
import BgImage from '../../assets/Pokedex-preview.png'; 

export default function ViewProfile() {
    const { id } = useLocalSearchParams();
    const {  theme, setTheme, data } = useMyTheme();
    const [pokeDetail, setPokeDetail] = React.useState(null);
    const sampleType = ["Grass",];

    React.useEffect( () => {
        console.log(String({id}.id));
        axios.get('https://pokemon-api-nssw.onrender.com/pokemon/' + String({id}.id))
			.then(response => {
                setPokeDetail(response);
                console.log('pokeDetail');
                // console.log(pokeDetail);
            });
    }, [id]);

    return (
        
		<ImageBackground
            source ={BgImage}
            style = {styles.backgroundImage}
            resizeMode="cover"
                >
                    <View 
                        style = {[styles.container, (theme === 'light' ? styles.container : styles.containerDark)]}>
                        <Image
                            source = {{
                                uri : ('pokeDetail.image.hires')
                                // uri : ('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png')
                            }}
                            style = {styles.pokemonThumb}></Image>
                        <Text style={{ fontSize: 23, textAlign: "left" }}>
                            Name: {pokeDetail[0].name.english}
                            {/* Venusaur */}
                        </Text>
                        <Text style={{ fontSize: 23, textAlign: "left" }}>
                            Type: {pokeDetail[0].type}
                            {/* {sampleType.join(', ')} */}
                        </Text>
                        <Text style={{ fontSize: 23, textAlign: "left" }}>
                            Description: {/* {pokeDetail[0].name.english} */}
                            {/* There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people. */}
                        </Text>

                        <TouchableOpacity
                            onPress={() => router.push('/(tabs)')}
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
                            <Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>Back to List</Text>
                        </TouchableOpacity>
                    </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
		width: "100%",
		height: "100%",
        padding: 20
    },
    containerDark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
		width: "100%",
		height: "100%",
        padding: 20
    },
    pokemonThumb: {
        width :100,
        height: 100,
        textAlign: "center"
    },
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},

});