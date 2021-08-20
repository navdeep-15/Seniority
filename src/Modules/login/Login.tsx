import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { normalize, vw } from '../../Constants/Dimension'
import { TextField } from 'react-native-material-textfield'

interface Props {
    navigation: any;
}
interface State {
    number: string;
}
export default class Login extends React.Component<Props, State> {
    modalizeRef = React.createRef<Modalize>();
    constructor(props: Props) {
        super(props);
        this.state = {
            number: ''
        }
    }
    componentDidMount() {
        // Opens Bottom Sheet
        this.modalizeRef.current?.open();
    }
    onClosePress=()=>{
        this.modalizeRef.current?.close();
    }
    onContinuePress=()=>{
        if(this.state.number.length<10)
            console.error('Please enter a valid number');
        else
            this.props.navigation.navigate('Otp',{number:this.state.number});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Home Screen </Text>
                <Modalize
                    ref={this.modalizeRef}
                    snapPoint={540}>
                    <View style={styles.modalizeview}>
                        <TouchableOpacity style={styles.cancelbtn} onPress={this.onClosePress}>
                            <Image
                                source={require('../../../assets/cancel.png')}
                                style={styles.cancelimg}
                            />
                        </TouchableOpacity>
                        <Text style={styles.heading}>LOGIN</Text>
                        <TextField
                            onChangeText={num => this.setState({ number: num })}
                            keyboardType={'number-pad'}
                            label='MOBILE NUMBER'
                            inputContainerStyle={styles.input}
                            labelFontSize={15}
                            tintColor={'gray'}
                            baseColor={'gray'}
                        />
                        <TouchableOpacity style={styles.submitbtn} onPress={this.onContinuePress}>
                            <Text style={styles.submittext}>CONTINUE</Text>
                        </TouchableOpacity>
                        <View style={styles.rowview1}>
                            <Text style={styles.privacytext}>By continuing, I agree to </Text>
                            <TouchableOpacity>
                                <Text style={styles.privacypolicytext}>
                                    PRIVACY POLICY
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowview2}>
                            <View style={styles.horizontalline} />
                            <Text style={styles.ortext}>OR</Text>
                            <View style={styles.horizontalline} />
                        </View>
                        <View style={styles.btnrowview}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/technologies-and-extensions-apple-id-buttons-logo-only-sign-in-with-apple-black.png')}
                                    style={styles.socialloginimg}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/group.png')}
                                    style={styles.socialloginimgother}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../../assets/f-logo-rgb-blue-1024.png')}
                                    style={styles.socialloginimg}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowview3}>
                            <Text style={styles.privacytext}>New at Seniority? </Text>
                            <TouchableOpacity>
                                <Text style={styles.privacypolicytext}>
                                    SIGN UP
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modalize>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    modalizeview: {
        padding: normalize(22),
    },
    cancelimg: {
        width: vw(20),
        height: vw(22),
    },
    cancelbtn: {
        alignSelf: 'flex-end'
    },
    heading: {
        fontSize: normalize(20),
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center',
        marginTop: normalize(13),
    },
    input: {
        marginTop: normalize(60),
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
    },
    rowview1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(15),
        alignSelf: 'center'
    },
    privacytext: {
        fontSize: normalize(15),
        color: '#9d9d9d',
        fontFamily: 'AvenirNext-DemiBold',
    },
    privacypolicytext: {
        fontSize: normalize(15),
        color: '#25994f',
        fontFamily: 'AvenirNext-DemiBold',
    },
    rowview2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(35),
        alignSelf: 'center',
        marginHorizontal: normalize(125),
    },
    horizontalline: {
        flex: 1,
        height: 1,
        backgroundColor: '#9d9d9d'
    },
    ortext: {
        fontSize: normalize(13),
        color: '#9d9d9d',
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center',
        width: 40
    },
    btnrowview:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(20),
        alignSelf: 'center',
        marginHorizontal: normalize(90),
    },
    socialloginimg:{
        width:vw(44),
        height:vw(44),
    },
    socialloginimgother:{
        width:vw(44),
        height:vw(44),
        marginHorizontal:normalize(30),
    },
    rowview3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(30),
        alignSelf: 'center'
    },
});
