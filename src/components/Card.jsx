import { View, Image, StyleSheet, Text } from 'react-native'

const Card = ({ name, imageUrl }) => {
  return (
      <View style={styles.card}>
        <Image style={{ width: 50, height: 50 }} source={{ uri: imageUrl }} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5 }}>{name}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'gray'
  }
})

export default Card
