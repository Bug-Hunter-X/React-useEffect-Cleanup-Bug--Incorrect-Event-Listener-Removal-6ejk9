# React useEffect Cleanup Bug: Incorrect Event Listener Removal

This repository demonstrates a subtle bug that can occur when using the `useEffect` hook in React with event listeners. The bug involves incorrectly removing an event listener within the cleanup function, leading to memory leaks and unexpected behavior.

## The Bug

The provided `bug.js` file shows an example where an event listener for window resize is added in the `useEffect` hook, but in the cleanup function, another `addEventListener` is used instead of a `removeEventListener`, thus adding another listener. This leads to multiple listeners being attached causing unexpected behavior and potential memory leaks.

## The Solution

The `bugSolution.js` file presents the correct way to handle the event listeners with the `useEffect` hook to avoid the memory leaks.  The `removeEventListener` method is used to detach the listener properly.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to compare the code.
3. Run the React application (instructions might vary depending on your setup). Observe the unintended behavior in `bug.js` and the correct functionality in `bugSolution.js`.

## Lesson Learned

Always use `removeEventListener` within the cleanup function of `useEffect` to remove event listeners and prevent memory leaks. Ensure that the listener is removed before adding the listener again. 