import {createAppContainer} from 'react-navigation';
//importing the react navigation tools stack, tabs, drawer
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

//create a stack navigator component.  It will be stored within an App Container.
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen'
    }
  }
);

export default createAppContainer(MealsNavigator);

//wrap your component into the App Container
// export default createAppContainer(MealsNavigator);