// @flow
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './../screens/Home';
import ContactProfile from './../screens/ContactProfile';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Contacts',
    })
  },
  ContactProfile: {
    screen: ContactProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
    })
  },
  /* Add more screen here */
});

const Navigator = createAppContainer(RootNavigator);

export default Navigator;
