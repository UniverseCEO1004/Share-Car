import React, { useEffect } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from "react-native"
import SplashAvatar from '../../assets/images/avatar/splash_avatar.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const Login_RegisterScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.splash_avatar}>
                <SplashAvatar width={168 * scaleFactor} height={144 * scaleFactor} />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.login_text}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register_button} onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.register_text}>Register</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        paddingTop: 316 * scaleFactor
    },
    splash_avatar: {
        marginBottom: 214 * scaleFactor
    },
    buttons: {
        width: '100%'
    },
    login_button: {
        height: 58 * scaleFactor,
        width: '100%',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        marginBottom: 25 * scaleFactor

    },
    login_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    },
    register_button: {
        height: 58 * scaleFactor,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#00A86B",
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex'
    },
    register_text: {
        color: '#00A86B',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    }

})

export default Login_RegisterScreen
