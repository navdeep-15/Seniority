import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SliderComponent = (props) => {
    return (
        <View>
            <Image source={props.imgsource} style={styles.gifstyle} resizeMode='cover' />
            <Text style={styles.titletext}>{props.title}</Text>
            <Text style={styles.descriptiontext}>{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titletext: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 54,
        textAlign: 'center'
    },
    descriptiontext: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 6,
        color: "#616161"
    },
    gifstyle: {
        width: 249,
        alignSelf: 'center',
    },
});

export default SliderComponent
