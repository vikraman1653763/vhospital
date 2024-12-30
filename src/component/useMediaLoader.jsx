import { useState, useEffect } from 'react';

const useMediaLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaElements, setMediaElements] = useState([]);

  useEffect(() => {
    // Select all images and videos on the page
    const images = Array.from(document.querySelectorAll('img'));
    const videos = Array.from(document.querySelectorAll('video'));

    // Combine both images and videos into one array
    const allMedia = [...images, ...videos];
    setMediaElements(allMedia);

    // Create an array of promises to track media loading
    const promises = allMedia.map((media) => {
      return new Promise((resolve) => {
        if (media.tagName === 'IMG') {
          media.onload = resolve;
          media.onerror = resolve;
        } else if (media.tagName === 'VIDEO') {
          media.onloadeddata = resolve;
          media.onerror = resolve;
        }
      });
    });

    // Wait for all media to be loaded
    Promise.all(promises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return isLoaded;
};

export default useMediaLoader;
