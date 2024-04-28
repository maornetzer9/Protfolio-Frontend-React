import useCacheImage from "../../hooks/UseCacheImage";
import Loading from "../Loading/Loading";

export const CacheImageModal = ({ src, alt, className }) => {
    const { imageUrl, loading } = useCacheImage(src);

    if( loading ) return <Loading/>


    return <img src={imageUrl || 'default-placeholder.png'} alt={alt}  className={className} loading="lazy" />;
};
