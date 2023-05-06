import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


//screens
import TeacherScreen from "../homescreen";
import CustomDrawer from "./CustomDrawerNavigator";
import StudentList from "../students-list";
import StudentDetailsPage from "../student-details";
import Marks from "../marks-screen";
import MarksMainScreen from "../marks-main-screen";
import AttendPercent from "../attendance-main";
import Attend from "../attendance";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props}/>}>
      <Drawer.Screen
        name="home"
        component={TeacherScreen}
        options={{ headerShown: false}}
      />
      <Drawer.Screen
        name="studentlist"
        component={StudentList}
        options={{ headerShown: false}}
      />
      <Drawer.Screen
        name="studentdetails"
        component={StudentDetailsPage}
        options={{ headerShown: false}}
      />
      <Drawer.Screen
        name="marks1"
        component={Marks}
        options={{ headerShown: false}}
      />
      <Drawer.Screen
        name="marks"
        component={MarksMainScreen}
        options={{ headerShown: false}}
      />
      <Drawer.Screen
        name="attendpercent"
        component={AttendPercent}
        options={{ headerShown: false}}
      />
      <Drawer.Screen
        name="attend"
        component={Attend}
        options={{ headerShown: false}}
      />
      
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
