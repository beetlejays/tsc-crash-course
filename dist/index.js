"use strict";
// Basic Types
let id = 5;
let firm = "Cool Company";
let isPrinted = true;
let anyDataType = "hello world"; // can be string, number, boolean
let ids = [1, 2, 3, 4,]; // Array
let array = [2, "jake"];
// Tuple
let person = [1, "jake", true]; // has to be exact order and structure
// Tuple Array
let employee; // array can have any combination
employee = [
    [1, "mike"],
    [2, "Jill"],
    [3, "Kimberly"]
];
// Union
let productId = 22; // "22" can be string or number
// Enum - enumberated types
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Jim"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
