import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const StyledButton = ({ disable, style, textStyle, children, ...restProps }) => {

  return (
    <TouchableOpacity disabled={disable} style={[styles.button, disable && { opacity: 0.7 }, style]} {...restProps}>
      <Text style={[styles.textButton, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#4F9DD1",
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