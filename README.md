# Hashmap.js
Hashmap.js is an Javascript lib to add Hashmaps to Javascript.

## Importing Hashmap.js

To import Hashmap.js you need to add it in your html file by using:
```html
<script src="https://cdn.zffu.ml/js/hashmap-js/1.0/Hashmap-js-1.0.js"></script>
```

## Using Hashmap.js
### Creating your Hashmap
You can create an Hashmap by making a new HashMap object instance:
```javascript
let myHashMap = new HashMap();
```

If you want you can specify specific required types for your HashMap:
```javascript
myHashMap.setRequiredTypes(String, Number);
```

If you want to remove the required types you can use
```javascript
myHashMap.removeRequiredTypes();
```

### Adding content to your Hashmap
To add content to your hashmap, you will need to use the put function:
```javascript
myHashMap.put(myKey, myValue);
```

### Removing content from your Hashmap
To clear every data that is in your Hashmap you can use the clear() function:
```javascript
myHashMap.clear();
```

### Getting Content from your Hashmap
You can get a value by using the get(key) function:
```javascript
let myValue = myHashMap.get(myKey);
```

You can also get every key that are in your hashmap by doing:
```javascript
let keys = myHashMap.getKeys();
```

You can also get every values that are in your hashmap by doing:
```javascript
let values = myHashMap.getValues();
```

If you need to get everything that is in your hashmap you can use:
```javascript
// Normal Format
let data = myHashMap.getAll();

// Json Format
let json = myHashMap.getAllInJson();
```

### Checking if the Hashmap contains a key or a value
You can check if your hashmap has an key or an value by using:
```javascript
// KEY
let doesKeyExists = myHashMap.keyExists(myKey);

// VALUE
let doesValueExists = myHashMap.valueExists(myValue);
```
