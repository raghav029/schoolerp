import React from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity,Dimensions} from 'react-native';
import {
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const StudentDetailsPage = ({navigation,route}) => {
        const {student} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <MaterialIcons name="account-circle" size={30} color="black" />
        <Text style={styles.title}> Student Data</Text>
      </View>
    </View>
    <LinearGradient
          colors={["#7BC4C4", "#439394"]}
          start={[0, 0]}
          end={[0, 1]}
          style={styles.dataHeader}
        >
    <View >
      <Text style={styles.headerName}>{student.name}</Text>
      <Text style={styles.headerDetails}>{student.sats_no}</Text>
      <View style={styles.headerDivider} />
      <View style={{flexDirection: 'row', marginTop: 8}}>
      <Text style={styles.headerDetails}>CLASS: </Text>
      <Text style={[styles.headerDetails, {fontWeight: 'bold', marginLeft: 4}]}>8</Text>
      <Text style={[styles.headerDetails, {marginLeft: 16}]}>DOA: </Text>
      <Text style={[styles.headerDetails, {fontWeight: 'bold',marginLeft: 4}]}>26-07-2019</Text>
      <Text style={[styles.headerDetails, {marginLeft: 16}]}>Gender: </Text>
      <Text style={[styles.headerDetails, {fontWeight: 'bold',marginLeft: 4}]}>Male</Text>
    </View>
    </View>
    </LinearGradient>
    
   
   
      <View style={styles.containerinfo}>
      <ScrollView keyboardShouldPersistTaps="handled" style={{width:400}}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Personal Information</Text>
        <Text style={styles.infoText}>DOB: 25-08-2009</Text>
        <Text style={styles.infoText}>Aadhar Number: 794131337541</Text>
        <Text style={styles.infoText}>Gender: Male</Text>
        <Text style={styles.infoText}>Caste: OBC/3A(VOKKALIGA)</Text>
        <Text style={styles.infoText}>Minority: N/A</Text>
        <Text style={styles.infoText}>Bhagayalakshmi Yojana: N/A</Text>
        <Text style={styles.infoText}>Height: 154</Text>
        <Text style={styles.infoText}>Weight: 43</Text>
        <Text style={styles.infoText}>Medical Advice: N/A</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Parents Information</Text>
        <Text style={styles.infoText}>Father Name: Jayendra</Text>
        <Text style={styles.infoText}>Mother Name: Pavithra</Text>
        <Text style={styles.infoText}>Phone Number: 8971107821</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Bank Information</Text>
        <Text style={styles.infoText}>Branch: Bank Of Baroda</Text>
        <Text style={styles.infoText}>Account Number: 54050100003859</Text>
        <Text style={styles.infoText}>IFSC CODE: BARB0ARDES</Text>
        <Text style={styles.infoText}>FD Number: N/A</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Other Information</Text>
        <Text style={styles.infoText}>Habbitation: N/A</Text>
        <Text style={styles.infoText}>Admission RTI: N/A</Text>
        <Text style={styles.infoText}>Medium: English</Text>
        <Text style={styles.infoText}>BPL Number: DVHR00102706</Text>
        </View>
 
        </ScrollView>
        </View>
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
  },
  container1: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom:10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  
  },
  title: {
    color: 'black',
    fontFamily:"Rajdhani",
    fontSize: 20,
  },
  dataHeader: {
    flexDirection: "row",
    height: screenHeight * 0.2,
    top: 5,
    left: 10,
    marginRight: 20,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#4FACAD",
    padding:5
  },

  header: {
    backgroundColor: '#14213d',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerName: {
    color: '#000',
    fontSize: 24,
    fontFamily:"Rajdhani",
  },
  headerDivider: {
    height: 2,
    backgroundColor: '#ffffff',
    marginVertical: 15,
  },
  headerDetails: {
    color: '#ffffff',
    fontSize: 15,
    marginVertical: 5,
    fontFamily:"Roboto",
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    marginBottom: 30,
    paddingRight:10,
    elevation:15,
    width:350,
    paddingTop:20,
    marginLeft:5, 
    top:10,
    width:screenWidth *0.8,
    borderColor:"grey",
    borderWidth:1,
    left:10
    
  },
  infoTitle: {
    color: '#439394',
    fontSize: 20,
    fontFamily:"Rajdhani6",
    marginBottom: 10,
    textDecorationLine:'underline ',
  },
  infoText: {
    padding:5,
    color: '#14213d',
    fontSize: 16,
    fontFamily:"Forum",
  },
  containerinfo:{
    backgroundColor:'lightgrey',
    width:screenWidth *0.9,
    height: screenHeight / 1.42,
    left:18,
    borderRadius:20,
    paddingBottom:10,
    elevation:25,
    borderradius:20,
    top:20,
    borderWidth:1,

  
  },
});

export default StudentDetailsPage;