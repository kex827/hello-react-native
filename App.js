import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
          die1: 4,
          die2: 3
      }
  }


  roll() {
    this.setState({
      die1: Math.floor(Math.random()*6+1),
      die2: Math.floor(Math.random()*6+1),
    })
  }

  render() {
      let die1Image = "http://golearntocode.com/images/dice/" + this.state.die1 + ".png";
      let die2Image = "http://golearntocode.com/images/dice/" + this.state.die2 + ".png";
    return (
      <View style={styles.container}>
        <Image style={{ width: 100, height: 100 }}
                source={{ uri: die1Image}} />
        <Image style={{ width: 100, height: 100 }}
                source={{ uri: die2Image}} />
                <Button onPress={() => this.roll()} title="Roll!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
