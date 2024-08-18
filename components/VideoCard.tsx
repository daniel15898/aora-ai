import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Models } from "react-native-appwrite";
import { icons } from "@/constants";
import { ResizeMode, Video } from "expo-av";

type VideoCardPropsType = {
  video: Models.Document;
};

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}: VideoCardPropsType) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1 ">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary items-center justify-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold" numberOfLines={1}>
              {title}
            </Text>
            <Text
              className="text-xs text-gray-200 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Video
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay
          
        />
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
