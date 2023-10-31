import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

// returns square image
const getRandomImage = async (width) => {
    const image = await axios.get(`https://picsum.photos/${width}`);
    return image;
};

export default function InfiniteScroll() {
    const [isLoading, setIsLoading] = useState(false);
    const [key, setKey] = useState(1);

    const totalImages = 5;

    const handleScroll = () => {
        const reachedBottom = window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight;
        if (!reachedBottom || isLoading) {
            return;
        } else {
            setKey(k => (k + 1) % 2);
            console.log("scrolled!");
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
        <>
            <Head>
                <title>Infinite Scroll</title>
                <link rel="icon" type="image/svg+xml" href="/infiniteScroll.svg" />
            </Head>

            <main key={key}>
                <img src='https://picsum.photos/500' key={key} />
                <img src='https://picsum.photos/500' />
                <img src='https://picsum.photos/500' />
                <img src='https://picsum.photos/500' />
            </main >
        </>
    );
}
