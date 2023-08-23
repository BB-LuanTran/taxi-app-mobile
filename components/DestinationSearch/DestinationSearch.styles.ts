import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
var viewWidth = Dimensions.get('window').width; //full width
var viewHeight = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    destinationContainer: {
        padding: 10,
        minWidth: '100%',
    },
    textInput: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
    },
    googleSearchContainer: {
        width: 'auto',
        height: 'auto',
    }
});

export default styles;