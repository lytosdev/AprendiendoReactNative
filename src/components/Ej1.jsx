import { useState } from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

const Ej1 = () => {
  const values = [
    { text: 'Eres menor de edad', color: 'orange', min: 0, max: 17 },
    { text: 'Acabas de cumplir 18', color: 'green', min: 18, max: 18 },
    { text: 'Eres mayor de edad', color: 'blue', min: 19, max: 100 }
  ]
  const [age, setAge] = useState(undefined)
  const [obj, setObj] = useState({})
  const [error, setError] = useState(null)

  const checkAge = (text) => {
    setObj({})
    if (/^$|^[0-9]+$/.test(text)) {
      setError('')
      setAge(text === '' ? undefined : text)
    } else {
      setError('Debe introducir una edad válida')
      setAge(null)
    }
  }

  const printText = () => {
    const obj = values.filter(item => age >= item.min && age <= item.max)[0]
    obj ? setObj(obj) : setObj({})
  }

  return (
    <View style={styles.container}>
      <Text>Hola mi nombre es <Text style={styles.name}>Carlos</Text></Text>
      <TextInput placeholder="Ingresa una edad" onChangeText={checkAge} style={styles.input} />
      <Text style={styles.error}>{error}</Text>
      <Text style={[styles.text, { color: obj.color }]}>{obj.text}</Text>
      <StyledButton onPress={() => !error && printText()} style={styles.button}>Finalizar</StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    color: 'blue'
  },
  input: {
    width: '80%',
    marginVertical: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8
  },
  text: {
    fontWeight: 'bold'
  },
  error: {
    fontSize: 10,
    color: 'red'
  },
  button: {
    width: 150,
    marginVertical: 10
  }
})

export default Ej1