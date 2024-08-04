import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../constants/Colors";


const styles = StyleSheet.create({
  container: {
    width: "100%",
    //marginTop: SIZES.large,
    //height: 30,
    // borderColor: "red",
    // borderWidth: "1px",
  },
  WelcomeWrapper: {
    //flex: 1,
    marginTop: "auto",
    //backgroundColor: COLORS.white,
    //marginRight: SIZES.small/2,
    //borderRadius: SIZES.meduim / 2,
    //height: 150,
  },
  userName: {
    marginTop: 20,
    marginLeft: 10,
    fontFamily: "mont-bold",
    fontSize: SIZES.large,
    color: COLORS.darkQoutes,
    marginBottom: 2,
  },
  welcomeMessage: {
    marginBottom: 2,
    marginLeft: 40,
    marginRight: 40,
    marginHorizontal: "auto",
    fontFamily: "mont-regular",
    fontSize: SIZES.small * 1.1,
    color: COLORS.darkQoutes,
    marginTop: 8,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //marginTop: SIZES.large,
    height: 50,
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
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary2,
    borderRadius: SIZES.meduim,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
});

export default styles