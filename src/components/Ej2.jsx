import { useState } from 'react'
import { View, Switch, Image, StyleSheet } from 'react-native'

const Ej2 = () => {

	const [isEnabled, setIsEnabled] = useState(false)

	return (
		<View style={styles.container}>
			<Switch
				trackColor={{ false: 'red', true: 'green' }}
				thumbColor={isEnabled ? 'green' : 'red'}
				onValueChange={() => setIsEnabled(prevValue => !prevValue)}
				value={isEnabled}
				style={styles.switch}
			/>
			{
				isEnabled
					? <Image source={require('../img/react.png')} style={styles.image}></Image>
					: null
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	switch: {
		margin: 20
	},
	image: {
		width: 150,
		height: 150,
		alignSelf: "center",
		marginTop: 40
	}
})

export default Ej2