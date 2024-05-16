import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000c0',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    footer:{
        position:"absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#000000c0",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    inputContainer:{
        backgroundColor:"#000",
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: "center",
        color:"#ffffff"

    },
    iconContainer:{
       borderRadius: 25,
       height: 50 ,
      width: 50,
      elevation: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#000"
    }
});