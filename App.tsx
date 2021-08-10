import React from 'react'
import RNBootSplash from "react-native-bootsplash"
import RootNavigator from './src/Modules/route/RootNavigator';

export default class App extends React.Component {
  componentDidMount() {
    //Splash Screen
    setTimeout(() => {
      RNBootSplash.hide(); // immediate
    }, 1500);
  }
  render() {
    return (
      <RootNavigator/>
    )
  }
}
