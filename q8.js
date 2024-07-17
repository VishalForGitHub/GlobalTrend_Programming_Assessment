class HashMap {
    constructor(size = 16) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    // Helper function to generate a hash code for a key
    hashCode(key) {
        if (typeof key === 'string') {
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash = (hash << 5) - hash + key.charCodeAt(i);
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        } else if (typeof key === 'number') {
            return key;
        } else {
            throw new Error('Unsupported key type');
        }
    }

    // Method to put a key-value pair into the map
    put(key, value) {
        const hashCode = this.hashCode(key);
        const index = hashCode % this.size;
        const bucket = this.buckets[index];

        // Check if key already exists and update the value if so
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }

        // Key doesn't exist, add new entry
        bucket.push({ key, value });
    }

    // Method to get the value associated with a key
    get(key) {
        const hashCode = this.hashCode(key);
        const index = hashCode % this.size;
        const bucket = this.buckets[index];

        // Search for the key in the bucket
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }

        return undefined; // Key not found
    }

    // Method to remove a key-value pair from the map
    remove(key) {
        const hashCode = this.hashCode(key);
        const index = hashCode % this.size;
        const bucket = this.buckets[index];

        // Search for the key in the bucket and remove it
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

// Example usage:
const map = new HashMap();

map.put("key1", "value1");
map.put("key2", "value2");
map.put("key3", "value3");

console.log(map.get("key2")); // Output: "value2"

map.remove("key3");
console.log(map.get("key3")); // Output: undefined
