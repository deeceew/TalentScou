import React from 'react';
import { Platform, StatusBar, StyleSheet, Button } from 'react-native';
import { 
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute, 
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
import PasswordChangeScreen from './screens/PasswordChange';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import AccountScreen from './screens/Account';
import AdminScreen from './screens/Admin';

import TimelineScreen from './screens/Timeline';
import CommentScreen from './screens/Comment';
import LivestreamScreen from './screens/Livestream';
import MessageScreen from './screens/Message';
import VideoCallScreen from './screens/VideoCall';

import CreatePostScreen from './screens/CreatePost';
import MyPostsScreen from './screens/MyPosts';

const Tab = createBottomTabNavigator();
 
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="My Posts" component={MyPostsScreen} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
 
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen
        name="Timeline"
        component={TimelineScreen}
      />
      <Drawer.Screen
        name="Livestream"
        component={LivestreamScreen}
      />
      <Drawer.Screen name="Message" component={MessageScreen} />
      <Drawer.Screen name="VideoCall" component={VideoCallScreen} />
      <Drawer.Screen
        name="Comment"
        component={CommentScreen}
      />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen
        name="Password Forget"
        component={PasswordForgetScreen}
      />
      <Drawer.Screen
        name="Password Change"
        component={PasswordChangeScreen}
      />
      <Drawer.Screen name="Admin" component={AdminScreen} />
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
 
  const handleSignIn = () => {
    // TODO implement real sign in mechanism 
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism 
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator>
      {isAuthenticated ? (
        <RootStack.Screen 
          name="Home" 
          component={HomeDrawer} 
          options={({ route, navigation  }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerLeft: () => (
              <Button
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                title="Menu"
              />
            ),
            headerRight: () => (
              <Button onPress={handleSignOut} title="Sign Out" />
            ),
          })}
        />
      ) : (
        <>
        <RootStack.Screen 
          name="TalentScout" 
          component={LandingScreen}
          options={{
            animationTypeForReplace: 'pop',
          }}
        />
        <RootStack.Screen name="Sign In">
          {(props) => (
            <SignInScreen {...props} onSignIn={handleSignIn} />
          )}
        </RootStack.Screen>
        <RootStack.Screen name="Sign Up">
              {(props) => (
                <SignUpScreen {...props} onSignUp={handleSignUp} />
              )}
        </RootStack.Screen>
        <RootStack.Screen
              name="Password Forget"
              component={PasswordForgetScreen}
        />
       </>
      )} 
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;