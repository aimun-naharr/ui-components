'use client'
import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const useMouse = () => {
    const mouse = {
        x: useMotionValue( null ),
        y: useMotionValue( null ),
    }

    useEffect( () => {
        window.addEventListener( 'mousemove', ( dets ) => {
            mouse.x.set( dets.clientX )
            mouse.y.set( dets.clientY )
        } )
    }, [] )
    return mouse;
};

export default useMouse;