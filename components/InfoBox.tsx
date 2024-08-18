import { View, Text } from "react-native";
import React from "react";
import { cn } from "@/utils/utils";

type InfoBoxPropsType = {
  title: string;
  subTitle?: string;
  containerStyles?:string,
  titleStyles?:string
};

const InfoBox = ({title,containerStyles,subTitle,titleStyles}:InfoBoxPropsType) => {
  return (
    <View className={containerStyles}>
      <Text className={cn("text-white text-center font-psemibold",titleStyles)}>{title}</Text>
      <Text className="text-sm text-gray-200 text-center font-psemibold">{subTitle}</Text>
    </View>
  );
};

export default InfoBox;
