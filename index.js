class HashMap {
    constructor() {
        this.areTypesSet = false;

        this._data_keys = [];
        this._data_values = [];
    }

    setRequiredTypes(type1, type2) {
        this.areTypesSet = true;
        this._type1 = type1.prototype;
        this._type2 = type2.prototype;
    }

    removeRequiredTypes() {
        this.areTypesSet = false;
        this._type1 = undefined;
        this._type2 = undefined;
    }

    put(key, value) {
        if(this.areTypesSet) {
            if(key.__proto__ == this._type1 && value.__proto__ == this._type2) {
                if(!this.keyExists(key)) {
                    this._data_keys.push(key)
                    this._data_values.push(value)
                }
                else {
                    this._data_values[this._data_keys.indexOf(key)] = value;
                }
            }
            else {
                console.error("The Provided key or value dosent have the required hashmap type!")
            }    
        }
        else {
            if(!this.keyExists(key)) {
                this._data_keys.push(key)
                this._data_values.push(value)
            }
            else {
                this._data_values[this._data_keys.indexOf(key)] = value;
            }
        }
    }

    clear() {
        this._data_keys = []
        this._data_values = []
    }

    get(key) {
        if(this._data_keys.includes(key)) {
            return this._data_values[this._data_keys.indexOf(key)]
        }
        else {
            return undefined;
        }
    }

    getAll() {
        let entries = []
        this._data_keys.forEach(key => {
            let entry = new HashMapEntry(key, this._data_values[this._data_keys.indexOf(key)])
            entries.push(entry)
        })
        return entries;
    }

    getAllInJson() {
        let entries = []
        this._data_keys.forEach(key => {
            let entry = new HashMapEntry(key, this._data_values[this._data_keys.indexOf(key)])
            entries.push(entry)
        })
        return JSON.parse(entries);
    }

    getKeys() {
        return this._data_keys;
    }

    getValues() {
        return this._data_values;
    }

    keyExists(key) {
        return this._data_keys.includes(key);
    }

    valueExists(value) {
        return this._data_values.includes(value);
    }
    
    
    
}

class HashMapEntry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {return this.key;}
    getValue() {return this.value;}
    json() {return JSON.parse({key: this.key, value: this.value})}
}