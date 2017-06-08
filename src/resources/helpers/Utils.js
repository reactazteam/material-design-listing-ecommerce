import {
    Alert,
} from 'react-native';

module.exports = {
    showMessage: function(message, cb = null){
        Alert.alert('',message,
          [
            {text: 'OK', onPress: () => {
                var func = (typeof cb == 'function') ?
                   cb : eval(cb);

            }},
          ],
        )
    }
}
