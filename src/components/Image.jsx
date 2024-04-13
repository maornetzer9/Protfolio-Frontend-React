import React from 'react';
import ImageModal from './Image-Modal/ImageModal';

export default function Image() {
    const imageUrl = 'https://elasticbeanstalk-us-east-1-851725376560.s3.amazonaws.com/assets/images/My-Goals.jpg';

    return (
        <div>
            <ImageModal preview={true} showIconPreview={true} url={imageUrl} />
        </div>
    );
}
