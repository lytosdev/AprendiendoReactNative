import { View, StyleSheet, FlatList, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Ej4 = () => {

	const data = [
		{ id: 1, name: "Carlos", icon: "apple" },
		{ id: 2, name: "Adri", icon: "apple" },
		{ id: 3, name: "Jiménez", icon: "apple" },
		{ id: 4, name: "Maqueda", icon: "apple" },
		{ id: 5, name: "David", icon: "apple" }
	]

	const Item = ({ item: obj }) => <View style={styles.item}>
			<MaterialCommunityIcons name="arrow-top-right-thick" size={30} color="#4F8EF7" />
		<View style={styles.field}>
			<Text style={styles.title}>Id: </Text>
			<Text>{obj.id}</Text>
		</View>
		<View style={styles.field}>
			<Text style={styles.title}>Nombre: </Text>
			<Text>{obj.name}</Text>
		</View>
		<MaterialCommunityIcons name={obj.icon} size={30} color="#4F8EF7" />
	</View>

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={Item}
				keyExtractor={obj => obj.id}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	item: {
		margin: 10
	},
	field: {
		flexDirection: "row"
	},
	title: {
		fontWeight: "bold"
	}
})

export default Ej4
