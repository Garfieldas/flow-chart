export const createRandomImage = (image) => {
    image.setAttribute('src', `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`);
}