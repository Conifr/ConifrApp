import React from 'react';
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


const HomeNavScreen = ({ navigation, current }) => (
  <View>
    <Text>{current}</Text>
  </View>
);

const MyTrips = ({ navigation }) => (
  <HomeNavScreen current="MyTrips Screen"  navigation={navigation} />
);

const FollowingTrips = ({ navigation }) => (
  <HomeNavScreen current="Following Trips Screen" navigation={navigation} />
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
    height: 44,
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
  }
});

export default CustomTabs;
