import { View, StyleSheet, FlatList, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Ej4 = () => {

	const data = [
		{ id: 1, name: "Carlos", surname: "González Martín", icon: "language-javascript" },
		{ id: 2, name: "Adri", surname: "Sánchez Aparcero", icon: "language-java" },
		{ id: 3, name: "Jiménez", surname: "Molina Salas", icon: "language-csharp" },
		{ id: 4, name: "Maqueda", surname: "Salas Orzáez", icon: "language-php" },
		{ id: 5, name: "David", surname: "Rojas Cabrera", icon: "language-python" }
	]

	const Item = ({ item: obj }) => <View style={styles.item}>
		<MaterialCommunityIcons name={obj.icon} size={30} color="#CD4631" />
		<View>
			<View style={styles.itemField}>
				<Text style={styles.itemTitle}>Id: </Text>
				<Text>{obj.id}</Text>
			</View>
			<View style={styles.itemField}>
				<Text style={styles.itemTitle}>Nombre: </Text>
				<Text>{obj.name}</Text>
			</View>
			<View style={styles.itemField}>
				<Text style={styles.itemTitle}>Apellidos: </Text>
				<Text>{obj.surname}</Text>
			</View>
		</View>
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
		flexDirection: "row",
		margin: 10
	},
	itemField: {
		flexDirection: "row",
		marginLeft: 5
	},
	itemTitle: {
		fontWeight: "bold"
	}
})

export default Ej4
