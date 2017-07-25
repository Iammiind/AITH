import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scoreWrapper: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#FF6D00'
    },
    highScore: {
        flex: 2,
        backgroundColor: '#FF9100',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5
    },
    timeCount: {
        flex: 1,
        backgroundColor: '#7CB342',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5
    },
    currentScore: {
        flex: 2,
        backgroundColor: '#FF9100',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5
    },
    holeWrapper: {
        flex: 10,
        flexDirection: 'column',
        backgroundColor: '#FFAB40'
    },
    rowHole: {
        flex: 1,
        flexDirection: 'row'
    },
    hole: {
        flex: 1,
        backgroundColor: '#FFD180',
        borderRadius: 20,
        margin: 10
    },
    icon: {
        fontSize: 50
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    coalaWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    topic: {
        fontSize: 16
    },
    detail: {
        fontWeight: 'bold',
        fontSize: 24
    }
})