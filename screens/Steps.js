import React from 'react';
import { Pedometer } from 'expo-sensors';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class Steps extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0,
    };

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps,
            });
        });

        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result),
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: 'Wychodzi na to, że krokomierz jest niegotowy: ' + error,
                });
            }
        );

        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                this.setState({ pastStepCount: result.steps });
            },
            error => {
                this.setState({
                    pastStepCount: 'Nie można określić ile kroków zrobiłeś: ' + error,
                });
            }
        );
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        let daySteps = this.state.pastStepCount;
        let dayPercentage = (this.route.param.res/daySteps)*100
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Zacznij swój spacer z psem!</Text>
                <TouchableOpacity style={styles.button} onPress={() => this._subscribe()}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this._unsubscribe()}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                <Text style={styles.subTitle}>Na tym spacerze zrobiłeś {daySteps} kroków ({dayPercentage} % )</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Powrót</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    title: {
        fontSize: 30,
        color: '#78432C',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 25
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
        height: 60,
        width: 200,
        backgroundColor: '#78432C',
    },
    buttonText: {
        color: 'lightblue',
        fontSize: 25
    },
    subTitle: {
        fontSize: 20,
        color: '#78432C',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    }

});