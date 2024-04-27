class Cache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, ttl = 300000) {
        const expires = Date.now() + ttl;
        const item = { value, expires };
        localStorage.setItem(key, JSON.stringify(item));

        setTimeout(() => this.delete(key), ttl);
    }

    get(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);
        if (Date.now() > item.expires) {
            localStorage.removeItem(key);
            return null;
        }

        return item.value;
    }

    delete(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}

const cache = new Cache();


export default cache;