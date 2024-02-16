import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameCard from './gameCard';

const OddsScreen = () => {
    const [allData, setAllData] = useState([]);
    const apiUrl = 'http://127.0.0.1:3333/_leagues/gameodds';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'User-Agent': 'insomnia/8.3.0',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setAllData(data);
            } catch (error) {
                console.error('Error fetching game odds:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {allData.map((game, id) => (
                <GameCard
                    key={id}
                    date={game.matchday}
                    match={game.match}
                    odds={JSON.parse(game.matchodds)} // Parse the JSON string to an object
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
});

export default OddsScreen;
