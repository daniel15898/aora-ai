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

type SearchInputPropsType = {

  value?: string;
  placeholder?: string;
  handleChangeText?: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
};

const SearchInput = ({
  
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}: SearchInputPropsType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full h-14 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 font-pregular text-white flex-1 "
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
