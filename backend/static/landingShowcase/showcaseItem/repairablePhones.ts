import type { LandingListing } from "../../../../src/types/types";
import iphone14img from '../../../assets/products/phones/apple_iphone14.png'
import samsungA52 from '../../../assets/products/phones/samsung_a52.png'
import crosscallCore from '../../../assets/products/phones/crosscall_core.png'
import fairphone4 from '../../../assets/products/phones/fairphone_4.png'
import redmiNote11 from '../../../assets/products/phones/redmi_note11.png'
import vivoV52 from '../../../assets/products/phones/vivo_y52.png'
import motorolaE13 from '../../../assets/products/phones/motorola_e13.png'

const repairablePhones: LandingListing[]=[
{
    title: 'Fairphone 4',
    repairScore: 9.2,
    image: fairphone4,
    url: '/product/fairphone-4'

},
{
    title: 'CROSSCALL Core M5/Z5/X5',
    repairScore: 8.8,
    image: crosscallCore,
    url: '/product/crosscall-core-m5-z5-x5'
},
{
    title: 'SAMSUNG Galaxy A52',
    repairScore: 8.2,
    image: samsungA52,
    url: '/product/samsung-galaxy-a52'
},

{
    title: 'VIVO V21/Y52/X80',
    repairScore: 8,
    image: vivoV52,
    url: '/product/vivo-v21-y52-x80'
},
{
    title: 'MOTOROLA E13',
    repairScore: 8,
    image: motorolaE13,
    url: '/product/motorola-e13'
},
{
    title: 'REDMI NOTE 11',
    repairScore: 7.8,
    image: redmiNote11,
    url: '/product/xiaomi-redmi-note-11'
},
{
    title: 'APPLE iPhone 14',
    repairScore: 6.9,
    image: iphone14img,
    url: '/product/apple-iphone-14'
},
{
    title: 'APPLE iPhone 14',
    repairScore: 6.9,
    image: iphone14img,
    url: '/product/apple-iphone-14'
},
{
    title: 'APPLE iPhone 14',
    repairScore: 6.9,
    image: iphone14img,
    url: '/product/apple-iphone-14'
}
]
export default repairablePhones