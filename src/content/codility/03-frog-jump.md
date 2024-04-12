---
title: "Frog Jump"
section: "Lesson 3: Time Complexity"
tags: ["Time Complexity"]
date: 2024-04-12
---

Find the minimal number of jumps frog needs to perform to get to the other side.

### [100% score Javascript solution](https://app.codility.com/demo/results/trainingEHKBB4-WQV/)

O(1) complexity


```javascript
function solution(X, Y, D) {
    // checking out of bounds, max values could be tested as well. 
    if (Y < X || D < 1 || X < 1 || Y < 1) {
        return -1;
    }

    const minDistance = Y - X;

    return Math.ceil(minDistance / D);
}
```