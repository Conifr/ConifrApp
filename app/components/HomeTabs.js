import React, { Component } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

class MyTrips extends Component {
  render(){
    var json = [
      { 'date': '07/16/17', 'location': 'Santa Cruz, CA', 'distance': '2.0 mi', 'offset_cost': '0.05'},
      { 'date': '07/23/17', 'location': 'San Francisco, CA', 'distance': '3.4 mi', 'offset_cost': '0.08'}
    ];
    var trips = [];
    for(let i = 0; i < json.length; i++){
      trips.push(
        <View key = {i} style={styles.tripCard}>
          <Text>{json[i].date}</Text>
          <Text>{json[i].location}</Text>
          <Text>{json[i].distance}</Text>
          <Text>{json[i].offset_cost}</Text>
        </View>
      )
    }
    return(
      <ScrollView style={styles.tabScrollView}>
        { trips }
      </ScrollView>
    )
  }
}

const FollowingTrips = ({ navigation }) => (
  <ScrollView style={styles.tabScrollView}>
    <Text>{"Following Trips Screen"}</Text>
  </ScrollView>
);

const CustomTabBar = ({ navigation, current }) => {
  const { routes } = navigation.state;
  return (
    <View style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(route.routeName);
          }}
          style={(route.routeName == current) ? styles.tabActive : styles.tab}
          key={route.routeName}
        >
          <Text style={styles.tabTitleText}>{(route.routeName == 'MyTrips') ? 'My Trips' : 'Following'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View style={styles.container}>
      <CustomTabBar navigation={navigation} current={routes[index].routeName}/>
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
    </View>
  );
};

const CustomTabRouter = TabRouter(
  {
    MyTrips: {
      screen: MyTrips,
      path: 'MyTrips',
    },
    Following: {
      screen: FollowingTrips,
      path: 'FollowingTrips',
    },
  },
  {

  }
);

const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabContainer: {
    flexDirection: 'row',
    height: 42,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor: '#87D37C',
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
    backgroundColor: '#E2E9EB'
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor: '#87D37C',
    borderTopWidth: 0,
    borderBottomWidth: 6,
    borderRadius: 0,
    backgroundColor: '#ECF0F1'
  },
  tabTitleText: {
    color: '#000',
    fontWeight: '500'
  },
  tabScrollView: {
    padding: 8,
    paddingTop: 5
  },
  tripCard: {
    padding: 10,
    marginTop: 4,
    marginBottom: 4,
    width: '100%',
    height: 150,
    borderRadius: 4,
    backgroundColor: '#ECF0F1'
  }
});

export default CustomTabs;
