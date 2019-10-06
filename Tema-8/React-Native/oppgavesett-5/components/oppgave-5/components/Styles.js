import {StyleSheet, Dimensions} from "react-native"

const screenWidth = Math.round(Dimensions.get('window').width);

const Styles = StyleSheet.create({
    buttons: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    btn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: screenWidth / 3,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 3,
    },
    title: {
        fontSize: 38,
        fontWeight: "bold",
        margin: "auto",
    },
    body: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    opg4: {
        width: 500,
        height: 200,
        textAlign: "center",
        color: "white"
    },
    colorBox: {
        height: 100,
    },
    colorText: {
        flex: 1,
        flexDirection: "row",
        textAlign: "center",
        color: "white",
        paddingTop: 50,
    }
})

export default Styles