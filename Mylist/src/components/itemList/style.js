import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: "#000000c0",
        borderWidth: 2,
        borderColor: "white",
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemToBuy: {
        color:'#fff',
        fontSize: 24,
        textDecorationLine: 'none'
    },

    itemBought:{
        color:'#fff',
        fontSize: 24,
        textDecorationLine: 'line-through'

    },
    actionIcon:{
        height: 40,
        width: 40,
        backgroundColor: 'darkgreen',
        alignItems: 'center',
        marginLeft:10,
        borderRadius: 20,
    },

});