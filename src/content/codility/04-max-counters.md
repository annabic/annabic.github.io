---
title: "Max Counters"
section: "Lesson 4: Counting Elements"
tags: ["Counting Elements", "Medium"]
difficulty: "Medium"
description: "Calculate the values of counters after applying all alternating operations"
date: 2024-04-21
---

## [100% score Javascript solution](https://app.codility.com/demo/results/trainingAWZUTH-REX/)

Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

No need to check even out of bounds according to the [task on codility](https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/). Detected time complexity: O(N + M)


```javascript
function solution(N, A) {
    let res = [];
    let currentMax = 0;
    let min = 0;

    for (let i = 0; i < A.length; i++) {
        const curr = A[i];

        if (curr > N) {
            min = currentMax;
        } else {
            // assuming that curr cannot be bigger than N + 1, or less than 1, otherwise would need additional checks
            const newWal = Math.max(min, res[curr - 1] || 0) + 1;
            res[curr - 1] = newWal;
            currentMax = Math.max(currentMax, newWal)
        }
    }

    for (let j = 0; j < N; j++) {
        res[j] = Math.max(min, res?.[j] || 0);
    }

    return res;
}
```
