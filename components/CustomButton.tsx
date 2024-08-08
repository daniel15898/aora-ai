import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { cn } from "@/utils/utils";
import { isLoaded } from "expo-font";

type CustomButtonPropsType = {
  title: string;
  handlePress?: () => void;
  isLoading: boolean;
  textStyles?: string;
  containerStyles?: string;
};

const CustomButton = ({
  title,
  isLoading,
  handlePress,
  containerStyles,
  textStyles,
}: CustomButtonPropsType) => {
  return (
    <TouchableOpacity
      className={cn(
        "bg-secondary rounded-xl min-h-[62px] justify-center items-center",
        containerStyles,{"opacity-50":isLoading}
      )}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text className={cn("text-primary font-psemibold text-lg", textStyles)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
