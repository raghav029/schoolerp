import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Splash from './Splash';
import Login from './authscreen';
import TeacherScreen from './homescreen';
import Parent from './Parent';
import StudentList from "./students-list";
import StudentDetailsPage from "./student-details";
import AttendPercent from "./attendance-main";
import Marks from "./marks-screen";
import MarksMainScreen from "./marks-main-screen";
import Attend from "./attendance";
import Validation from "./validation";
import EmptyScreen from "./verificationScreen";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
         screenOptions={{ headerShown: false }}
     >
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Parent" component={Parent} />
         {/* <Stack.Screen name="Home" component={TeacherScreen} /> 
         <Stack.Screen name="StudentList" component={StudentList} />
         <Stack.Screen name="StudentDetails" component={StudentDetailsPage} />
         <Stack.Screen name="Marks" component={Marks} />
         <Stack.Screen name="MarksMain" component={MarksMainScreen} />
         <Stack.Screen name="AttendanceMain" component={AttendPercent} />
         <Stack.Screen name="Attendance" component={Attend} />
         <Stack.Screen name="Validation" component={Validation} />
         <Stack.Screen name="Verification" component={EmptyScreen} /> */}
       </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;