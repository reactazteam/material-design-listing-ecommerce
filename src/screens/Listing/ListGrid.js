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
import Icon from 'react-native-vector-icons/FontAwesome'

import Container from './../../resources/components/Container'
import ListPanel from './../../resources/components/ListPanel'

import GridProductThumb from './../../resources/components/product/GridProductThumb'
import Grid from './../../resources/components/Grid'
import colors from './../../resources/styles/colors'
import Header from './../../resources/components/Header'

import homeData from './../../data/home'

import Utils from './../../resources/helpers/Utils'

var {height, width} = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500/900)

class ListGrid extends Component {
    static navigationOptions = {
        drawerLabel: 'List Grid Material',
        drawerIcon: ({ tintColor }) => (
            <Icon style={styles.icon} name='list' size={16}/>
        ),
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} title="Grid List"/>
                <ScrollView>
                    {this._renderGridList(homeData.grid_fashion)}
                    {this._renderGridList(homeData.grid_bag)}
                </ScrollView>
            </Container>
        )
    }

    _renderGridList(data) {
        return (
            <ListPanel onPressSeeAll={() => this._pressSeeAllProducts({navBarTitle: data.title})} title={data.title} description={data.description}>
                <Grid>
                    {
                        data.items.map((item, idx) => {
                            return <GridProductThumb onPress={() => this._pressProduct(item.id)} key={idx} { ...item }/>
                        })
                    }
                </Grid>
            </ListPanel>
        )
    }

    _pressProduct(){
        Utils.showMessage('You clicked on a product')
    }

    _pressSeeAllProducts(){
        Utils.showMessage('You clicked to see all products')
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

module.exports = ListGrid
