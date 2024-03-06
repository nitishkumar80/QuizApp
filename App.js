import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AllPage from "./component/page/Allpage";
import Quizereact from "./component/page/Quizereact";

import Firstscreen from "./component/page/Firstscreen";
import Jscript from './component/page/Jscript'
import Nodejs from "./component/page/Nodejs";
import Python from "./component/page/Python";
import Html from "./component/page/Html";
import Css from "./component/page/Css";
import Frontend from "./component/page/Frontend";
import Java from "./component/page/Java";
import Mongodb from "./component/page/Mongodb";
import Swift from "./component/page/Swift";
import Php from "./component/page/Php";
import Mysql from "./component/page/Mysql";




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="Mainscreen"
          component={Firstscreen }
          options={{ title: "Main", headerShown: false }}
        />
        <Stack.Screen
          name="AllPage"
          component={AllPage}
          options={{ title: "All Page", headerShown: false }}
        />
        <Stack.Screen
          name="Quizereact"
          component={Quizereact}
          options={{ title: "quizereact", headerShown: false }}
        />
         <Stack.Screen
          name="Jscript"
          component={Jscript }
          options={{ title: "Jscript", headerShown: false }}
        />
            <Stack.Screen
          name="Nodejs"
          component={Nodejs }
          options={{ title: "Nodejs", headerShown: false }}
        />
             <Stack.Screen
          name="Html"
          component={Html }
          options={{ title: "Html", headerShown: false }}
        />
        <Stack.Screen
          name="Python"
          component={Python }
          options={{ title: "Python", headerShown: false }}
        />
          <Stack.Screen
          name="Css"
          component={Css}
          options={{ title: "Css", headerShown: false }}
        />
           <Stack.Screen
          name="Frontend"
          component={Frontend}
          options={{ title: "Frontend", headerShown: false }}
        />

<Stack.Screen
          name="Java"
          component={Java}
          options={{ title: "Java", headerShown: false }}
        />

<Stack.Screen
          name="Mongodb"
          component={Mongodb }
          options={{ title: "Mongodb", headerShown: false }}
        />

<Stack.Screen
          name="Swift"
          component={Swift }
          options={{ title: "Swift", headerShown: false }}
        />
<Stack.Screen
          name="Php"
          component={Php }
          options={{ title: "Php", headerShown: false }}
        />

<Stack.Screen
          name="Mysql"
          component={Mysql }
          options={{ title: "Mysql", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

