---
title: "Cyclic Rotation"
section: "Lesson 2: Arrays"
tags: ["Arrays"]
date: 2024-04-10
---

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

### [100% score Javascript solution](https://app.codility.com/demo/results/trainingKJHM7K-T3G/)

Even though performance is not not the focus on the assignment, I still like to add some early returns.

```javascript
function solution(A, K) {
  const len = A.length;
  if (len < 1 || len > 100) {
      return [];
  }

  const mod = K % len;
  if (mod === 0) {
      return A;
  }

  const rotated = [];
  for (let i = 0; i < len; i++) {
      const newPos = i + mod;
      // deal with overflow values
      if (newPos > len - 1) {
          rotated[newPos - len] = A[i];
      } else {
          // shift by mod places
          rotated[i + mod] = A[i];
      }
  }

  return rotated;
}
```
