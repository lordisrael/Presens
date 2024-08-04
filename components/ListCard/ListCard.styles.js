import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 50,
    // borderColor:'red',
    // borderWidth:'1px',
  },
  container: {
    // borderColor: "red",
    // borderWidth:'1px',
    marginTop: 15,
    //flex:1,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    justifyContent: 'space-evenly',
    //columnGap:SIZES.small,
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    width: 49,
    height: 49,
    backgroundColor: COLORS.white,
    //borderRadius: SIZES.small,
    // justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles