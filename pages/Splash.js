import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TOM !!</Text>
        </View>
        <View>
          <Text style={styles.subtitle}> copyright by Jerry </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8E0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#01DFA5',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#01DFA5',
    fontWeight: '200',
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
});
