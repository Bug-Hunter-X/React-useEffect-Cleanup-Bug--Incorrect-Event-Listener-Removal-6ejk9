```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Width: {width}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```