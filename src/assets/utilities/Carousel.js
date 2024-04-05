import pacManSign from '../images/gallery/fulls/PacMan-Sign.png';
import pacManGame from '../images/gallery/fulls/PacMan-Game.png';
import NetflixSign from '../images/gallery/fulls/Netflix-Sign.png';
import NetflixAccounts from '../images/gallery/fulls/Netflix-Accounts-English.png';
import NetflixEnglish from '../images/gallery/fulls/Netflix-English.png';
import NetflixHebrew from '../images/gallery/fulls/Netflix-Hebrew.png';
import NetflixPopup from '../images/gallery/fulls/Netflix-Popup.png';


export const snapCraft = [ 
    {
        title: 'PacMan Sign',
        description: 'PacMan Game SignIn & SignUp',
        image: pacManSign
    },
    {
        title: 'PacMan',
        description: 'PacMan Game',
        image: pacManGame
    },
    {
        title: 'Netflix Sign',
        description: 'Netflix SignIn & SignUp',
        image: NetflixSign
    },
    {
        title: 'Netflix Accounts',
        description: 'Netflix Accounts',
        image: NetflixAccounts
    },
    {
        title: 'Netflix Home Page',
        description: 'Netflix Home Page Translate To English',
        image: NetflixEnglish
    },
    {
        title: 'Netflix Home Page',
        description: 'Netflix Home Page Translate To Hebrew',
        image: NetflixHebrew
    },
    {
        title: 'Netflix Popup',
        description: 'Netflix Movies Popup',
        image: NetflixPopup
    },
]

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#4c9cd4",
                padding: "20px 20px",
                borderRadius: "20px",
                opacity: 0.7,
                top: "65%",
                right: "25px",
            }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#4c9cd4",
                padding: "20px 20px",
                borderRadius: "20px",
                opacity: 0.7,
                top: "65%",
                left: "25px",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
}