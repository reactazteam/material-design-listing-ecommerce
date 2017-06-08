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

import Container from './../resources/components/Container'
import ListPanel from './../resources/components/ListPanel'
import SwiperProductThumb from './../resources/components/product/SwiperProductThumb'
import GridProductThumb from './../resources/components/product/GridProductThumb'
import Swiper from './../resources/components/Swiper'
import Grid from './../resources/components/Grid'

import colors from './../resources/styles/colors'

import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './../resources/components/Header'

import homeData from './../data/home'

var {height, width} = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500/900)

class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Example Home',
        drawerIcon: ({ tintColor }) => (
            <Icon style={styles.icon} name='home' size={20}/>
        ),
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} title="Example Home Screen"/>
                <ScrollView>
                    {this._renderGridList(homeData.grid_fashion)}
                    {this._renderSwiperList(homeData.fashions)}
                </ScrollView>
            </Container>
        )
    }

    _renderSwiperList(data) {
        return (
            <ListPanel title={data.title} description={data.description}>
                <Swiper>
                    {
                        data.items.map((item, idx) => {
                            return <SwiperProductThumb key={idx} { ...item }/>
                        })
                    }
                </Swiper>
            </ListPanel>
        )
    }

    _renderGridList(data) {
        return (
            <ListPanel title={data.title} description={data.description}>
                <Grid>
                    {
                        data.items.map((item, idx) => {
                            return <GridProductThumb key={idx} { ...item }/>
                        })
                    }
                </Grid>
            </ListPanel>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header
    },
    headerSub: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: 64,
        height: 28,
        resizeMode: 'center'
    },
    icoSearch: {
        color: colors.txt_description,
        marginRight: 5
    },
    btnSearchHolder: {
        padding: 15,
        paddingTop: 0
    },
    btnSearch: {
        borderColor: colors.bd_input,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: colors.bg1,
        borderWidth: 1,
        borderRadius: 5
    },
    btnSearchTitle: {
        color: colors.txt_description,
        fontSize: 16
    },
    btnDeals: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5
    },
    icoDeals: {
        color: colors.txt_description,
        marginRight: 10
    },
    section_title:{
        fontSize: 18,
        fontWeight: '600',
        padding: 20
    }
})

module.exports = Home
