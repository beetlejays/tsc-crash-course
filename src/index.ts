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

