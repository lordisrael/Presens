import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../constants/Colors";
import { useState } from "react";
import icon  from "../constants/icons";

export default function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ marginTop: 8, ...otherStyles }}>
      <Text
        style={{
          fontSize: 16,
          color: COLORS.darkQoutes,
          fontFamily: "Poppins-Medium",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: "100%",
          height: 48,
          backgroundColor: "#fff",
          borderColor: isFocused ? COLORS.primary2: COLORS.secondary,
          flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            color: "#7b7b8b",
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          passwordRules={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor={COLORS.gray2}
          secureTextEntry={title === "Password" && !showPassword}
          value={value}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ justifyContent: "center" }}
          >
            <Image
              source={!showPassword ? icon.eyeHide : icon.eye}
              resizeMode="contain"
              style={{
                width: 35,
                tintColor: COLORS.darkQoutes,
                backgroundColor: "#fff",
                height: 35,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
