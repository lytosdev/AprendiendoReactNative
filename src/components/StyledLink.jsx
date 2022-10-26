import { Text, StyleSheet } from "react-native"
import { Link } from "react-router-native"

const StyledLink = ({ to, stylesButton, stylesTextButton, children }) => {

  const styles = StyleSheet.create({
    button: {
      width: "100%",
      height: 50,
      margin: 10,
      borderRadius: 5,
      backgroundColor: "#154360",
      ...stylesButton
    },
    textButton: {
      fontWeight: "bold",
      textAlign: "center",
      textAlignVertical: "center",
      height: "100%",
      color: "white",
      ...stylesTextButton
    }
  })

  return (
    <Link to={to} style={styles.button}>
      <Text style={styles.textButton}>{children}</Text>
    </Link>
  )
}

export default StyledLink