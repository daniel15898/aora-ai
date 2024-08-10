import {
  FlatList,
  FlatListComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

type TrendingPropsType = {
  posts: Array<{ id: number }>;
};

const Trending = ({ posts }: TrendingPropsType) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({});
