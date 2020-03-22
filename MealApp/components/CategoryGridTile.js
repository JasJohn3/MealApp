import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet,} from 'react-native';


const CategoryGridTile = props =>{

    return(    
    <TouchableOpacity 
        //style sheet for the Grid Items
        style={styles.gridItem} 
        //color
        
        //function that navigates to the selected category
        onPress={props.onSelect}>
        
    <View style={{...styles.container,...{backgroundColor: props.color}}}>
            <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
    </View>
    </TouchableOpacity>
);

};




const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150
    },
    container:{
        flex:1,
        alignItems:'flex-end',
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:.95,
        shadowOffset:{width: 0, height: 2},
        shadowRadius:10,
        elevation: 6,
        padding: 15,
        justifyContent: 'flex-end'
    },
    title:{
        // fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export  default CategoryGridTile;