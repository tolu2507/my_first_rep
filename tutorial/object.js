const blog = [
    {title : 'thre', likes : 100},
    {title : 'desa', likes : 500}
]
let user = {
    name : 'tolu',
    age : 30,
    email : 'tolu@gmail.com',
    blog : [
        {title : 'thre', likes : 100},
        {title : 'desa', likes : 500}
    ], 
    login : function() {
        console.log("welcome");
    },
    logout : function() {
        console.log("bye");
    },
    logBlogs: function() {
        console.log("this user has this blogs:");
        this.blog.forEach(blo => {
            console.log(blo.title, blo.likes);
        })

    }
}
user.login()
user.logout()
user.logBlogs()

class Rectangle{

    constructor( width, height, color){
        console.log("created");
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea(){
        return this.width * this.height
    }
    printDes(){
        console.log(`I am a rectangle of width ${this.width}m, and i have a height of ${this.height}m, and my area is ${this.getArea()}m, dont forget i am ${this.color} in color`);
    }
}
let myRectangle = new Rectangle(5, 6, "black");
myRectangle.printDes();

class Square{
    constructor(width){
        this.width = width;
        this.height = this.width;
        this.count = 0;
        this.nSet = 0;
    }

    get area(){
        this.count++
        console.log(this.width * this.height);
    }

    set area(area){
        this.nSet++
        this.width = Math.sqrt(area);
        this.height = this.width
    }
}

let newSquare = new Square (4);
console.log(newSquare)
newSquare.area
newSquare.area = 144;
console.log(newSquare)
newSquare.area
newSquare.area
newSquare.area
newSquare.area

console.log(newSquare.count);
console.log(newSquare.nSet);


class Squuare{
    constructor(_width){
        this.width = _width;
        this.height = this.width;
        this.count = 0;
        this.nSet = 0;
    }

    static equals(a, b){
        console.log(a.width * a.height === b.width * b.height);
    }

    static isValidDimension(width, height){
        console.log(width === height);
    }
}

let newSquar = new Squuare (8);
let newSquared = new Squuare (4);
Squuare.equals(newSquar, newSquared)
Squuare.isValidDimension(12, 76);
Squuare.isValidDimension(13, 13);
Squuare.isValidDimension(11, 76);
Squuare.isValidDimension(15, 15);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    describe(){
        console.log(`i am ${this.name} and i am ${this.age} years old.`);
    }
}

class Prorammers extends Person {
    constructor(name, age, yearsOfExperience){
        super(name, age);
        this.yearsOfExperience = yearsOfExperience;
    }

    code(){
        console.log(`${this.name} is coding`);
    }
}
let person1 = new Person( 'Tolu', 23);
let programmer1 = new Prorammers( 'Tolu', 23, 2);
person1.describe();
programmer1.describe();
programmer1.code();
console.log(person1, programmer1);

const programmers = [
    new Prorammers( 'Tolu', 23, 2),
    new Prorammers( 'olu', 53, 22),
    new Prorammers( 'Tayo', 33, 1)
];

function developSoftware(programmers) {
    for (let programmer of programmers) {
        console.log(programmer);
        programmer.code();
    }
}
developSoftware(programmers)

class Animal {
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log('generic animal sound!!!');
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    makeSound(){
        super.makeSound()
        console.log('bark!!!');
    }
}
let dog1 = new Dog( 'olu');
dog1.makeSound()


//palliendrome;

let stack = [];
let word = 'steriotype';
let rword = '';

for (let i = 0; i < word.length; i++) {
    stack.push(word[i])   
}
console.log(stack);
for (let i = 0; i < word.length; i++) {
    rword += stack.pop()  
}
console.log(rword);
if (word === rword) {
    console.log(word + ' is a palindrome');
} else {
    console.log(word + ' is not a palindrome');
};

let Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if (this.count === 0) {
            console.log(undefined);
        };
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        console.log(result);
    }

    this.size = function() {
        console.log(this.count);
    }

    this.peek = function() {
        console.log(this.storage[this.count-1]);
    }
};

let myStack = new Stack();
myStack.push(20);
myStack.push(2);
myStack.push(1);
myStack.push(11);
myStack.size();
myStack.peek();
myStack.pop();
myStack.size();

function mySet() {
    let collection = [];

    this.has = function(element) {
        console.log(collection.indexOf(element) !== -1);
    }

    this.values = function() {
        console.log(collection);
    }

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            console.log(true);
        }
        console.log(false);
    };

    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            console.log(true);
        }
        console.log(false);
    }

    this.size = function() {
        console.log(collection.length);
    }

    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values()
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    this.subSet = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }
};

function PriorityQueue() {
    var collection = [];
    this.printCollection = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element)
        }else{
            var added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0]
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['trefgr', 2]);
pq.enqueue(['trefgkhtr', 1]);
pq.enqueue(['trejbffgr', 4]);
pq.enqueue(['tvgdfdrefgr', 3]);
pq.enqueue(['trbcvefgrnb', 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection()

class Node {
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
               if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                }else if (node.left !== null) {
                    return searchTree(node.left);
                }
               } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                }else if (node.right !== null) {
                    return searchTree(node.right)
                } 
               } else {
                    return null
                }
            };
            return searchTree(node);
        }
    }

    findMin(){
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null
            }
        }
        return current;
    }

    isPresent(data){
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data){
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                if (node.left == null && node.right == null) {
                    return null;
                }

                if (node.left == null) {
                    return node.right
                }

                if (node.right == null) {
                    return node.left;
                }

                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.right;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node
            }else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node
            }else{
                node.right = removeNode(node.right, data);
                return node
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7)
console.log(bst.findMax());
console.log(bst.isPresent(4));
console.log(bst);

//stopwatch

class stopWatch{
    constructor(){
        this.running = false;
        this.start = 0;
        this.stop = 0;
        this.timeElapsed = 0;
        this.reset;
    }
    staRt(){
        if (this.running === true) {
            console.log("already started");
        }else{
        this.running = true
        this.start = new Date();
        let second = this.start.getHours() + ':' + this.start.getMinutes() + ':' + this.start.getSeconds()
        console.log(second);
    }
    }
    stOp(){
        if (this.running === false || this.start === 0) {
            console.log("error");
        }else{
        this.running = false
        this.stop = new Date();
        let seconds = (this.stop.getTime()-this.start.getTime())/1000;
        this.timeElapsed += seconds;
        let second = this.stop.getHours() + ':' + this.stop.getMinutes() + ':' + this.stop.getSeconds()
        console.log(second);
    }
    }
    reSet(){
        this.running = false;
        this.start = 0;
        this.stop = 0;
        this.reset = console.log(`i have been reset by Tolu`);
        this.timeElapsed = 0;
    }
    get Duration(){
        console.log(this.timeElapsed);
    }
}



const sp1 = new stopWatch();


// let stop = new Date();
// let date = stop.getHours() + ':' + stop.getMinutes() + ':' + stop.getSeconds()
// console.log(date)
// getHour(stop)