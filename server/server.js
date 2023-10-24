const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const axios = require('axios');
app.use(cors());


// const admin = require('firebase-admin');
// const serviceAccount = require('./config/firebase-adminsdk.json'); // Replace with your service account JSON file path
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: '"recipequest-29428.firebaseapp.com"' // Replace with your Firebase project's database URL
// });
// const firestore = admin.firestore();
// const recipesCollection = firestore.collection('recipes');


// app.get('/api/recipes', (req, res) => {
//     recipesCollection
//         .get()
//         .then((querySnapshot) => {
//             const recipes = [];
//             querySnapshot.forEach((doc) => {
//                 recipes.push(doc.data());
//             });
//             res.json(recipes);
//         })
//         .catch((error) => {
//             console.error('Error fetching recipes:', error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
// });

app.get('/api/edamam-recipes', (req, res) => {
    const appId = ''; // Replace with your Edamam API App ID
    const appKey = '';
    const query = req.query.q
    const requestLimit = 15

    // Define the Edamam API endpoint

    const edamamApiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${requestLimit}`;
    // Make a GET request to the Edamam API
    axios.get(edamamApiUrl)
        .then((response) => {
            const data = response.data;
            res.json(data);
        })
        .catch((error) => {
            console.error('Error fetching data from Edamam API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.get('/api/ingredient', (req, res) => {
    const appId = 'f0f96351'; // Replace with your Edamam API App ID
    const appKey = '82a7a7cb28fdd87b30467ceb334749b8';
    const query = req.query.q
    const requestLimit = 15

    const edamamApiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${requestLimit}`;

    axios.get(edamamApiUrl)
        .then((response) => {
            const data = response.data;
            res.json(data);
        })
        .catch((error) => {
            console.error('Error fetching data from Edamam API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.get('/api/cuisine', (req, res) => {
    const appId = 'f0f96351'; // Replace with your Edamam API App ID
    const appKey = '82a7a7cb28fdd87b30467ceb334749b8';
    const query = req.query.q
    const requestLimit = 15

    const edamamApiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${requestLimit}&random=${Math.random()}`;

    axios.get(edamamApiUrl)
        .then((response) => {
            const data = response.data;
            res.json(data);
        })
        .catch((error) => {
            console.error('Error fetching data from Edamam API:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});

