---
title: "Tape Equilibrium"
section: "Lesson 3: Time Complexity"
tags: ["Time Complexity", "Easy"]
difficulty: "Easy"
description: "Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|"
date: 2024-04-21
---
## [100% score Javascript solution](https://app.codility.com/demo/results/trainingJ2UNTT-84J/)

Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

No need to check even out of bounds according to the [task on codility](https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/). Detected time complexity: O(N)


```javascript
function solution(A) {
    // smallest difference will be always between the closest sums
    const len = A.length;

    if (len < 2) {
        return -1;
    }

    let totalSum = 0;
    for (let i = 0; i < len; i++) {
        totalSum = A[i] + totalSum;
    }
    
    let smallest = Math.abs(A[0] * 2 - totalSum); // first diff
    let firstSum = 0;

    for (let i = 0; i < len - 1; i++) {
        firstSum = firstSum + A[i];
        smallest = Math.min(smallest, Math.abs(2*firstSum - totalSum));
    }

    return smallest;
}
```
