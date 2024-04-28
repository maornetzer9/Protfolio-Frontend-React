import { S3_CLOUD_URL } from "../../env"
import cache from "../../services/cache"

const GreetingsImage = `${S3_CLOUD_URL}images/Greetings-Section.png`

cache.set('image', GreetingsImage, 10000);
const cacheImage = cache.get('image');

export const PERSONAL = [
    {
        title: 'Greetings !',
        subTitle: 'I`m Maor Netzer,',
        text: 'a Passionate Full Stack Developer Based in Tel Aviv, Israel.',
        textButton: 'Get To Know Me',
        image: cacheImage ? cacheImage : GreetingsImage
    }
]