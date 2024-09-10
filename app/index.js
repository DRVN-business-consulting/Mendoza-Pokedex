import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BgImage from '../assets/PokedexClosed.png'; 
import PokemonLogo from '../assets/pokemonName.png'; 
import { router } from 'expo-router';

export default function App() {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const Rusername = 'Test';
	const Rpassword = 'Test';

	let onPressLogin = (event) => {
		console.log(username);
		if (username === Rusername && password === Rpassword) {
			router.push('/(tabs)');
		} else {
			Alert.alert('Failed to Login');
		}
	}

	return (
		<ImageBackground
			source ={BgImage}
			style = {styles.backgroundImage}
      		resizeMode="cover"
		>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<Image
					source = {PokemonLogo} />
				<TextInput
					style = { styles.myTextBox}
					placeholder='Username'
					placeholderTextColor="white"
					value={username}
					onChangeText={newValue => setUsername(newValue)} />
				<TextInput
					style = { styles.myTextBox}
					placeholder='Password'
					placeholderTextColor="white"
					value={password}
					onChangeText={newvalue => setPassword(newvalue)} />
				<TouchableOpacity
					onPress={onPressLogin}
					style = {{
							paddingHorizontal: 24,
							paddingVertical: 12,
							borderRadius: 16,
							backgroundColor: '#fec202',
							width: "80%",
							marginTop: 20,
							borderColor: "#2f489c",
							borderStyle: "solid",
							borderWidth: 10,
					}}>
					<Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>LOGIN</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: "100%",
		height: "100%"
	},
	myTextBox: {
		paddingHorizontal: 24,
		paddingVertical: 12,
		borderColor: 'white',
		marginTop: 20,
		borderWidth: 1,
		borderRadius: 16,
		width: "80%",
		color: 'white',
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
});
