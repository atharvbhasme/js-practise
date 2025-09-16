// what is garbage collection: JS automatically freeup memeory that programm no longer needed
// When you create objects, arrays, or functions, they are stored in memory (RAM).
// As long as something in your code can still access them (they are "reachable"), they stay in memory.
// When nothing refers to them anymore, they are considered unreachable.
// The garbage collector deletes unreachable objects automatically to free memory.
// GC use mark and sweep algo to free space: It marks object fro, global root that are reachable and sweep the places thare are not reachable
// to prevent memory leak and improve perforamce
// Use local variables instead of globals
// Clear intervals and timeouts when no longer needed
// Remove event listeners when elements are removed
// Be careful with closures (don’t capture large objects unnecessarily)
// Use WeakMap / WeakSet for temporary object keys
// Use browser DevTools → Memory tab to check heap snapshots and detect leaks




//example of garbage collector
let user = {
    name: "Atharv"
} //user reffer to object in memery

user = null //not reffering to anyone
//garbage collector will free up the space