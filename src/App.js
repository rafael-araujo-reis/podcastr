import Button from './Button';

function App() {
  return (
    // fragment is a tag react from have element div
    <>
      <h1>Hello World</h1>
      {/* used property */}
      {/* <Button title="Button 1" />
      <Button title="Button 2" />
      <Button title="Button 3" /> */}

      {/* used children */}
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
    </>
  );
}

export default App;
