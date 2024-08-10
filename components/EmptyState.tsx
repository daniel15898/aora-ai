import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

type EmptyStatePropsType = {
  title: string;
  subtitle: string;
};

const EmptyState = ({ title, subtitle }: EmptyStatePropsType) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-psemibold text-white text-center mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-200">{subtitle}</Text>

      <CustomButton title="Create video" containerStyles="w-full my-5" handlePress={()=>router.push("/create")} />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
