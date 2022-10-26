import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

const Menu = () => {
  return (
    <>
      <Text style={styles.title}>Bienvenido a la App de pruebas y ejercicios</Text>
      <View style={styles.container}>
        <Link to="/screens/API de Disney/cardlist" style={styles.button}>
          <Text style={styles.textButton}>API</Text>
        </Link>
        <Link to="/screens/Ejercicio1/ej1" style={styles.button}>
          <Text style={styles.textButton}>Ejer 1</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 2</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 3</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 4</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 5</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 6</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 7</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 8</Text>
        </Link>
        <Link to="/screens/Ejercicio/nulo" style={styles.button}>
          <Text style={styles.textButton}>Ejer 9</Text>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center"
  },
  button: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue"
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    height: "100%"
  }
})

export default Menu