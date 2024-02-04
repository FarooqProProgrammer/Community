import { BuildingIcon, Caticon, FlowerIcon, WaveIcon } from "../Icon";


const generateRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }

    return randomId;
};



export const ServiceData = [
    {
        id: generateRandomId(),
        icon: BuildingIcon,
        Text: 'Family Support',
    },
    {
        id: generateRandomId(),
        icon: FlowerIcon,
        Text: 'Health Benefits',
    },
    {
        id: generateRandomId(),
        icon: WaveIcon,
        Text: 'Scholarships',
    },
    {
        id: generateRandomId(),
        icon: Caticon,
        Text: 'Therapy',
    },
]


export const FooterLinks = [
    {
        id: generateRandomId(),
        title: "Home",
        Links: [
            {
                id: generateRandomId(),
                link: 'About us'
            },
            {
                id: generateRandomId(),
                link: 'Team'
            },
            {
                id: generateRandomId(),
                link: 'What We do'
            },
            {
                id: generateRandomId(),
                link: 'Contact'
            },
        ]
    },
    {
        id: generateRandomId(),
        title: "More",
        Links: [
            {
                id: generateRandomId(),
                link: 'Projects'
            },
            {
                id: generateRandomId(),
                link: 'Events'
            },
            {
                id: generateRandomId(),
                link: 'Donate'
            },
            {
                id: generateRandomId(),
                link: 'Blog'
            },
        ]
    },
    {
        id: generateRandomId(),
        title: "Connect",
        Links: [
            {
                id: generateRandomId(),
                link: 'Facebook'
            },
            {
                id: generateRandomId(),
                link: 'Instagream'
            },
            {
                id: generateRandomId(),
                link: 'Twitter'
            },
            {
                id: generateRandomId(),
                link: 'Linkdn'
            },
        ]
    },
]