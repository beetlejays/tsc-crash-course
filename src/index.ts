// Basic Types
let id: number = 5
let firm: string = "Cool Company"
let isPrinted: boolean = true
let anyDataType: any = "hello world"  // can be string, number, boolean

let ids: number[] = [1, 2, 3, 4, ]  // Array
let array: any[] = [2, "jake"]

// Tuple
let person: [number, string, boolean] = [1, "jake", true]  // has to be exact order and structure
// Tuple Array
let employee: [number, string][]  // array can have any combination

employee = [
    [1, "mike"],
    [2, "Jill"],
    [3, "Kimberly"]
]

// Union
let productId: string | number = 22  // "22" can be string or number

// Enum - enumberated types
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up = "Up",
    Down = "Down" ,
    Left = "Left",
    Right = "Right"
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "Jim"
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number,y: number): number {  // return has to be a number
    return x + y
}

// Void
function log(message: string | number): void {  //return anything
    console.log(message)
}

// Interface  //can not be used with primive or union, used with objects
interface UserInterface {
    readonly id: number,  // readonly property
    name: string
    age?: number  // "?" means is optional
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}

interface MathFunc {
    (x:number, y: number): number
}

// Interface with function
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
   id: number,  // readonly property
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
   id: number 
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}
const jeff = new Person(1, "Jeff Bridges")
const mike = new Person(2, "mike mentzer")

// Subclasses
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id,name)
        this.position = position
    }
}
const emp = new Employee(3, "Sean", "Developer")

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["john", "frank", "joe"])

