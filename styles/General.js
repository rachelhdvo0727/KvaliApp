import { StyleSheet } from 'react-native';

export default generalStyles = StyleSheet.create({
    pageCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    headerH1: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#32305D',
    },
    input: {
        height: 40,
        backgroundColor: 'lightgray',
        margin: 12,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        width: 333,
    },
    formInput: {
        padding: 18,
        width: 333,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EEEEEE',
    },
    fieldset: {
        margin: 20,
        borderWidth: 2,
        borderColor: '#EEEEEE',
        borderRadius: 5,
    },
    btnPrimary: {
        width: 340,
        textAlign: 'left',
        backgroundColor: '#5050A5',
        padding: 18,
        borderRadius: 5,
        margin: 10,
    },
    btnPrimaryContent: { color: '#fff', fontWeight: '600' },
    btnLink: {
        fontWeight: 'bold',
        color: '#5050A5',
    },
    lightShadow: {
        shadowColor: '#AAAAAA29',
        shadowOpacity: 5,
        shadowOffset: { width: 0, height: 2 },
    },
});

// export default generalStyles;
