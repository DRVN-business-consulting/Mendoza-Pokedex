import {Alert, Button, Text, View, Image, StyleSheet,ImageBackground, TouchableOpacity} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useMyTheme} from "../../src/context/MyTheme";
import React from "react";
import axios from "axios";
import BgImage from '../../assets/Pokedex-preview.png'; 

export default function ViewProfile() {
    const { id } = useLocalSearchParams();
    const {  theme, setTheme, data } = useMyTheme();
    
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [photo, setPhoto] = React.useState('photo');
    
    const setPokeDetail = (item) => {
        setName(item.name.english);
        setType(item.type.join(', '));
        setDescription(item.description);
        setPhoto(item.image.hires);
    };

    React.useEffect( () => {
        console.log(String({id}.id));
        axios.get('https://pokemon-api-nssw.onrender.com/pokemon/' + String({id}.id))
			.then(response => {
                setPokeDetail(response.data[0]);
                console.log('pokeDetail');
            });
    }, [id]);

    return (
        
		<ImageBackground
            source ={BgImage}
            style = {[styles.backgroundImage,
                type.includes("Electric") && styles.elecType,
                type.includes("Psychic") && styles.psyType,
                type.includes("Dark") && styles.darkType,
                type.includes("Fighting") && styles.fightType,
                type.includes("Bug") && styles.poisonType,
                type.includes("Ground") && styles.rockType,
                type.includes("Flying") && styles.flyType,
                type.includes("Poison") && styles.poisonType,
                type.includes("Rock") && styles.rockType,
                type.includes("Fire") && styles.fireType,
                type.includes("Water") && styles.waterType,
                type.includes("Grass") && styles.grassType,
                type.includes("Normal") && styles.normalType,
            ]}
            resizeMode="cover"
                >
                    <View 
                        style = {[styles.container, (theme === 'light' ? styles.container : styles.containerDark)]}>
                        <Image
                            source = {{
                                uri : photo
                            }}
                            style = {styles.pokemonThumb}></Image>
                        <Text style={{ fontSize: 23, textAlign: "left" }}>
                            Name: {name}
                        </Text>
                        <Text style={{ fontSize: 23, textAlign: "left" }}>
                            
                            Type: {type}
                        </Text>
                        <Text style={{ fontSize: 23, textAlign: "left" }}>
                            Description: {description}
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
    grassType: {
        backgroundColor: 'green',
    },
    fireType: {
        backgroundColor: 'orange',
    },
    waterType: {
        backgroundColor: '#346beb',
    },
    poisonType: {
        backgroundColor: '#ae21ff',
    },
    rockType: {
        backgroundColor: 'silver',
    },
    flyType: {
        backgroundColor: '#9dc7e3',
    },
    fightType: {
        backgroundColor: '#e06063',
    },
    psyType: {
        backgroundColor: '#cbf748',
    },
    darkType: {
        backgroundColor: '#4a4f80',
    },
    elecType: {
        backgroundColor: 'yellow',
    },
    normalType: {
        backgroundColor: 'gray',
    },

});