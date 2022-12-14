import { Text, View, Button, Image, TextInput } from 'react-native';
import { collection, addDoc, setDoc, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';

export default function Edit({navigation, route}){
    //console.log(route);
    const [fn, setFN] = useState("");
    const [age, setAge] = useState("");
    const [ava, setAva] = useState("");

    const GetUser = async () => {
        const db = getFirestore();
        //const docRef = doc(db, "users", "6JojjmEUnnRAQAmKNOpz");
        const docRef = doc(db, "users", route.params.id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const user = docSnap.data();
            setFN(user.fullname);
            setAge(user.age);
            setAva(user.avatar);
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    
    useEffect(() => {
        GetUser();
    }, []);

    const EditUser = async () => {
        const db = getFirestore();

        const userRef = doc(db, 'users', route.params.id);
        setDoc(userRef, { 
            fullname: fn,
            age:age,
            avatar: ava
         }, { merge: true });
        // Add a new document with a generated id.
        // const docRef = await addDoc(collection(db, "users"), {
        //     fullname: fn,
        //     age: age,
        //     avatar: ava
        // });
        // console.log("Document written with ID: ", docRef.id);
    }

    return(
        <View>
            <TextInput value={fn} placeholder="fullname" onChangeText={(txt)=>setFN(txt)} />
            <TextInput value={age} placeholder="age" onChangeText={(txt)=>setAge(txt)} />
            <TextInput value={ava} placeholder="avatar" onChangeText={(txt)=>setAva(txt)} />
            <Button title="Update" onPress={()=>EditUser()} />
        </View>
    );
}