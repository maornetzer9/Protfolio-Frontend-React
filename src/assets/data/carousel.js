import pacManSign from '../images/gallery/fulls/PacMan-Sign.png';
import pacManGame from '../images/gallery/fulls/PacMan-Game.png';
import NetflixSign from '../images/gallery/fulls/Netflix-Sign.png';
import NetflixAccounts from '../images/gallery/fulls/Netflix-Accounts-English.png';
import TicTacToe from '../images/gallery/fulls/Tic-Tac-Toe.png';
import NetflixEnglish from '../images/gallery/fulls/Netflix-English.png';
import NetflixHebrew from '../images/gallery/fulls/Netflix-Hebrew.png';
import NetflixPopup from '../images/gallery/fulls/Netflix-Popup.png';

import DemoECommerceDesktop from '../videos/Demo-E-Commerce-Desktop.mp4'
import DemoECommerceMobile from '../videos/Demo-E-Commerce-Mobile.mp4'
import DemoTrainerDesktop from '../videos/Demo-Trainer-Desktop.mp4'
import DemoTrainerMobile from '../videos/Demo-Trainer-Mobile.mp4'


export const snapCraftImage = [ 
    {
        title: 'Tic-Tac-Toe',
        description: 'PacMan Game SignIn & SignUp',
        src: TicTacToe
    },
    {
        title: 'PacMan Sign',
        description: 'PacMan Game SignIn & SignUp',
        src: pacManSign
    },
    {
        title: 'PacMan',
        description: 'PacMan Game',
        src: pacManGame
    },
    {
        title: 'Netflix Sign',
        description: 'Netflix SignIn & SignUp',
        src: NetflixSign
    },
    {
        title: 'Netflix Accounts',
        description: 'Netflix Accounts',
        src: NetflixAccounts
    },
    {
        title: 'Netflix Home Page',
        description: 'Netflix Home Page Translate To English',
        src: NetflixEnglish
    },
    {
        title: 'Netflix Home Page',
        description: 'Netflix Home Page Translate To Hebrew',
        src: NetflixHebrew
    },
    {
        title: 'Netflix Popup',
        description: 'Netflix Movies Popup',
        src: NetflixPopup
    },
]

export const snapCraftVideo = [
    {
        title: 'Landing Page E-Commerce Desktop',
        src: DemoECommerceDesktop 
    },
    {
        title: 'Landing Page E-Commerce Mobile',
        src: DemoECommerceMobile 
    },
    {
        title: 'Landing Page Trainer Desktop',
        src: DemoTrainerDesktop 
    },
    {
        title: 'Landing Page Trainer Mobile',
        src: DemoTrainerMobile 
    },
];

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
                padding: "10px 10px",
                borderRadius: "20px",
                opacity: 0.7,
                top: "60%",
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
                padding: "10px 10px",
                borderRadius: "20px",
                opacity: 0.7,
                top: "60%",
                left: "25px",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
}