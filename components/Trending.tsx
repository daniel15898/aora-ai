import {
  FlatList,
  FlatListComponent,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Models } from "react-native-appwrite";
import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

type TrendingPropsType = {
  posts: Models.Document[];
};

const Trending = ({ posts }: TrendingPropsType) => {
  const [activeItem, setActiveItem] = useState<string>("");

  const viewableItemsChange = (info: {
    viewableItems: ViewToken<Models.Document>[];
    changed: ViewToken<Models.Document>[];
  }) => {
    if (info.viewableItems.length > 0) {
      setActiveItem(info.viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 140, y: 0 }}
      horizontal
    />
  );
};

type TrendingItemPropsType = {
  activeItem: string;
  item: Models.Document;
};

const zoomIn: Animatable.CustomAnimation<any> = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut: Animatable.CustomAnimation<any> = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }: TrendingItemPropsType) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<Video>(null);



  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        (console.log(item.video),
        (
          <Video
            ref={videoRef}
            source={{ uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
            className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
            resizeMode={ResizeMode.COVER}
            useNativeControls
            shouldPlay={true}
            isLooping
          />
        ))
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

export default React.memo(Trending);

const styles = StyleSheet.create({});
