```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to unsubscribe from the event listener
    window.addEventListener('resize', handleResize);
    return () => { window.addEventListener('resize', handleResize); }; 
  }, []);

  const handleResize = () => {
    // ...
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```