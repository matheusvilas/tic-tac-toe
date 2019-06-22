import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  modalGroup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)"
  },
  modalContent: {
    backgroundColor: "white",
    flex: -1,
    marginRight: 20,
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 4,
    minWidth: 300,
    minHeight: 400,
    alignItems: "center",
    justifyContent: "center"
  },
  modalButton: {
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    padding: 15,
    marginTop: 60,
    width: 100
  },
  modalText: {
    fontSize: 40,
    textAlign: "center"
  },
  buttonText: {
    color: "#5f5f5f",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
})

export default styles
