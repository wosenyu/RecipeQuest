import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button } from '@mui/material';
import Navbar from '../Components/navbar';
export default function userHome() {
    const handleLogout = () => {
        firebase.auth().signOut();
    };
    return (
        <div>

            <Navbar />
            <h2>Welcome</h2>
            <Button onClick={handleLogout}>Log Out</Button>
            Saved Recipe



        </div>
    )
}