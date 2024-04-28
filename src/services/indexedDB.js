// src/services/cache.js
import { openDB } from 'idb';

const dbPromise = openDB('imageCacheDB', 1, {
    upgrade(db) 
    {
        if (!db.objectStoreNames.contains('images')) 
        {
            db.createObjectStore('images', { keyPath: 'url' });
        }
    },
});

async function setBlob(url, blob) {
    const db = await dbPromise;
    const tx = db.transaction('images', 'readwrite');
    await tx.store.put({ url, blob });
    await tx.done;
}

async function getBlob(url) {
    const db = await dbPromise;
    const tx = db.transaction('images', 'readonly');
    const entry = await tx.store.get(url);
    return entry ? URL.createObjectURL(entry.blob) : null;
}


export { setBlob, getBlob }