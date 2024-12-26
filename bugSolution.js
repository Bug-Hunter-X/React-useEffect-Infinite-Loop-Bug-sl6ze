```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: the effect runs only once after mount
    console.log('Component mounted');
  }, []);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      Count: {count} 
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```