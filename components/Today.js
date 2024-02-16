import React from 'react';
import { Button, View, ScrollView, Image, Text, StyleSheet } from 'react-native';

import GameCard from './gameCard';

const Today = ({ }) => {


    return (

        <ScrollView>

            <View style={styles.container}>
                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />

                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />

                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />
                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />
                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />
                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />
                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />
                <GameCard
                    date="21 Oct - 22:00"
                    match="Chelsea - Man United"
                    odds="1:5.34  X:3.86  2:2.03"
                />
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },

});


export default Today;
