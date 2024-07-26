'use client';

import { createPageSession } from '@/firebase/actions/create-page-session';
import Hotjar from '@hotjar/browser';
import { useEffect } from "react";

const siteId = 5074119;
const hotjarVersion = 6;
let initialized = false;

export default function HotjarLoader() {
    useEffect(() => {
        if (initialized) return;
        Hotjar.init(siteId, hotjarVersion);
        createPageSession(document.URL);
        initialized = true;
    }, []);
    
    return (
        <data style={{ display: 'none' }}>
            HJ Loaded
        </data>
    );
}