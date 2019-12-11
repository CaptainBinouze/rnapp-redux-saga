import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Container, Spinner, Text, View, Header, Item, Icon, Input, Button } from 'native-base';
import { connect } from 'react-redux';

import { fetchStoredContacts, fetchMoreContacts, searchContacts } from './../../actions'

import ListItem from './ListItem'

class Home extends Component<{}> {

    constructor(props) {
        super(props)

        this._loadMoreContacts = this._loadMoreContacts.bind(this);

        this.state = {
            search: "",
        }

    }


    componentDidMount() {
        this.props.loadContacts();
    }

    componentWillMount() {
    }

    _loadMoreContacts() {
        if(this.state.search == "") {
            this.props.addContacts()
        }

    }

    _inputSearchChange(text) {
        this.state.search = text
        
        this.props.onSearchContacts(this.state.search)
        
    }

    render(){
        
        const {
            contacts,
            contactsBySearch
        } = this.props;
        return (
            <Container style={styles.container}>
                { (contacts.length == 0 ) &&
                    <View style={styles.spinner}>
                        <Spinner color='blue' />
                    </View>  
                }
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" 
                            onChangeText={(text) => this._inputSearchChange(text)}/>
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                <SafeAreaView style={styles.list}>
                { (contacts.length > 0 && this.state.search == "") &&
                    <FlatList 
                        data={contacts}
                        renderItem={({ item }) => <ListItem user={item} />}
                        keyExtractor={item => item.uuid}
                        onEndReached={this._loadMoreContacts}
                        onEndReachedThreshold={0.3}
                    />

                }

                { this.state.search != ""  &&
                    <FlatList 
                        data={this.props.contactsBySearch}
                        renderItem={({ item }) => <ListItem user={item} />}
                        keyExtractor={item => item.uuid}
                    />

                }
                </SafeAreaView>
                
            </Container>
        );
    }

};
const mapStateToProps = (state) => {
    return {
      contacts: state.contacts.contacts,
      contactsBySearch: state.contacts.contactsBySearch
    };
};

const mapDispatchToProps = dispatch => ({
    loadContacts: () => dispatch(fetchStoredContacts()),
    addContacts: () => dispatch(fetchMoreContacts()),
    onSearchContacts: (search) => dispatch(searchContacts(search))
});

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    list: {
        display: 'flex',
        flex: 1
    },
    spinner: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        position: 'absolute',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);