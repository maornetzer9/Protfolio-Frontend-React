import { BASE_URL } from '../mixins/s3Generator'

// Image From S3 Cloud
const goals = `${BASE_URL}images/My-Goals.jpg`

/**
 * @typedef { Object } Goal
 * @property { string } image - The relative path to the image.
 * @property { string } title - A brief title to describing the section.
 * @property { string } textButton - Label text for the button.
 * @property { string } text - A description of my goals.   
 */

/**
 *  @type { Goal [] }
 */

export const GOALS = [
    { 
        image: goals ,
        title: 'My Goals in Life',
        textButton: 'Next Section',
        text: 'My overarching goal in life is to give my best every day, whether it`s in my work, family, friendships, or personal endeavors. I firmly believe that excellence in every aspect of life is more than enough to lead a fulfilling and meaningful existence.',
    },


]