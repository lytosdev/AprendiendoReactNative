import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const StyledButton = ({ buttonStyle, textStyle, children, ...restProps }) => {

  return (
    <TouchableOpacity {...restProps} style={[styles.button, buttonStyle]}>
      <Text style={[styles.textButton, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#154360",
    elevation: 10
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    height: "100%",
    color: "white"
  }
})

export default StyledButton