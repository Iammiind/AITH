import React, { Component } from 'react'
import { View, Text, Button, StatusBar, TouchableHighlight, AsyncStorage, Alert} from 'react-native'
import styles from './styles'

var Coala = (props) => {
    return (
        <TouchableHighlight style={ styles.coalaWrapper } onPress={ props.onPress }>
            {
                props.hole ? <Text style={ styles.icon }> 🐨 </Text> : <Text style={ styles.icon }></Text>
            }
        </TouchableHighlight>
    )
}

const timeLimit = 10
const STORAGE_KEY = '@Game: score'

class Game extends Component {
    state= {
        highScore: 0,
        timeCount: 0,
        score: 0,
        playing: false,
        holes: [ false, false, false, false, false, false, false, false, false ]
    }

    _startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0
        })
        
        coalas = setInterval( () => {
            var currentHoles = this.state.holes
            currentHoles[Math.floor(Math.random() * 9)] = true

            if(!Math.floor(Math.random() * 3)) {
                currentHoles = [ false, false, false, false, false, false, false, false, false ]
            }

            this.setState({
                holes: currentHoles
            })

            if(!this.state.playing) {
                clearInterval(coalas)
                this.setState({
                    holes: [ false, false, false, false, false, false, false, false, false ]
                })
            }

        }, 250 )

        timer = setInterval( () => {
            this.setState({
                timeCount: this.state.timeCount - 1
            })
            if(this.state.timeCount == 0){
                this._stopGame()
            }
        }, 1000 )
    }

    _stopGame() {
        clearInterval(timer)
        if(this.state.score > this.state.highScore) {
            this.setState({
                playing: !this.state.playing,
                highScore: this.state.score
            }, () => {
                this._saveData()
                alert('New High Score Is ' + this.state.highScore + '!' )
            })

        } else {
            this.setState({
                playing: !this.state.playing
            })
        }
    }

    _handleTouch(holeNumber) {
        if(this.state.holes[holeNumber]) {
            this.setState({
                score: this.state.score + 1
            })

            this.state.holes[holeNumber] = !this.state.holes[holeNumber]
        }
    }

    _saveData() {
        AsyncStorage.setItem(STORAGE_KEY, this.state.highScore.toString() )
        .then( () => console.log(' High Score Has Been Saved') )
        .catch( (error) => console.log(
            ' AsyncStorage: ' + error.message
        ) )
    }

    componentWillMount() {
        AsyncStorage.getItem(STORAGE_KEY)
        .then( (score) => {
            this.setState({
                highScore: score
            })
        } )
        .catch( (error) => console.log(
            'AsynStorage' + error.message 
        ))
    }

    render() {
        return(
            <View style={ styles.container }>
                <StatusBar 
                    hidden={true}
                />
                 <View style={ styles.scoreWrapper }>
                    <View style={ styles.highScore }>
                        <Text style={ styles.topic }>
                            High Score
                        </Text>
                        <Text style={ styles.detail }>
                            { this.state.highScore }
                        </Text>
                    </View>
                    <View style={ styles.timeCount }>
                        <Text style={ styles.topic } >
                            Times
                        </Text>
                        <Text style={ styles.detail }>
                            { this.state.timeCount }
                        </Text>
                    </View>
                    <View style={ styles.currentScore }>
                        <Text style={ styles.topic } > 
                            Score
                        </Text>
                        <Text style={ styles.detail }>
                            { this.state.score }
                        </Text>
                    </View>
                </View> 
                <View style={ styles.holeWrapper }>
                     <View style={ styles.rowHole }>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[0] } onPress={ () => this._handleTouch(0) } /> 
                        </View>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[1] } onPress={ () => this._handleTouch(1) } /> 
                        </View>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[2] } onPress={ () => this._handleTouch(2) } /> 
                        </View>
                    </View> 
                    <View style={ styles.rowHole }>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[3] } onPress={ () => this._handleTouch(3) } /> 
                        </View>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[4] } onPress={ () => this._handleTouch(4) } /> 
                        </View>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[5] } onPress={ () => this._handleTouch(5) } /> 
                        </View>
                    </View> 
                    <View style={ styles.rowHole }>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[6] } onPress={ () => this._handleTouch(6) } /> 
                        </View>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[7] } onPress={ () => this._handleTouch(7) } /> 
                        </View>
                        <View style={ styles.hole }>
                            <Coala hole={ this.state.holes[8] } onPress={ () => this._handleTouch(8) } /> 
                        </View>
                    </View> 
                </View>
                <View style={ styles.buttonWrapper }>
                    <Button
                        title="Start Game"
                        color="#7CB342"
                        onPress={ this._startGame.bind(this) }
                        disabled={ this.state.playing ? true : false }
                    />
                </View>  
            </View>
        )
    }
}
export default Game
