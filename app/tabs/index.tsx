import Notifications from "@/app/screen/logged/Notifications";
import HomeStack from "@/app/screen/logged/home/stackHome/HomeStack";
import Message from "@/app/screen/logged/Message";
import Profile from "@/app/screen/logged/Profile";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Tab = createBottomTabNavigator();

const BackButton = () => {
  return (
    <TouchableOpacity style={{ padding: 10 }}>
      <Image
        source={require("@/assets/images/tabs/arrow.png")}
        resizeMode={"contain"}
        tintColor={"#000"}
        className="w-6 h-6"
      />
      <Text></Text>
    </TouchableOpacity>
  );
};

const LoggedTabs = () => {
  return (
    <NavigationIndependentTree>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            headerLeft: () => <BackButton />,
            title: "Чат",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: "Уведомления",
            headerShown: true,
            headerLeft: () => <BackButton />,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            title: "Чат",
            headerShown: true,
            headerLeft: () => <BackButton />,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: "Профиль",
            headerLeft: () => <BackButton />,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationIndependentTree>
  );
};

export default LoggedTabs;
