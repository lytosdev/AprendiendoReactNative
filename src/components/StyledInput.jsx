import { StyleSheet, TextInput, Text, View } from 'react-native'

const StyledInput = ({ error, style, styleContainer, styleError, ...restProps }) => {

  return (
    <View style={[styles.container, styleContainer]}>
      <TextInput style={[styles.input, error && { borderColor: "red" }, style]} {...restProps} />
      {error && <Text style={[styles.error, styleError]}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 32
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 2
  },
  error: {
    fontSize: 11,
    color: "red"
  }
})

export default StyledInput