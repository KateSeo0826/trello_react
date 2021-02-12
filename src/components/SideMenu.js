import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../Utils/color';
import { getImages } from '../Utils/imageApi';
import colorBG from '../assets/img/color.JPG';
import macaronBG from '../assets/img/macaronBG.jpg'
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '400px',
    },
    menu: {
        display: 'flex',
        marginTop: theme.spacing(2),
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    optionContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: theme.spacing(2),
    },
    box: {
        width: '45%',
        height: '90px',
        backgroundColor: 'blue',
        borderRadius: '9px',
        marginBottom: theme.spacing(2)
    }
}));

export default function SideMenu({ setOpenSideMenu, openSideMenu, setNewBgImage }) {
    const classes = useStyles();
    const [openOptionColor, setOpenOptionColor] = useState(false);
    const [openOptionImage, setOpenOptionImage] = useState(false);
    const [images, setImage] = useState([]);

    const getListOfImage = async () => {
        const listOfImages = await getImages();
        setImage(listOfImages);
    };
    useEffect(() => {
        getListOfImage()
    }, []);
    return (
        <div>
            <Drawer
                open={openSideMenu}
                anchor='right'
                onClose={() => setOpenSideMenu(false)}
            >
                <div className={classes.drawer}>
                    <div className={classes.menu}>
                        <div className={classes.box}
                            style={{
                                backgroundImage:
                                    `url(${macaronBG})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                            onClick={() => {
                                setOpenOptionImage(true);
                                setOpenOptionColor(false);
                            }}
                        ></div>
                        <div className={classes.box}
                            style={{
                                backgroundImage:
                                    `url(${colorBG})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                            onClick={() => {
                                setOpenOptionColor(true)
                                setOpenOptionImage(false);
                            }}
                        ></div>
                    </div>

                    {openOptionImage ? (
                        <Grow in={openOptionImage}>
                            <div className={classes.optionContainer}>
                                {images.map((image, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={classes.box}
                                            style={{
                                                backgroundImage: `url(${image.thumb})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            }}
                                            onClick={() => setNewBgImage(image.url)}
                                        ></div>
                                    );
                                })}
                            </div>
                        </Grow>
                    ) : (
                            <Grow in={openOptionColor}>
                                <div className={classes.optionContainer}>
                                    {colors.map((color, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={classes.box}
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                                onClick={() => setNewBgImage(color)}
                                            ></div>
                                        );
                                    })}
                                </div>
                            </Grow>
                        )}
                </div>
            </Drawer>
        </div>
    );
}

