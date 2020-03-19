import React from 'react';
import {View, Text,Button, StyleSheet, Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
const CategoryMealScreen = props =>{
    //this creates a variable that stores the parameter created in the categories screen called 'categoryID'
    //it is received from the Categories Screen through the js object{categoryId:itemData.item.id}
    const catID = props.navigation.getParam('categoryId')
    //this function searches for the categoryID and stores the value found.
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    return(
        <View style= {styles.screen}>
            <View style = {styles.screen}><Text>Meal Categories</Text></View>
            <View style = {styles.screen}><Text>{selectedCategory.title}</Text></View>
            <View style={styles.buttons}>
                <Button title="Meal Details!" onPress={
            () => props.navigation.navigate('MealDetail')
                } />
                <Button title="Categories!" onPress={
            () => props.navigation.navigate('Categories')
                } />
            </View>
        </View>

    );
};

//Utilizing the navigationOptions from the meal screen and passing the navigationData allowing access to navigationData Methods
CategoryMealScreen.navigationOptions = navigationData => {
    //navigationData allows access to the get param function to receive tha category id passed from the main screen
    const catID = navigationData.navigation.getParam('categoryId');
    //this variable searches the dummy-data.js array for the categoryId information
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

    return{
        //headerTitle allows the ability to dynamical assign a new title based on the categoryId.
        headerTitle: selectedCategory.title,
        headerStyle: {
            //applied a ternary operator using Platform to determine the OS being used.
            backgroundColor:Platform.OS === 'android' ? Colors.primaryColor :''
        },
        //applied a ternary operator using Platform to determine the OS being used.
        headerTintColor: Platform.OS === 'android' ?  'white': Colors.accentColor
    };
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
    },
    buttons:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        flexDirection:'row',
    },
});

export default CategoryMealScreen;