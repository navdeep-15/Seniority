import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Home Screen </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }
});
