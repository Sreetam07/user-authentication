import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  card: {
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    width: "100%",
  },

  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
});
