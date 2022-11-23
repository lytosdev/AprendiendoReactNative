import { Text, View, StyleSheet } from 'react-native'
import StyledLink from './StyledLink'

const Menu = () => {
  return (
    <>
      <Text style={styles.title}>Bienvenido a la App de pruebas y ejercicios</Text>
      <View style={styles.container}>
        <StyledLink to="/screens/API de Disney/cardlist" buttonStyle={styles.button}>API</StyledLink>
        <StyledLink to="/screens/Ejercicio 1/ej1" buttonStyle={styles.button}>Ejercicio 1</StyledLink>
        <StyledLink to="/screens/Ejercicio 2/ej2" buttonStyle={styles.button}>Ejercicio 2</StyledLink>
        <StyledLink to="/screens/Ejercicio 3/ej3" buttonStyle={styles.button}>Ejercicio 3</StyledLink>
        <StyledLink to="/screens/Ejercicio 4/ej4" buttonStyle={styles.button}>Ejercicio 4</StyledLink>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center"
  },
  button: {
    width: "80%"
  }
})

export default Menu