'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const prdWidth = (width - 45) / 2

class GridProductThumb extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>
                <Image style={ styles.productImage } source={{ uri: this.props.imageUri }} />
                <Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
                    { this.props.name }
                </Text>
                <Text>${ this.props.prize }</Text>
                <View style={ styles.promotionHolder }>
                    <Text style={[ styles.name, { textDecorationLine: 'line-through' } ]}>${ this.props.regularPrize }</Text>
                    <Text style={ styles.name }> | { this.props.discountPercent }% off</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: prdWidth,
        height: prdWidth + 110
    },
    productImage: {
        width: prdWidth,
        height: prdWidth,
        borderWidth: 0.5,
        borderColor: colors.bd_input
    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: colors.txt_description
    },
    promotionHolder: {
        flexDirection: 'row'
    }
})

module.exports = GridProductThumb
