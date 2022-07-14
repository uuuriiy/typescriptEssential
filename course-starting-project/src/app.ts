// Generics

const names: Array<string> = ['Max', 'Yurii'] // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done')
    }, 1000)
})

// Constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2); 
}

const mergeObj = merge({name: 'Max'}, {age: 22});

console.log(mergeObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let describe = 'Got no value.';

    if (element.length) {
        describe = `Got ${element.length} elements`
    }
    
    return [element, describe]
}

console.log(countAndDescribe('Hi there'));

// keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: "Max"}, "name");

// Generic classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}