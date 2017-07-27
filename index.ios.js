import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  //TabBarIOS
} from 'react-native';
import App from './app/App';

export default class ConifrAppiOS extends Component {

  /*constructor() {
    super();
    this.state = {
      selectedTab: 0
    };
  }

  handleTabPress(tab) {
    this.setState({ selectedTab: tab })
  }*/

  render() {
    return (
      /*<TabBarIOS>
        <TabBarIOS.Item
          systemIcon="featured"
          selected={true}
          selected={this.state.selectedTab === 0}
          onPress={this.handleTabPress.bind(this, 0)}
        >
          <View style={styles.view}>
            <Text style={styles.text}>Favorite Places</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 1}
          onPress={this.handleTabPress.bind(this, 1)}
        >
          <View style={styles.view}>
            <Text style={styles.text}>Add Place</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>*/
      <App />
    );
  }
}



AppRegistry.registerComponent('ConifrApp', () => ConifrAppiOS);
