import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Ej4 = () => {

	const data = [
		{ id: "1", name: "Carlos", icon: "apple" },
		{ id: "2", name: "Adri", icon: "apple" },
		{ id: "3", name: "Jiménez", icon: "apple" },
		{ id: "4", name: "Maqueda", icon: "apple" },
		{ id: "5", name: "David", icon: "apple" }
	]

	const Item = ({ item }) => <View style={styles.item}>
		<View style={styles.field}>
			<Text>Id: </Text>
			<Text>{item.id}</Text>
		</View>
		<View style={styles.field}>
			<Text>Nombre: </Text>
			<Text>{item.name}</Text>
		</View>
		<MaterialCommunityIcons name={item.icon} size={30} color="#4F8EF7" />
	</View>

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={Item}
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
	}
})

export default Ej4
