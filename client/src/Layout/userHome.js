import React, { useState, useEffect } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button } from '@mui/material';
import Navbar from '../Components/navbar';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function UserHome() {

    const firebaseConfig = {
        apiKey: "AIzaSyBgenHRubhUmTXA0zZCFYPoVW7Euv8U03w",
        authDomain: "recipequest-29428.firebaseapp.com",
        projectId: "recipequest-29428",
        storageBucket: "recipequest-29428.appspot.com",
        messagingSenderId: "698523637947",
        appId: "1:698523637947:web:58ffdd7b066c9f9910319e",
        measurementId: "G-F2Q5ZXXGRD"
    };
    firebase.initializeApp(firebaseConfig);

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const user = firebase.auth().currentUser;

        if (user) {
            const userUid = user.uid;
            const userRef = firebase.firestore().collection('users').doc(userUid).collection('recipes');

            userRef.get()
                .then((querySnapshot) => {
                    const fetchedRecipes = [];
                    querySnapshot.forEach((doc) => {
                        fetchedRecipes.push({ id: doc.id, ...doc.data() });
                    });
                    setRecipes(fetchedRecipes);
                })
                .catch((error) => {
                    console.error('Error fetching user recipes:', error);
                });
        }
    }, []);

    return (
        <div>
            <Navbar />

            <h2>User Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <p>Title: {recipe.title}</p>
                        <img src={recipe.image} alt='food img'></img>

                        <p>Ingredient: {recipe.ingredientLines}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}