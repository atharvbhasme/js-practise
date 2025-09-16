# Memory Management in JS

## Things to Remeber

| Feature       | **Debouncing**                               | **Throttling**                         |
| ------------- | -------------------------------------------- | -------------------------------------- |
| **Purpose**   | Delay execution until activity stops         | Limit execution to once every X ms     |
| **Use case**  | Search inputs, resize events                 | Scroll, drag, resize, mouse move       |
| **Runs when** | After a pause                                | At fixed intervals during rapid events |
| **Example**   | Wait 500ms after last keypress before firing | Run scroll handler at most every 200ms |
| **Code tool** | `setTimeout`                                 | `setTimeout`, `Date.now()`             |
| **History**   | Only last call executes                      | Executes at regular intervals          |


 - what is garbage collection: JS automatically freeup memeory that programm no longer needed
- When you create objects, arrays, or functions, they are stored in memory (RAM).
As long as something in your code can still access them (they are "reachable"), they stay in memory.
When nothing refers to them anymore, they are considered unreachable.
- The garbage collector deletes unreachable objects automatically to free memory.
- GC use mark and sweep algo to free space: It marks object fro, global root that are reachable and sweep the places thare are not reachable


**to prevent memory leak and improve perforamce**
- Use local variables instead of globals
- Clear intervals and timeouts when no longer needed
- Remove event listeners when elements are removed
- Be careful with closures (don’t capture large objects unnecessarily)
- Use WeakMap / WeakSet for temporary object keys
- Use browser DevTools → Memory tab to check heap snapshots and detect leaks