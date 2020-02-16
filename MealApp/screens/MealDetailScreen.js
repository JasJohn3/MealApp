import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

const MealDetailScreen = props =>{
    return(
        <View style={styles.screen}>
            <Button title="Meals!" onPress={
          () => props.navigation.navigate('CategoryMeals')
            } />
            <Button title="Categories" onPress={
          () => props.navigation.navigate('Categories')
            } />
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        flexDirection:'row',

    },
});

export default MealDetailScreen;