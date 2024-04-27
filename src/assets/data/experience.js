// Image from S3 Cloud 
import { S3_CLOUD_URL } from "../../env";

const tingGlobal = `${S3_CLOUD_URL}images/Ting-Global.png`


/**
 * @typedef  { Object } Experience
 * @property { string } image - The relative path to the image.
 * @property { string } title - A brief title to describing the section.
 * @property { string } textButton - Label text for the button.
 * @property { Object, < string > } steps - An Object that contain my steps of working experience. 
 */

/**
 *  @type { Experience [] } - Contains data for the experience sections.
 */


// Data of experience section
export const EXPERIENCE = [
    {
        title: 'Working Experience',
        textButton: 'Next Section',
        image: tingGlobal,
        steps: 
        {
            one: 'I Contributed as a FullStack Developer, managing both frontend and backend development responsibilities.',
            two: 'Integrated ChatGPT with WhatsApp groups, enhancing user engagement by providing random questions.',
            three: 'Developed a frontend explanation page that seamlessly integrates with Facebook, ensuring a user-friendly.',
            four: 'Created Challenges Group, integrating with Telegram groups, promoting user participation and interaction.'
        }
    }
];