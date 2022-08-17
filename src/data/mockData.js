
export default {
    categories: [
        {
            title: 'Art',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 160,
            type: 'category'
        },
        {
            title: 'Music',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 160,
            type: 'category'
        },
        {
            title: 'Animal',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 160,
            type: 'category'
        },
        {
            title: 'Flowers',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 160,
            type: 'category'
        },
        {
            title: 'Trading Cards',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 160,
            type: 'category'
        },
    ],
    notableDrops: [
        {
            title: 'Gab\'s Beach Club',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 210,
            type: 'default'
        },
        {
            title: 'Refix Andol',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 210,
            type: 'default'
        },
        {
            title: 'Javier Mariscal',
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            size: 210,
            type: 'default'
        },
    ],
    users: [
        {
            title: 'Ariana Grande',
            username: "Weknowit",
            coverImage: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            avatar: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            verified: true
        },
        {
            title: 'adidas originals',
            username: "AdidasOriginals",
            coverImage: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            avatar: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            verified: false
        },
        {
            title: 'Decentralland',
            username: "decentralland",
            coverImage: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            avatar: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            verified: true
        },
        {
            title: 'iNFT Personality',
            username: "Alethea_AI",
            coverImage: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            avatar: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
            verified: false
        },
    ],
    nfts: [
        {
            user: {
                username: 'Decentraland',
                verified: true
            },
            title: 'Parcel 50,125',
            price: (Math.random() * 9 + 1).toFixed(6),
            likes: (Math.random() * 100 + 1).toFixed(0),
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
        },
        {
            user: {
                username: 'Danny Kass Art',
                verified: true
            },
            title: 'Trippy Wolf of Walstreet',
            price: (Math.random() * 9 + 1).toFixed(6),
            likes: (Math.random() * 100 + 1).toFixed(0),
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
        },
        {
            user: {
                username: 'CryptoPunk #1760',
                verified: true
            },
            title: 'Small #2224',
            price: (Math.random() * 9 + 1).toFixed(6),
            likes:(Math.random() * 100 + 1).toFixed(0),
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
        },
        {
            user: {
                username: 'Cyber Kitty',
                verified: true
            },
            title: 'Kitty #1212',
            price: (Math.random() * 9 + 1).toFixed(6),
            likes: (Math.random() * 100 + 1).toFixed(0),
            image: 'https://picsum.photos/200?random=' + (Math.random() * 9 + 1),
        },
        
    ]
}