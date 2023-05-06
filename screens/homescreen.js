import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TeacherScreen = ({ navigation,route }) => {
  const { studentsData, teacher, tests_list, marks, attendance } = route.params;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfilePress = () => {
    // Handle profile option press
  };

  const handleLogoutPress = () => {
    // Handle logout option press
  };

  const handleLibraryPress = () => {
    // Handle library option press
  };

  const handleIconPress = (index) => {
    if (index == 0) {
      navigation.navigate("StudentList", { students: studentsData });
    }
    if (index == 1) {
      navigation.navigate("MarksMain", {
        students: studentsData,
        teacher,
        tests_list,
        marks,
      });
    }
    if (index == 2) {
      navigation.navigate("AttendanceMain", {
        students: studentsData,
        teacher,
        attendance,
      });
    }
    if (index == 4) {
      Alert.alert("Logout", "Are you sure you want to logout?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: async () => {
            // Handle logout logic here
            await AsyncStorage.clear(); // Clear async storage, for example
            navigation.navigate("Login"); // Navigate to login screen
          },
          style: "destructive",
        },
      ]);
    }
  };

  const renderIcon = (text, iconName, color, index) => {
    let IconComponent = FontAwesome;
    if (iconName.startsWith("md-")) {
      IconComponent = MaterialIcons;
      iconName = iconName.slice(3);
    } else if (iconName.startsWith("mcm-")) {
      IconComponent = MaterialCommunityIcons;
      iconName = iconName.slice(4);
    }

    return (
      <TouchableOpacity
        key={index}
        style={styles.iconContainer}
        onPress={() => handleIconPress(index)}
      >
        <IconComponent name={iconName} size={50} color={color} />
        <Text style={styles.iconText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.background}>
      <View style={styles.header}>
      <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons
            name="menu-outline"
            size={24}
            style={styles.headerMenuIcon}
          />
        </TouchableOpacity>
        <MaskedView
          maskElement={
            <Text
              style={[styles.headerTitle, { backgroundColor: "transparent" }]}
            >
              Ardeshalli Govt School
            </Text>
          }
        >
          <LinearGradient
            colors={["#439394", "#C7BD00"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.topHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}>
            Ardeshalli Govt School
            </Text>
          </LinearGradient>
        </MaskedView>

        
      </View>


        <LinearGradient
          colors={["#7BC4C4", "#439394"]}
          start={[0.5, 0]}
          end={[0, 1]}
          style={styles.yellowHeader}
        >
          <View style={{ height: 30, right: 9, left: 35 }}>
            <View>
              <Text style={[styles.headerText]}>{teacher.name}</Text>

              <View style={styles.detailsRow1}>
                <Text
                  style={{
                    color: "#FDF0D5",
                    fontSize: 16,
                    fontFamily: "Roboto6",
                    paddingLeft: screenWidth * 0.02,
                  }}
                >
                  Class : {teacher.class_teacher_of}
                </Text>
              </View>

              <View style={styles.detailsRow1}>
                <Text
                  style={{
                    color: "#FDF0D5",
                    fontSize: 16,
                    width: "35%",
                    paddingLeft: screenWidth * 0.02,
                    fontFamily: "Roboto6",
                  }}
                >
                  Ph no
                </Text>
                <Text
                  style={{
                    color: "#FDF0D5",
                    fontSize: 16,
                    paddingLeft: screenWidth * 0.02,
                  }}
                >
                  Email id{" "}
                </Text>
              </View>
              <View style={styles.detailsRow2}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    width: "35%",
                    paddingLeft: screenWidth * 0.02,
                    fontFamily: "Rajdhani",
                  }}
                >
                  9945618018
                </Text>

                <Text style={styles.detailsTextValues}>
                  lokeshloki6363@gmail.com
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["black", "white"]}
          start={[1.8, 1.2]}
          end={[0, 0]}
          style={styles.whiteContainer}
        >
          <ScrollView contentContainerStyle={styles.grid}>
            {/* <View style={{ }}></View> */}
            <View style={styles.iconRow}>
              {renderIcon("Students", "users", "black", 0,)}
              <View style={{ width: 20 }}></View>
              {renderIcon("Marks", "md-trending-up", "black", 1)}
            </View>
            <View style={styles.iconRow}>
              {renderIcon(
                "Attendance",
                "mcm-calendar-check-outline",
                "black",
                2
              )}
              <View style={{ width: 20 }}></View>
              {renderIcon(
                "Time Table",
                "mcm-calendar-clock",
                "black",
                3
              )}
            </View>
            <View style={styles.iconRow}></View>
            {renderIcon("Logout", "mcm-calendar-check-outline", "black", 4)}
            
          </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerMenuIcon: {
    color: "#000",
    marginLeft: 10,

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 2,
    height: 40,
    backgroundColor: "#fff",
    elevation: 60,
  },
  headerTitle: {
    fontSize: 25,
    color: "#000",
    fontFamily: "Rajdhani",
    alignContent:'center',
    justifyContent:"center",
    textAlign:"center",
    marginRight:60
  },
  topHeader: {
    //flexDirection: "row",
    //paddingTop: screenHeight*0.05,
    textAlign: "center",
    marginBottom:1,
    alignContent:"center",
    justifyContent:"center",
   
},
  
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.01,
  },

  iconContainer: {
    height: screenHeight * 0.17,
    borderWidth: 1,
     borderColor: "grey",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    elevation: 5,
    width: screenWidth * 0.4,
    marginVertical:10,
  },
  iconText: {
    fontSize: 20,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "#E8E8E8",

  },
  yellowHeader: {
    flexDirection: "row",
    height: screenHeight * 0.2,
    top: 10,
    left: 10,
    marginRight: 20,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#4FACAD",
  },
  headerText: {
    fontSize: 30,
    color: "black",
    fontFamily: "Rajdhani", 
     paddingLeft: screenWidth * 0.07,
     textDecorationLine:"underline",
  },
  detailsRow1: {
    flexDirection: "row",
    paddingTop: screenHeight * 0.01,
    // paddingBottom: screenHeight * 0.015,
    alignItems: "center",
    fontFamily: "Rajdhani",
  },
  detailsRow2: {
    flexDirection: "row",
    // paddingTop: screenHeight * 0.02,
    // paddingBottom: screenHeight * 0.015,
    alignItems: "center",
    fontFamily: "Rajdhani",
  },
  detailsText: {
    color: "white",
    fontSize: 15,
    paddingLeft: screenWidth * 0.02,
    fontFamily: "Rajdhani",
  },
  detailsTextValues: {
    color: "black",
    fontSize: 15,
    paddingLeft: screenWidth * 0.02,
    fontFamily: "Rajdhani",
  },
  whiteContainer: {
    position: "absolute",
    top: screenHeight * 0.3,
    bottom: 20,
    left: screenWidth * 0.04,
    right: screenWidth * 0.04,
    width: screenWidth - screenWidth * 0.08,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: screenHeight * 0.05,
    transform: [{ translateY: -screenHeight * 0.02 }],
    zIndex: 1,
    borderWidth:1,
    paddingTop:10,
  },
  grid: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: screenHeight * 0.03,
  },
});



export default TeacherScreen;
