import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { cn } from "@/utils/utils";
import { icons } from "@/constants";

type FormFieldPropsType = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}: FormFieldPropsType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={cn("space-y-2", otherStyles)}>
      <Text className="text-base text-gray-200 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white text-base font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={!showPassword?icons.eye:icons.eyeHide} className="w-6 h-6" resizeMode="contain"/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
