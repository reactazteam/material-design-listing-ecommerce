'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import Line from './../../components/Line'
import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const holderWidth = width
const bigImageWidth = holderWidth * 3/ 5 // 2 is border top and bottom
const smallImageWidth = bigImageWidth / 2

smallImageWidth = smallImageWidth - 5 //Small top image marginBottom 10

class CollectionThumbThree extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <View style={ styles.imagesHolder }>
                    <Image style={ styles.bigImage } source={{ uri: this.props.bigImageUri }} />
                    <View>
                        <Image style={[ styles.smallImage, { marginBottom: 10 } ]} source={{ uri: this.props.smallTopImageUri }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.smallBottomImageUri }} />
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
        padding: 10,
        alignItems:'center'
    },
    bigImage: {
        width: bigImageWidth,
        height: bigImageWidth,
        borderWidth: 0.5,
        borderRadius : 10,
        borderColor: colors.dark_gray,
        padding: 5
    },
    smallImage: {
        width: smallImageWidth,
        height: smallImageWidth,
        borderWidth: 0.5,
        borderColor: colors.bd_input,
        borderRadius : 10,
        padding: 5,
        marginLeft: 10
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

module.exports = CollectionThumbThree
