import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let {width, height} = Dimensions.get("window");
let ItemWidth = width / 3
let ItemHeight = ItemWidth * 2 / 11

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    _pressLogo = () => {
        this.props.navigator.push({ident: 'Home'})
    }

    openMenu(){
        this.props.navigation.navigate('DrawerOpen');
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.menu_icon}>
                    <TouchableOpacity style={styles.icon_section} onPress={()=>this.openMenu()}>
                        <Icon name='bars' size={22} color='#fff' style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu_col3}>
                    <Text style={styles.text}>{ this.props.title}</Text>
                </View>

                <View style={styles.menu_icon}>

                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    header: {
        backgroundColor: '#0033',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 50,

    },
    menu_col3: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0
    },
    menu_icon: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 15
    },
    icon_section: {
        paddingLeft: 20,
        paddingTop: 0,
        paddingRight: 20,
        alignItems:'center'
    },
    icon_section_back: {
        paddingTop: 21,
        paddingLeft: 20,
        paddingRight: 20,
    },
    logo_section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'AvenirNext-Regular',
        alignItems: 'center'
    }
});
