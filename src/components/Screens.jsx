import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Link, useParams } from "react-router-native"

import CardList from "./CardList"
import Ej1 from "./Ej1"

const components = [
  { key: "cardlist", value: <CardList /> },
  { key: "ej1", value: <Ej1 /> }
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
        <Link to="/" style={styles.button}>
          <Text style={styles.textButton}>Volver</Text>
        </Link>
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
    borderRadius: 10,
    backgroundColor: "green",
    marginHorizontal: 10,
    marginVertical: 10
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    height: "100%",
    color: "white"
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