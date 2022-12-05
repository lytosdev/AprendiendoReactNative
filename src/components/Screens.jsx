import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useParams } from "react-router-native"
import StyledLink from "./StyledLink"
import CardList from "./CardList"
import Ej1 from "./Ej1"
import Ej2 from "./Ej2"
import Ej3 from "./Ej3"
import Ej4 from "./Ej4"
import Ej5 from "./Ej5"

const components = [
  { key: "cardlist", value: <CardList /> },
  { key: "ej1", value: <Ej1 /> },
  { key: "ej2", value: <Ej2 /> },
  { key: "ej3", value: <Ej3 /> },
  { key: "ej4", value: <Ej4 /> },
  { key: "ej5", value: <Ej5 /> }
]

const Screens = () => {

  const [component, setComponent] = useState(null)
  const { title, keyComponent } = useParams()

  useEffect(() => {
    const obj = components.filter(item => item.key === keyComponent)[0]
    setComponent(obj ? obj.value : <Text style={styles.title}>El ejercicio no existe</Text>)
  }, [keyComponent])

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <StyledLink to="/" buttonStyle={styles.button}>Volver</StyledLink>
        <Text style={styles.title}>{title}</Text>
      </View>
      {component}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  button: {
    width: 80,
    height: 35,
    backgroundColor: "green",
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    height: "100%",
    color: "black"
  },
})

export default Screens