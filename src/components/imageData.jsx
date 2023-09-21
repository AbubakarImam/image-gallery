// const getRandomImages = () => {
//     const randomImages = [];

//     for (let i = 0; i < 22; i++) {
//         const imageId = Math.floor(Math.random() * 1000);
//         const sig = i; // Unique signature for each image
//         const imageUrl = `https://source.unsplash.com/random/sig=${sig}`;
//         const randomTag = ['Nature', 'City', 'Abstract', 'Animals'][Math.floor(Math.random() * 4)];

//         randomImages.push({
//             id: imageId,
//             imageUrl: imageUrl,
//             tag: randomTag
//         });
//         console.log(imageUrl);
//     }

//     return randomImages;
// };

const imageData = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?...",
        tag: "Nature",
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?...",
        tag: "Animal",
    },
    {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1675410589547-cc3e77488188?...",
        tag: "City",
    },
    {
        id: 7,
        imageUrl: "https://images.unsplash.com/photo-1594538756542-8c88bda491c5?...",
        tag: "City",
    },
    {
        id: 8,
        imageUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?...",
        tag: "Animal",
    },
    {
        id: 11,
        imageUrl: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?...",
        tag: "Sport",
    },
    {
        id: 12,
        imageUrl: "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?...",
        tag: "Abstract",
    },
    {
        id: 13,
        imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?...",
        tag: "Sport",
    },
    // ...getRandomImages(), // Add 20 random images
];

export default imageData;
