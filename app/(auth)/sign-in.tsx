import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { getCurrentUser, signIn, signOut } from "@/lib/appwrite";
import { useGlobalContext } from "@/hooks/useGlobalContext";


const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {setUser,setIsLogged} = useGlobalContext();

  const submitForm = async () => {
  
    if (!form.password || !form.email) {
      Alert.alert("Error", "Please fill in all tthe fields");
    }

    setIsSubmitting(true)
    try {
      signOut()
      await signIn(form.email, form.password);
      const result = await getCurrentUser()
      setUser(result),
      setIsLogged(true)

      //set to global state...
      

      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder="type your email..."
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="type your password..."
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submitForm}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="pt-5 justify-center flex-row gap-2">
            <Text className="text-lg text-gray-200 font-pregular">
              Don't Have account?
            </Text>
            <Link
              href={"/sign-up"}
              className="text-lg font-semibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
