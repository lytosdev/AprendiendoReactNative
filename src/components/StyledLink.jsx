import { Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

const StyledLink = ({ to, buttonStyle, textStyle, children }) => {

  return (
    <Link to={to} style={[styles.button, buttonStyle]}>
      <Text style={[styles.textButton, textStyle]}>{children}</Text>
    </Link>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    margin: 5,
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

export default StyledLink