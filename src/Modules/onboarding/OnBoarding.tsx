import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { normalize, vw } from '../../Constants/Dimension'
import AppIntroSlider from 'react-native-app-intro-slider';

interface Props {
    navigation: any;
}

export default class OnBoarding extends React.Component<Props> {

    onPressSkipButton = () => {
        this.props.navigation.navigate("HomeScreen");
    }
    renderItems = ({ item }: { item: any }) => {
        return (
            <View>
                <Image source={item.image} style={styles.gifstyle} resizeMode='cover' />
                <Text style={styles.titletext}>{item.title}</Text>
                <Text style={styles.descriptiontext}>{item.text}</Text>
            </View>
        );
    }
    keyExtractor = (item: any) => item.title
    renderNextButton = () => {
        return (
            <Image source={require('../../../assets/combined-shape.png')} style={styles.arrow} />
        );
    }
    renderPrevButton = () => {
        return (
            <Image source={require('../../../assets/combined-shape-copy.png')} style={styles.arrow} />
        );
    }
    renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={this.onPressSkipButton}>
                <Text style={styles.bottomtext}>GET STARTED</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={this.onPressSkipButton}>
                    <Text style={styles.btntext}>SKIP</Text>
                </TouchableOpacity>

                {/* Slider used for Walkthrough screens */}

                <AppIntroSlider
                    data={walkthroughs}
                    renderItem={this.renderItems}
                    keyExtractor={this.keyExtractor}
                    renderNextButton={this.renderNextButton}
                    renderPrevButton={this.renderPrevButton}
                    renderDoneButton={this.renderDoneButton}
                    showPrevButton={true}
                    activeDotStyle={styles.activedotstyle}
                    dotStyle={styles.dotstyle}
                />
            </View>
        )
    }
}
//Walkthrough Data
const walkthroughs = [
    {
        image: require('../../../assets/shop.gif'),
        title: "Welcome to Seniority",
        text: "India's largest online shopping\ndestination for seniors",
    },
    {
        image: require('../../../assets/blog.gif'),
        title: "Blog",
        text: "Save your favourite blogs"
    },
    {
        image: require('../../../assets/everGreen.gif'),
        title: "Live Evergreen",
        text: "Thoughtfully crafted products curated\nfor all your daily needs"
    },

]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: normalize(50),
        padding: normalize(20),
        backgroundColor: '#fff'
    },
    swiperpaginationstyle: {
        marginBottom: normalize(109)
    },
    btn: {
        marginBottom: normalize(70)
    },
    btntext: {
        color: 'gray',
        textAlign: 'right',
        fontWeight: 'bold'
    },
    activedotstyle: {
        backgroundColor: '#25994f',
        width: normalize(18),
        height: normalize(8),
        borderRadius: normalize(5),
        margin: normalize(3),
        marginBottom: normalize(250),
    },
    titletext: {
        fontSize: normalize(25),
        fontWeight: 'bold',
        marginTop: normalize(54),
        textAlign: 'center'
    },
    descriptiontext: {
        fontSize: normalize(17),
        textAlign: 'center',
        marginTop: normalize(6),
        color: "#616161"
    },
    gifstyle: {
        width: vw(249),
        alignSelf: 'center',
    },
    arrow: {
        width: vw(18),
        height: vw(15),
    },
    arrowbtn: {
        marginTop: normalize(190),
        alignSelf: 'flex-end'
    },
    bottomtext: {
        color: '#25994f',
        fontSize: normalize(15),
        fontWeight: 'bold',
    },
    bottomview: {
        marginTop: normalize(190),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: normalize(32)
    },
    textbtn: {
        flex: 0.8
    },
    arrowbtnleft: {
        flex: 0.5,
    },
    arrowbtnright: {
        flex: 0.5,
        alignItems: 'flex-end'
    },
    dotstyle: {
        backgroundColor: 'gray',
        width: normalize(8),
        height: normalize(8),
        borderRadius: normalize(5),
        margin: normalize(3),
        marginBottom: normalize(250),
    }
});

