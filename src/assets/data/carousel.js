// S3 Cloud Base Url
import { S3_CLOUD_URL } from "../../env";
import cache from "../../services/cache";
// Images

const pacManSign = `${S3_CLOUD_URL}images/gallery/fulls/PacMan-Sign.png`;
const pacManGame = `${S3_CLOUD_URL}images/gallery/fulls/PacMan-Game.png`;
const NetflixSign = `${S3_CLOUD_URL}images/gallery/fulls/Netflix-Sign.png`;
const NetflixAccounts = `${S3_CLOUD_URL}images/gallery/fulls/Netflix-Accounts-English.png`;
const TicTacToe = `${S3_CLOUD_URL}images/gallery/fulls/Tic-Tac-Toe.png`;
const NetflixEnglish = `${S3_CLOUD_URL}images/gallery/fulls/Netflix-English.png`;
const NetflixHebrew = `${S3_CLOUD_URL}images/gallery/fulls/Netflix-Hebrew.png`;
const NetflixPopup = `${S3_CLOUD_URL}images/gallery/fulls/Netflix-Popup.png`;

// Videos
const DemoECommerceDesktop = `${S3_CLOUD_URL}videos/Demo-E-Commerce-Desktop.mp4`;
const DemoECommerceMobile = `${S3_CLOUD_URL}videos/Demo-E-Commerce-Mobile.mp4`;
const DemoTrainerDesktop = `${S3_CLOUD_URL}videos/Demo-Trainer-Desktop.mp4`;
const DemoTrainerMobile = `${S3_CLOUD_URL}videos/Demo-Trainer-Mobile.mp4`;
const PortfolioMobile = `${S3_CLOUD_URL}videos/Portfolio-Mobile.mp4`;

// Images
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

// Videos
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
    {
        title: 'Portfolio Mobile',
        src: PortfolioMobile 
    },
];

// Scroller Settings
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

// Arrow Right Settings
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

// Arrow Left Settings
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