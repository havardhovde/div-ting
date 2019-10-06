import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 24
    },
    Display: {
        flex: 2,
        backgroundColor: "white",
        justifyContent: "center"
    },
    DisplayText: {
        color: "black",
        fontSize: 38,
        fontWeight: "bold",
        textAlign: "right",
        padding: 20,
    },
    Input: {
        flex: 8,
        backgroundColor: "#949494"
    },
    Button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "white"
    },
    ButtonText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    },
    ButtonHighlighted: {
        backgroundColor: 'black'
    },
    inputRow: {
        flex: 1,
        flexDirection: "row"
    },
    
})

export default Styles