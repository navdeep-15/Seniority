import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { normalize, vw } from '../../Constants/Dimension'
import { TextField } from 'react-native-material-textfield'

interface Props {
    navigation: any;
    route: any;
}
interface State {
    otp: string;
    seconds: any;
}

export default class Otp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            otp: '',
            seconds: 30,
        }
    }
    onBackPress = () => {
        this.props.navigation.pop();
    }
    onContinuePress = () => {
        if (this.state.otp.length < 6)
            console.error('Please enter a valid OTP');
        else
            this.props.navigation.navigate('Login');
    }
    customOtpTimer = () => {
        this.setState({ seconds: 30 })
        var timer = setInterval(() => {
            if (this.state.seconds > 0)
                this.setState({ seconds: this.state.seconds - 1 })
            else
                clearInterval(timer);
        }, 1000);
    }
    componentDidMount() {
        this.customOtpTimer();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headview}>
                    <TouchableOpacity onPress={this.onBackPress}>
                        <Image
                            source={require('../../../assets/back.png')}
                            style={styles.backimg}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headtext}> ENTER OTP </Text>
                </View>
                <Text style={styles.desctext}>Please enter 4 digit code sent on</Text>
                <View style={styles.rowview}>
                    <Text style={styles.numtext}>{this.props.route.params.number} </Text>
                    <TouchableOpacity>
                        <Text style={styles.edittext}> EDIT</Text>
                    </TouchableOpacity>
                </View>
                <TextField
                    onChangeText={num => this.setState({ otp: num })}
                    keyboardType={'number-pad'}
                    label='OTP'
                    inputContainerStyle={styles.input}
                    labelFontSize={15}
                    tintColor={'gray'}
                    baseColor={'gray'}
                />
                <TouchableOpacity style={styles.submitbtn} onPress={this.onContinuePress}>
                    <Text style={styles.submittext}>CONTINUE</Text>
                </TouchableOpacity>
                {
                    this.state.seconds > 1 ?
                        <Text style={styles.otptext}>RESEND OTP IN {this.state.seconds} SECONDS</Text> :
                        <TouchableOpacity onPress={this.customOtpTimer}>
                            <Text style={styles.resendotp}> RESEND OTP</Text>
                        </TouchableOpacity>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,

    },
    headview: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    backimg: {
        height: vw(20),
        width: vw(22),
        marginRight: normalize(15)
    },
    headtext: {
        fontSize: normalize(17),
        color: '#9d9d9d',
        fontFamily: 'AvenirNext-DemiBold',
    },
    desctext: {
        fontSize: normalize(15),
        color: '#9d9d9d',
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center',
        marginTop: normalize(30),
    },
    rowview: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    numtext: {
        fontSize: normalize(15),
        color: '#616161',
        fontFamily: 'AvenirNext-DemiBold',
    },
    edittext: {
        fontSize: normalize(15),
        color: '#25994f',
        fontFamily: 'AvenirNext-DemiBold',
    },
    input: {
        marginTop: normalize(20),
        paddingBottom: normalize(5),
        paddingTop: normalize(15),
        marginHorizontal: normalize(50)
    },
    submittext: {
        color: 'white',
        fontSize: normalize(15),
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center'
    },
    submitbtn: {
        marginTop: normalize(30),
        backgroundColor: '#25994f',
        marginHorizontal: normalize(50),
        paddingTop: normalize(15),
        paddingBottom: normalize(15),
        paddingLeft: normalize(95),
        paddingRight: normalize(95),
        borderRadius: normalize(5),
        marginBottom: normalize(20),
    },
    otptext: {
        fontSize: normalize(15),
        color: '#9d9d9d',
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center'
    },
    resendotp: {
        fontSize: normalize(15),
        color: '#25994f',
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center'
    },
});