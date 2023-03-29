import { useRef, useEffect } from 'react';
import { useAppContext } from '../context';
import useElementOnScreen from './useElementOnScreen';

export const useActiveNav = (navLinkId) => {
    const ref = useRef(null)

    const { setActiveNavLinkId } = useAppContext()

    const tenBreakpointThreshold = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }
    const isOnScreen = useElementOnScreen(options, ref);

    useEffect(() => {
        if (isOnScreen) {
            setActiveNavLinkId(navLinkId);
        }
    }, [isOnScreen, setActiveNavLinkId, navLinkId]);

    return ref;
};