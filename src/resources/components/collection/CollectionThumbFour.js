'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import Line from './../../components/Line'
import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const holderWidth = width
const smallImageWidth = holderWidth / 2 - 10

smallImageWidth = smallImageWidth - 5 //Small top image marginBottom 10

class CollectionThumbFour extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <View style={ styles.imagesHolder }>
                    <View>
                        <Image style={[ styles.smallImage, { marginBottom: 5 } ]} source={{ uri: this.props.img1 }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.img2 }} />
                    </View>
                    <View>
                        <Image style={[ styles.smallImage, { marginBottom: 5 } ]} source={{ uri: this.props.img3 }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.img4 }} />
                    </View>
                </View>
                <Text style={ styles.name } ellipsizeMode='tail'>{ this.props.name }</Text>
                <Text style={ styles.author }>{ this.props.author }</Text>
                <Line style={ styles.line } />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        flex: 1,
        width: holderWidth,
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems:'center',
        padding: 10
    },
    smallImage: {
        width: smallImageWidth,
        height: smallImageWidth,
        borderWidth: 0.5,
        borderColor: colors.bd_input,
        borderRadius : 10,
        marginLeft: 5,
    },
    author: {
        color: colors.txt_description,
        marginBottom: 15
    },
    name: {
        marginTop: 15,
        fontWeight: '500',
        fontSize: 16,
    },
    imagesHolder: {
        flexDirection: 'row'
    },
    line: {
        marginBottom: 15
    }
})

module.exports = CollectionThumbFour
