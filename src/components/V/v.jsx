import VideoRedirect from '../VideoRedirect/VideoRedirect'

const VideoPage = () => {
    const videoSrc = '/video/bannerUz.mp4'; // Укажите путь к вашему видео
    const redirectUrl = 'https://aloqamuzeyi.uz/'; // Укажите URL, на который нужно перенаправить пользователя

    return (
        <div>
            <h1>Watch this video</h1>
            <VideoRedirect videoSrc={videoSrc} redirectUrl={redirectUrl} />
        </div>
    );
};

export default VideoPage;