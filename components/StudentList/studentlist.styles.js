import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
    topContainer:{
        backgroundColor:COLORS.lightwhite
    },
    container:{
        backgroundColor:COLORS.white,
        borderRadius:24,
        flexDirection:'row',
        marginLeft:10,
        marginTop:-20,
        width:"95%",
        alignItems:'center',
        height:100
    }
})

export default styles
