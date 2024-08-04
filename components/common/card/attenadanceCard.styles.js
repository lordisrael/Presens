import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../../constants/Colors";


const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    //marginRight: 60,
    marginTop: 10,
    height:50,
    width:"98%",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    //borderWidth:'1px',
    //paddingHorizontal:'auto',
    borderColor:COLORS.darkQoutes,
    alignItems:'center'
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.meduim,
    height: "100%",
  },
  searchInput: {
    fontFamily: "mont-regular",
    width: "100%",
    height: "100%",
    color: COLORS.gray,
    paddingHorizontal: SIZES.meduim,
  },
});

export default styles