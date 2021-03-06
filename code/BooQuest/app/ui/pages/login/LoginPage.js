import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    InteractionManager
} from 'react-native'
import {
    Text,
    Input,
    Password,
    PrimaryButton,
    LinkButton,
    KeyboardScrollView
} from 'boo-ui/components'
import {
    ColorPalette
} from 'boo-ui/utils'
import CreateAccountModal from './CreateAccountModal'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            createAccountModalIsVisible: false,
            username: '',
            password: '',

            usernameInvalid: false,
            passwordInvalid: false
        }
    }

    _openAccountModal() {
        this.setState({
            createAccountModalIsVisible: true
        })
    }

    _closeAccountModal() {
        this.setState({
            createAccountModalIsVisible: false
        })
    }

    _signIn() {
        let nextState = {
            usernameInvalid: !this.state.username,
            passwordInvalid: !this.state.password
        }

        this.setState(nextState)

        if (nextState.usernameInvalid || nextState.passwordInvalid) {
            return
        }

        alert(`username: ${this.state.username}, pass: ${this.state.password}`)
    }

    _onCancelSignup() {
        this._closeAccountModal()
    }

    _onSignupSuccess(user) {
        this._closeAccountModal()

        setTimeout(() => {
            alert('signup success!')
        }, 1000);
    }

    _onChangeField(name, value) {
        let state = {}
        state[name] = value
        state[`${name}Invalid`] = false

        this.setState(state)
    }

    render() {
        return (
            <KeyboardScrollView 
                style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={logoStyle.container}>
                        <Image source={require('./img/logo.png')} />
                        <View>
                            <Text style={logoStyle.title}>
                                BOO QUEST
                            </Text>
                        </View>
                    </View>
                    <View style={formStyle.container}>
                        <Input
                            style={formStyle.input}
                            placeholder='username'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            error={this.state.usernameInvalid}
                            onChangeText={val => this._onChangeField('username', val)}
                            value={this.state.username}
                        />
                        <Password
                            style={formStyle.input}
                            placeholder='password'
                            error={this.state.passwordInvalid}
                            onChangeText={val => this._onChangeField('password', val)}
                            value={this.state.password}
                        />
                        <PrimaryButton
                            style={formStyle.button}
                            text='sign in'
                            onPress={this._signIn.bind(this)}
                        />
                        <LinkButton
                            style={formStyle.button}
                            text='sign up'
                            onPress={this._openAccountModal.bind(this)}
                        />
                    </View>
                </View>
                <CreateAccountModal 
                    visible={this.state.createAccountModalIsVisible}
                    onCancel={this._onCancelSignup.bind(this)}
                    onSignup={this._onSignupSuccess.bind(this)} />
            </KeyboardScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: ColorPalette.purplePrimary
    }
})

const logoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorPalette.purplePrimary
    },
    image: {
        height: 171,
        width: 171
    },
    title: {
        fontSize: 40,
        color: ColorPalette.white,
        marginTop: 40
    }
})

const formStyle = StyleSheet.create({
    container: {
        height: 226,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: ColorPalette.white,
    },
    input: {
        width: 280,
        marginTop: 5
    },
    button: {
        width: 280,
        marginTop: 5
    }
})