import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Link,
    IconButton,
    Divider,
    Modal,
    Button,
    Alert,
    AlertTitle
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const RecipeCard = ({ title, cuisineType, ingredientLines, image, url }) => {

    const [open, setOpen] = React.useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showRecipeSaved, setShowRecipeSaved] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSaveRecipe = () => {
        const user = firebase.auth().currentUser;

        if (!user) {
            setShowAlert(true);
        } else {
            setShowRecipeSaved(true);

            const db = firebase.firestore();
            const recipeRef = db.collection('users').doc(user.uid).collection('recipes');

            recipeRef
                .add({
                    title,
                    image,
                    cuisineType,
                    ingredientLines,
                    url,
                })
                .then((docRef) => {
                    console.log('Recipe saved with ID:', docRef.id);
                })
                .catch((error) => {
                    console.error('Error adding recipe:', error);
                });
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    const handleCloseRecipeSavedAlert = () => {
        setShowRecipeSaved(false);
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={1} m={3} width="300px" bgcolor="background.paper">
            <Card style={{ height: '520px', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" height="200" image={image} alt={title} />
                <CardContent style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6">{title}</Typography>
                    <br />
                    <Typography variant="body1">
                        Cuisine Type: {cuisineType && cuisineType.length > 0
                            ? cuisineType[0].toUpperCase() + cuisineType.slice(1)
                            : "N/A"}
                    </Typography>
                    <div style={{ marginTop: 'auto' }}>

                        {showAlert && (
                            <Alert severity="info" onClose={handleCloseAlert}>
                                <AlertTitle>Info</AlertTitle>
                                Please{' '}
                                <Link href="/signin" variant="body2" >
                                    log in
                                </Link>{' '}
                                to save the recipe.
                            </Alert>
                        )}
                        {showRecipeSaved && (
                            <Alert severity="success" onClose={handleCloseRecipeSavedAlert}>
                                <AlertTitle>Success</AlertTitle>
                                Recipe saved!{' '}
                                Check out recipe at {' '} <br />
                                <Link href="/userhome" variant="body2" >
                                    User Home
                                </Link>

                            </Alert>
                        )}
                        <IconButton>
                            <FavoriteIcon color="secondary" sx={{ ":hover": { bgcolor: "#432818" } }} onClick={handleSaveRecipe} />
                        </IconButton>
                        <Button variant="contained" sx={{ margin: '10px', ":hover": { bgcolor: "#bb9457" } }} onClick={handleOpen}>
                            Open Recipe
                        </Button>
                        <Button variant="outlined" color='primary' sx={{ margin: '10px', ":hover": { bgcolor: "#bb9457" } }} onClick={handleSaveRecipe}>
                            save
                        </Button>
                        {/* <IconButton>
                            <FavoriteIcon color="secondary" sx={{ ":hover": { bgcolor: "#432818" } }} onClick={handleSaveRecipe} />
                        </IconButton> */}
                        {/* <IconButton>
                            <ShareIcon color="secondary" sx={{ ":hover": { bgcolor: "#432818" } }} />
                        </IconButton> */}
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography variant="body2">
                                Instructions: <Link href={url} target="_blank" rel="noopener noreferrer">Recipe Link</Link>
                            </Typography>
                            <Typography variant="h6">{title}</Typography>
                            <br />
                            <Typography variant="h6">Ingredients</Typography>
                            <Divider />
                            <List>
                                {ingredientLines && ingredientLines.length > 0 ? (
                                    ingredientLines.map((instruction, i) => (
                                        <ListItem key={i}>
                                            <ChevronRightIcon />
                                            <ListItemText
                                                primary={<Typography variant="body2">{instruction}</Typography>}
                                                disableTypography
                                            />
                                        </ListItem>
                                    ))
                                ) : (
                                    <ListItem>
                                        <ListItemText primary="No instructions available." />
                                    </ListItem>
                                )}
                            </List>
                        </Box>
                    </Modal>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecipeCard;