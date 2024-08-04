import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 40,
    //marginLeft: 20,
    height: "100%",
    // flex: 1,
    // backgroundColor: COLORS.white,
    // marginRight: SIZES.small,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: SIZES.meduim,
    // height: "100%",
  },
  subcontainer: {
    borderRadius: SIZES.meduim,
    // borderBlockColor:COLORS.darkQoutes,
    //borderColor: COLORS.darkQoutes,

    //borderColor:'red',
    //borderWidth: "1px",
    //width:330,
    height: 200,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.darkQoutes,
    alignItems: "center",
    height: 40,
  },
  text: {
    fontFamily: "mont-bold",
    fontSize: 12,
    color: COLORS.white,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  ogaHeader: {
    flexDirection: "row",
    height: 20,
    marginBottom:10
  },
  topHeader: {
    fontFamily: "mont-bold",
    fontSize:18
  },
});

export default styles