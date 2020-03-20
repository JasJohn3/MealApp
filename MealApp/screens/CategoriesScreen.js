import React from 'react';
import {View,FlatList, Text,Button,StyleSheet, TouchableOpacity, Platform} from 'react-native';
//import the Javascript object for CATEGORIES that contains the values for each Category.
import {CATEGORIES} from '../data/dummy-data';
// import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CatagoriesScreen = props =>{
    const renderGridItem = (itemData)=>{
        //onPress activates an inline function using the navigation.navigate method. 
        //'CategoryMeals' is the page found in the category.js file, 
        //categoryId is a variable object created to pass the item.id from the array of dummy-data.js as a param.
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>{props.navigation.navigate('CategoryMeals',{categoryId:itemData.item.id})}} />
        };
    return(
        
        <FlatList keyExtractor={(item, index)=> item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};
//This is a function that allows access to the Object properties.  You can declare a title within this function
//This is one of a number of methods for Creating Header Titles for your app.
CatagoriesScreen.navigationOptions = {
headerTitle: 'Meal Categories',
// headerStyle: {
//     //applied a ternary operator using Platform to determine the OS being used.
//     backgroundColor:Platform.OS === 'android' ? Colors.primaryColor :''
// },
// //applied a ternary operator using Platform to determine the OS being used.
// headerTintColor: Platform.OS === 'android' ?  'white': Colors.accentColor
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
});

export default CatagoriesScreen;