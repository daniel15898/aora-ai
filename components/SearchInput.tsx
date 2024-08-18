import {
  Alert,
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
import { router, usePathname } from "expo-router";

type SearchInputPropsType = {
  value?: string;
  initialQuery?:string
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
  initialQuery
}: SearchInputPropsType) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="w-full h-14 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 font-pregular text-white flex-1 "
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query)
            return Alert.alert(
              "Missing query",
              "Please input somthing to search results across database"
            );
          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
