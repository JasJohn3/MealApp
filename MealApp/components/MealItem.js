import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      {/* activate the onSelectMeal */}
      <TouchableOpacity onPress={props.onSelectMeal}>
        {/* Meal Image View */}
        <View>
          {/* import styles and merge with existing styles using the spread operator ... */}
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            {/* image background is a standard component for setting a background */}
            <ImageBackground
            // display background image
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              {/* Meal Details View */}
              <View style={styles.titleContainer}>
                {/* number of lines is for formatting */}
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            {/* display Minutes the meal takes */}
            <Text>{props.duration}m</Text>
            {/* display complexity and capitalize */}
            <Text>{props.complexity.toUpperCase()}</Text>
            {/* display affordability */}
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default MealItem;
