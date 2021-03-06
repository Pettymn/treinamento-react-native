import React from 'react'
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Text from '../text/Text'

export default class BooPrimaryButton extends React.Component {
    render() {
        return (
            <TouchableOpacity 
                activeOpacity={0.7}
                {...this.props}
                style={[style.container, this.props.style]}>
                <Text style={style.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#A3C4BC',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18
    }
})