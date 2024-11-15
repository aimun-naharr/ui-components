'use client'
const useDimension = () => {
    const window = {
        height: window.innerHeight,
        width: window.innerWidth
    }
    return window;
};

export default useDimension;