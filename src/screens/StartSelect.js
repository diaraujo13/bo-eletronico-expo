import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default ({ navigation }) => {
	return <View
			style={{
				flex: 1,
				flexDirection: 'column'
			}}
		>
			<TouchableOpacity 
			onPress={ () => { navigation.navigate('MainTabs') }}
			style={{ flex: 1, backgroundColor: 'rgb(34, 34, 34)' }}>
			<LinearGradient
					// Background Linear Gradient  #232526, #414345
					colors={[ '#232526', '#414345']}
					style={{ flex: 1, justifyContent:'center', alignItems:'center'}}
				>
					<Ionicons  name="newspaper-outline" size={60} color="white" style={{marginBottom: 20, }} />
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 42,
							textTransform: 'capitalize',
							color: 'white',
							fontFamily:"RobotoCondensed_700Bold_Italic",
							fontStyle: 'italic'
						}}
					>
               BOLETIM DE OCORRÊNCIA
					</Text>
					</LinearGradient>
			</TouchableOpacity>
			
			<TouchableOpacity
				style={{ flex: 1, backgroundColor: '#444444' }}
			>
				<LinearGradient
					// Background Linear Gradient  
					colors={[ '#232526', '#414345']}
					style={{ flex: 1, justifyContent:'center',  alignItems:'center'}}
				>
					<Ionicons  name="md-shield-checkmark-outline" size={60} color="white"  style={{marginBottom: 20, }}/>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 42,
							textTransform: 'capitalize',
							fontFamily:"RobotoCondensed_700Bold_Italic",
							color: 'white',
							fontStyle: 'italic'
						}}
					>
              		Operações
					</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
};
