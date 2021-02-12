
import React, { useState } from "react";
import Routes from "../routes";
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../components/Navigation';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#C5DAD1',
        minHeight: '100vh',
        width: '100%',
        overflowY: 'auto'
    }
}));
const App = () => {
    const classes = useStyles();
    const [backgroundImage, setBackgroundImage] = useState('C5DAD1');
    return (
        <div className={classes.root}
            style={{
                backgroundColor: backgroundImage,
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <Navigation setBackgroundImage={setBackgroundImage} />
            <Routes />;
        </div>
    )
}

export default App;