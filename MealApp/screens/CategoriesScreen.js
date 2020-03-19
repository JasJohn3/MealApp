import React from 'react';
import {View,FlatList, Text,Button,StyleSheet, TouchableOpacity, Platform} from 'react-native';
//import the Javascript object for CATEGORIES that contains the values for each Category.
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';


const CatagoriesScreen = props =>{
    const renderGridItem = (itemData)=>{
        //onPress activates an inline function using the navigation.navigate method. 
        //'CategoryMeals' is the page found in the category.js file, 
        //categoryId is a variable object created to pass the item.id from the array of dummy-data.js as a param.
        return <TouchableOpacity 
                //style sheet for the Grid Items
                style={styles.gridItem} 
                //function that navigates to the selected category
                onPress={()=> props.navigation.navigate('CategoryMeals',{categoryId:itemData.item.id})}>
                
                <View><Text>{itemData.item.title}</Text></View>
                </TouchableOpacity>;
        };
    return(
        
        <FlatList keyExtractor={(item, index)=> item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};
//This is a function that allows access to the Object properties.  You can declare a title within this function
//This is one of a number of methods for Creating Header Titles for your app.
CatagoriesScreen.navigationOptions = {
headerTitle: 'Meal Categories',
headerStyle: {
    //applied a ternary operator using Platform to determine the OS being used.
    backgroundColor:Platform.OS === 'android' ? Colors.primaryColor :''
},
//applied a ternary operator using Platform to determine the OS being used.
headerTintColor: Platform.OS === 'android' ?  'white': Colors.accentColor
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CatagoriesScreen;