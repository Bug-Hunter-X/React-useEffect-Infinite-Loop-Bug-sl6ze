# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrectly using the `useEffect` hook.

## Bug Description

The `MyComponent` component utilizes the `useEffect` hook to update a state variable (`count`) inside the hook's callback function. This creates an infinite loop, since any state update inside the `useEffect` callback triggers a re-render, which subsequently triggers the `useEffect` hook again, leading to a continuous state update.