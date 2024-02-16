import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const GameCard = ({ date, match, odds }) => {
    const oddsArray = odds.split('  ');

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.dateTime}>{date}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.match}>{match}</Text>

                <View style={styles.oddsContainer}>
                    <View style={styles.oddBox}>
                        <Image source={require('../assets/chelsea.png')} style={styles.logo} />
                        <Text style={styles.oddText}>{oddsArray[0]}</Text>
                    </View>
                    <View style={styles.oddBox}>
                        <Image source={require('../assets/draw.png')} style={styles.logo} />
                        <Text style={styles.oddText}>{oddsArray[1]}</Text>
                    </View>
                    <View style={styles.oddBox}>
                        <Image source={require('../assets/manu.png')} style={styles.logo} />
                        <Text style={styles.oddText}>{oddsArray[2]}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateTime: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        marginTop: 10,
    },
    match: {
        fontSize: 16,
    },
    oddsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    oddBox: {
        alignItems: 'center',
        width: '30%',
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    logo: {
        width: 30,
        height: 30,
    },
    oddText: {
        fontSize: 14,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

});

export default GameCard;
