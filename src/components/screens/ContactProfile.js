import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
  } from 'react-native';
import { Container, Icon} from 'native-base';

class ContactProfile extends Component {
    constructor(props) {
        super(props);
    
    }
    render(){
        const {
            contact
        } = this.props.navigation.state.params;
        return (
            <Container style={styles.item}>
                <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{uri: contact.avatar}}/>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                        <Text style={styles.name}>{contact.username}</Text>
                        <Text style={styles.info}>{contact.job}</Text>
                        <Text style={styles.company}><Icon style={styles.icon} type="FontAwesome5" name="building" /> {contact.company}</Text>
                        <Text style={styles.description}>{contact.bio}</Text>
                        <Text style={styles.contact}><Icon style={styles.icon} type="AntDesign" name="phone" /> {contact.phone}</Text>
                        <Text style={styles.contact}><Icon style={styles.icon} type="Entypo" name="email" /> {contact.email}</Text>
                        
                        </View>
                    </View>
                </View>
                </ScrollView>
            </Container>
        );
    }

};

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:120,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:50
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    company:{
      fontSize:14,
      color: "gray",
      marginTop:6
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'left'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    icon: {
        fontSize: 12,
        paddingRight: 5
    },
    contact:{
      fontSize: 15,
      color: "#00BFFF",
      marginTop:10
    }
  });
  
export default ContactProfile;