import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { fonts } from "@/constants";
import GlobalProvider from "@/context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": fonts.PoppinsBlack,
    "Poppins-Bold": fonts.PoppinsBold,
    "Poppins-ExtraBold": fonts.PoppinsExtraBold,
    "Poppins-ExtraLight": fonts.PoppinsExtraLight,
    "Poppins-Light": fonts.PoppinsLight,
    "Poppins-Medium": fonts.PoppinsMedium,
    "Poppins-Regular": fonts.PoppinsRegular,
    "Poppins-SemiBold": fonts.PoppinsSemiBold,
    "Poppins-Thin": fonts.PoppinsThin,
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
