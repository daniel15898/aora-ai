import {
  
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import useAppwrite from "@/hooks/useAppwrite";
import { getAllPosts } from "@/lib/appwrite";


const Home = () => {

  const [refreshing, setRefreshing] = useState(false);
  const {data:posts,refetch,isLoading} = useAppwrite(getAllPosts)
  const onRefresh = async () => {
    setRefreshing(true);
    // re call videos => if any new videos appeard
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full ">
      <FlatList
        data={posts}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.title}</Text>
        )}
        ListHeaderComponent={() => <PageHeader />}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ffffff"]}
            tintColor={"#ffffff"}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const PageHeader = () => {
  return (
    <View className="my-6 px-4 space-y-6">
      <View className="justify-between items-start flex-row mb-6">
        <View className="">
          <Text className="font-pmedium text-sm text-gray-200">
            Welcome Back!
          </Text>
          <Text className="text-2xl font-psemibold text-white">JSMastery</Text>
        </View>
        <View className="mt-1.5 ">
          <Image
            source={images.logoSmall}
            className="w-9 h-10"
            resizeMode="contain"
          />
        </View>
      </View>
      <SearchInput placeholder="search for a video topic..." />

      <View className="w-full flex-1 pt-4 pb-8">
        <Text className="text-gray-200 text-lg font-pregular mt-3">
          Latest Videos
        </Text>

        <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
