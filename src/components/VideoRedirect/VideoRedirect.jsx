import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const VideoRedirect = ({ videoSrc, redirectUrl }) => {
    const videoRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const handleVideoEnd = () => {
            router.push(redirectUrl);
        };

        // const videoElement = videoRef.current;
        // videoElement.addEventListener('ended', handleVideoEnd);

        // return () => {
        //     videoElement.removeEventListener('ended', handleVideoEnd);
        // };
    }, [redirectUrl, router]);


    useEffect(() => {
        console.log('video',videoRef)
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error('Error attempting to play', error);
                // Handle error if needed (e.g., inform the user)
            });
        }
    }, []);


    return (
        <video ref={videoRef} controls={false} key={videoSrc} autoPlay>
            <source src={videoSrc} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
        </video>
    );
};

export default VideoRedirect;