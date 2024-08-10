import { StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";
import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants";
import { StatusBar } from "expo-status-bar";

const TabsLayOut = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({
              color,
              focused,
              size,
            }: {
              color: string;
              focused: boolean;
              size: number;
            }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({
              color,
              focused,
              size,
            }: {
              color: string;
              focused: boolean;
              size: number;
            }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({
              color,
              focused,
              size,
            }: {
              color: string;
              focused: boolean;
              size: number;
            }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({
              color,
              focused,
              size,
            }: {
              color: string;
              focused: boolean;
              size: number;
            }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light"/>
    </>
  );
};

export default TabsLayOut;

const styles = StyleSheet.create({});
