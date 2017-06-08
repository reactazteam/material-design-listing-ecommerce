'use strict'
import React, { Component } from 'react'
import {
    StatusBar, StyleSheet, View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import colors from './../styles/colors'
class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={ styles.container }>
                <StatusBar hidden={ true }/>
                { this.props.children }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        alignItems: 'stretch',
        flex: 1
    },
    shoppingCart: {
        position: 'absolute',
        top: 13,
        right: 15,
        color: colors.txt_description,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})

module.exports = Container
