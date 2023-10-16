import React, { useState } from 'react';
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
    Button
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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



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
                        <Button variant="contained" sx={{ margin: '10px', ":hover": { bgcolor: "#bb9457" } }} onClick={handleOpen}>
                            Open Recipe
                        </Button>
                        <IconButton>
                            <FavoriteIcon color="secondary" sx={{ ":hover": { bgcolor: "#432818" } }} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon color="secondary" sx={{ ":hover": { bgcolor: "#432818" } }} />
                        </IconButton>
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
                            <Divider dark />
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