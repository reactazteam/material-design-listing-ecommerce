'use strict'
import React, {Component} from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'

import {
    DrawerNavigator,
    DrawerItems,
    DrawerView
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome'

var {height, width} = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500/900)

class DrawerContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={ styles.holder }>
                <View style={styles.avatar}>
                    <TouchableOpacity>
                        <Image
                            style={ styles.avatar_image }
                            source={{uri: 'https://reactaz.com/wp-content/uploads/2017/02/logo-e1487520151102.png'}}
                            />
                    </TouchableOpacity>
                    <Text style={ styles.name }>ReactAZ.com</Text>
                    <Text style={ styles.description }>(Free Version)</Text>
                </View>
                <View style={ styles.items }>
                    <DrawerItems
                        style={{ marginTop: -10 }}
                         {...this.props} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        // backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    avatar_image: {
        width: 200,
        height: 60,
    },
    name:{
        fontSize: 20,
        color: '#fff',
        fontFamily: 'AvenirNext-Regular'
    },
    description:{
        fontSize: 16,
        color: '#fff',
        fontWeight: '400',
        fontFamily: 'AvenirNext-Regular'
    },
    section_title:{
        fontSize: 16,
        fontWeight: '500',
        padding: 20,
        fontFamily: 'AvenirNext-Regular'
    },
    items:{
        flex: 1,
        backgroundColor: '#fff'
    }
})

module.exports = DrawerContent
