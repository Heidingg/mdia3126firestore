import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import EditScreen from './screens/Edit';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAY-wWekFQYR2ISWwz0eM5FWGx4BPe2hTo",
    authDomain: "mdia3126-firebase-firestore.firebaseapp.com",
    projectId: "mdia3126-firebase-firestore",
    storageBucket: "mdia3126-firebase-firestore.appspot.com",
    messagingSenderId: "599193807529",
    appId: "1:599193807529:web:188788356664c02dc557b8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


export default function App() {

const Stack = createStackNavigator();

return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Register" component={RegisterScreen} />
<Stack.Screen name="Edit" component={EditScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}