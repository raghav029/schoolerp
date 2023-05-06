//importing 
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
} from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const StudentList = ({navigation,route}) => {
    const {students} = route.params;
    const handleViewPress = (student) => {
        console.log(student)
        navigation.navigate('StudentDetails',{student})
        
        // Handle library option press
      }
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
       <StatusBar barStyle="light-content" backgroundColor="black" />
    <View style={styles.background}>
       <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <MaterialIcons name="account-circle" size={30} color="black" />
        <Text style={styles.title}>Student List</Text>
      </View>
    </View>
    <LinearGradient
          colors={["#7BC4C4", "#439394"]}
          start={[0.5, 0]}
          end={[0, 1]}
          style={styles.yellowHeader}
        >
        <View>
          <Text style={styles.headerText}>Gireesh babu C N</Text>
          
          
            <View style={styles.detailsText1}>
              <Text style={styles.detailsText}>Class : 8</Text>
              <Text style={styles.detailsText}>Section : A</Text>
              <Text style={styles.detailsText}>Phno : 9945618018</Text>
            </View>
          </View>
      </LinearGradient>
      <View style={styles.whiteContainer}>
        <ScrollView showsVerticalScrollIndicator={false} >
        <View>
  {students.map((student, index) => (
    <View key={index} style={styles.box}>
      <Text style={styles.boxText}>{student.name}</Text>
      <View style={styles.icon}>
        <TouchableOpacity>
          <MaterialIcons
            name="call"
            size={24}
            color="black"
            onPress={() => console.log(`Call ${student.name}`)}
          />
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity>
          <MaterialIcons
            name="visibility"
            size={24}
            color="black"
            onPress={() => handleViewPress(student)}
          />
        </TouchableOpacity>
      </View>
    </View>
  ))}
</View>


        </ScrollView>

      </View>
      
    </View>
    </SafeAreaView>
 
  );
};


//design
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  detailsText: {
   paddingTop: 15,
    color: "#FDF0D5",
    marginRight:30,
    left:20,
    fontFamily:'Rajdhani'
  },
  yellowHeader: {
    flexDirection: "row",
    height: screenHeight * 0.13,
    top: 10,
    left: 10,
    marginRight: 20,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#4FACAD",
  },
  headerText: {
    fontSize: 24,
    color: "black",
    fontFamily:'Rajdhani',
    textDecorationLine:'underline ',
    left:20,
    marginTop:20,
  },
  whiteContainer: {
    position: "absolute",
    top: screenHeight / 4.2,
    width: screenWidth-24 ,
    height: screenHeight / 1.3,
    backgroundColor: "white",
    paddingTop: 15,
    alignItems: "center",
    borderRadius:20,
    transform: [{ translateY: -20 }],
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    left:12,
    right:12,
    borderWidth:1
    
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 10,
    width: screenWidth - 60,
    borderColor:'black',
    borderWidth:2,
    elevation:5,
    marginBottom:15,

    
  },
  boxText: {
    //fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    fontFamily:'Roboto',
  },
  icon: {
    flexDirection: "row",

  },
  headerbox:{
    flexDirection: "row",
    justifyContent:'space-around',
  },
  detailsText1:{
    flexDirection: "row",
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily:'Rajdhani',
    marginLeft: 5,
  },
});

export default StudentList;