---
title: "Perm Missing Elem"
section: "Lesson 3: Time Complexity"
tags: ["Time Complexity", "Easy"]
difficulty: "Easy"
description: "Find the missing element in a given permutation"
date: 2024-04-21
---
## [100% score Javascript solution](https://app.codility.com/demo/results/training6BPYFV-U33/)

Find the missing element in a given permutation.

### Sum of Arithmetic Sequence
You can calculate the sum of an arithmetic sequence using a simple formula: `S = n/2 * (a1 + an)`. In this formula, `S` stands for sum, `n` stands for the number of terms in the sequence, `a1` stands for the first term in the sequence, and `an` stands for the last term in the sequence.

No need to check even out of bounds according to the [task on codility](https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/). Detected time complexity: O(N)


```javascript
function solution(A) {
    const len = A.length;

    if (len === 0) {
        return 1;
    }

    // solution assuming that sum of arithmetic sequence can be used
    // S = n / 2 * (a1 + an)
    const maxNumber = len + 1;
    let res = (maxNumber / 2) * (1 + maxNumber); // max sum

    for (let i = 0; i < len; i++) {
        res = res - A[i];
    }

    return res;
}
```
