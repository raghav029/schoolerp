import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  
  const CustomDrawer = () => {
    const navigation = useNavigation();
    return (
      <View style={[styles.container]}>
        <View>
          <View style={[styles.backgroundColor]}>
            <TouchableOpacity>
              <Image
                source={require("../../image/raghav.jpg")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 60,
                  borderWidth: 2,
                  borderColor: "black",
                  left: 80,
                  marginTop: 40,
                }}
              />
            </TouchableOpacity>
  
            <Text style={[styles.headerText]}>Raghav Kumar Jha</Text>
            <Text style={[styles.headerText2]}>1BY21IS124</Text>
          </View>
          <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="home"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>HOMESCREEN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="megaphone"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Events</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="shirt"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>MERCHANDISE</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="people"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>CLUBS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="locate-outline"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>ROAD MAP</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="help-circle-outline"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Need help?</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View
                style={[styles.option, { flexDirection: "row", marginTop: 120 }]}
              >
                <Ionicons
                  name="log-out"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.optiontext,
                    { left: 10, fontSize: 20, fontWeight: "400" },
                  ]}
                >
                  LOGOUT
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
      opacity: 1,
      borderWidth: 1,
    },
    backgroundColor: {
      backgroundColor: "grey",
      borderBottomEndRadius: 30,
      borderBottomLeftRadius: 30,
    },
    headerText: {
      fontSize: 24,
      color: "black",
      textDecorationLine: "underline",
      left: 30,
      fontFamily: "Rajdhani",
      marginTop: 20,
    },
    headerText2: {
      fontSize: 24,
      color: "black",
      textDecorationLine: "underline",
      left: 70,
      fontFamily: "Rajdhani",
      bottom: 5,
    },
    option: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      height: 45,
      borderWidth: 1,
      borderRadius: 20,
      flexDirection: "row",
      textAlign: "center",
      alignContent: "center",
      backgroundColor: "lightgrey",
    },
    optiontext: {
      fontFamily: "Rajdhani",
      left: 20,
      fontSize: 17,
      top: 8,
    },
    icon: {
      textAlign: "right",
      left: 10,
      top: 5,
    },
  });
  
  export default CustomDrawer;
  