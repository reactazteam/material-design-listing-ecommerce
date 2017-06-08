'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet
} from 'react-native'

class Grid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[ styles.grid, this.props.style || {} ]}>{ this.props.children }</View>
        )
    }
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: -20
    }
})

module.exports = Grid
