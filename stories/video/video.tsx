import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface VideoEmbedProps {
    url: string;
    height: string;
}

export const VideoEmbed = ({ url, height }: VideoEmbedProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <ReactPlayer
                    url={url}
                    playing={true}
                    loop={true}
                    height={height}
                    muted={true}
                    width='100%'
                    playsinline
                />
            )}
        </>
    );
}

export default VideoEmbed;
