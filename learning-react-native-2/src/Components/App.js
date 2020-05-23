import React, { Component } from 'react';
import { AppRegistry, SafeAreaView, Text, View } from 'react-native';

import { Authentication } from './Wrappers';
import { Header, Button, CardSection, Spinner } from './Common';
import LoginForm from './LoginForm';

import config from '../../example.config';

export default class App extends Component  {
  state = { loggedIn: null };
  authentication = new Authentication(config);

  componentWillMount() {
    this.authentication.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => this.authentication.signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm authentication={this.authentication} />;
      default:
        return <Spinner />;
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea} forceInset={{'top': 'always'}}>
        <Header headerText="Auth" />
        {this.renderContent()}
      </SafeAreaView>
    );
  };
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
};

AppRegistry.registerComponent('auth', () => App);
