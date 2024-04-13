import React, { useEffect, useState } from "react";
import { ImageListItem, Box, Button } from "@mui/material";
import { MdOutlinePreview } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { LuSearchSlash } from "react-icons/lu";

const ImageModal = ({ url, preview = false, styles = {}, showIconPreview = true, id, alt }) => {
    const [isPreview, setIsPreview] = useState(false);
    const [isHoverPreview, setIsHoverPreview] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [size, setSize] = useState(300);

    const setHoverPreviewEnter = () => setIsHoverPreview(true)
    const setHoverPreviewLeave = () => setIsHoverPreview(false)
    const handleTogglePreview = () =>  setIsPreview(!isPreview);

    const handleRightRotatePreview = (e) => {
        e.stopPropagation();
        setRotate(rotate => rotate === 270 ? 0 : rotate + 90);
    };

    const handleLeftRotatePreview = (e) => {
        e.stopPropagation();
        setRotate(rotate => rotate === 0 ? 270 : rotate - 90);
    };

    const zoomIn = (e) => {
        e.stopPropagation();
        setSize(size => size === 750 ? size : size + 150);
    };

    const zoomOut = (e) => {
        e.stopPropagation();
        setSize(size => size === 150 ? size : size - 150);
    };


    useEffect(() => {
        setSize(300);
        setRotate(0);
    }, [isPreview]);

    return (
        <>
            <Box
                onMouseEnter={setHoverPreviewEnter}
                onMouseLeave={setHoverPreviewLeave}
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    cursor: preview ? 'pointer' : 'auto',
                }}>

                <ImageListItem
                    sx={{
                        height: '100%',
                        opacity: 1,
                        display: 'block',
                    }}
                    onClick={() => setIsPreview(true)}>
                    <img
                        id={id}
                        src={url}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            ...styles,
                        }} />
                    {isHoverPreview && preview && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                                zIndex: 1, 
                            }}>
                            <MdOutlinePreview style={{ fontSize: '50px', color: '#fff', display: showIconPreview ? 'block' : 'none' }} />
                        </Box>
                    )}
                </ImageListItem>
            </Box>

            {isPreview && (
                <Box
                    component="div"
                    onClick={handleTogglePreview}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1400, // Ensure this covers everything else
                        cursor: 'pointer',
                    }}>
                    <ImageListItem
                        sx={{
                            userSelect: 'none',
                            width: size + 'px',
                            height: 'auto',
                            position: 'absolute',
                            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                            top: '50%',
                            left: '50%',
                            zIndex: 2,
                            cursor: 'auto',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <img src={url} alt={alt} />
                    </ImageListItem>

                    <Box
                        onClick={e => e.stopPropagation()}
                        sx={{
                            padding: '30px',
                            width: '300px',
                            position: 'absolute',
                            top: '85%',
                            left: '50%',
                            transform: 'translate(-50%)',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Button onClick={zoomIn} disabled={size === 750}><LiaSearchPlusSolid /></Button>
                        <Button onClick={zoomOut} disabled={size === 150}><LuSearchSlash /></Button>
                        <Button onClick={handleLeftRotatePreview} disabled={rotate === 0}><FaArrowRotateLeft /></Button>
                        <Button onClick={handleRightRotatePreview} disabled={rotate === 270}><FaArrowRotateRight /></Button>
                    </Box>
                    
                </Box>
            )}
        </>
    );
}

export default ImageModal;