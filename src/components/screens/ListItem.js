import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Container, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class Contact extends Component {

    render(){
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ContactProfile', {contact: this.props.user})}>
                <Container style={styles.item}>
                    <Image
                        style={styles.avatar}
                        source={{uri: this.props.user.avatar}}
                    />
                    <View>
                        <Text style={styles.username}>{this.props.user.username}</Text>
                        <Text style={styles.job}>{this.props.user.job}</Text>
                    </View>
                </Container>
            </TouchableOpacity>
        );
    }

};

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        height: 70,
        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca'
    },
    avatar: {
        borderRadius: 25,
        marginHorizontal: 15,
        height: 50,
        width: 50,
        display: 'flex',
    },
    username: {
        fontWeight: '600',
    },
    job: {
        color: '#3d3d29',
        fontSize: 12
    }
});
  
export default withNavigation(Contact);