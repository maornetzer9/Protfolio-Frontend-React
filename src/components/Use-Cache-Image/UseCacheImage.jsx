import { useEffect, useState } from 'react';
import { setBlob, getBlob } from '../../services/indexedDB';
import Loading from '../Loading/Loading';


const useCachedImage = (src) => {

    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        async function fetchOrCacheImage() {
            setLoading(true);
            const cachedUrl = await getBlob(src);

            if (cachedUrl) 
            {
                setImageUrl(cachedUrl);
                setLoading(false);
            } 
            else 
            {
                try 
                {
                    const response = await fetch(src);
                    if (!response.ok) 
                    {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const blob = await response.blob();
                    await setBlob(src, blob);
                    const url = URL.createObjectURL(blob);
                    setImageUrl(url);

                } 
                catch (error) 
                {
                    console.error('Failed to load image:', error);
                } 
                finally 
                {
                    setLoading(false);
                }
            }
        }

        fetchOrCacheImage();

        return () => {
            // Clean up the blob URL to avoid memory leaks
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
        // eslint-disable-next-line
    }, [src]);

    return { imageUrl, loading };
};



export const CacheImageModal = ({ src, alt, className }) => {
    const { imageUrl, loading } = useCachedImage(src);

    if( loading ) return <Loading/>


    return <img src={imageUrl || 'default-placeholder.png'} alt={alt}  className={className} loading="lazy" />;
};


export default useCachedImage;