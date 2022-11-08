import { useState } from 'react'
import { View, Switch, Image, StyleSheet } from 'react-native'

const Ej2 = () => {

	const [isEnabled, setIsEnabled] = useState(false)

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{ false: 'red', true: 'green' }}
				thumbColor={isEnabled ? 'green' : 'red'}
				onValueChange={() => setIsEnabled(!isEnabled)}
				value={isEnabled}
			/>
			{
				isEnabled
					? <Image source={require('../img/react.svg')} style={styles.image}></Image>
					: null
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		width: 150,
		height: 150,
		alignSelf: "center"
	}
})

export default Ej2