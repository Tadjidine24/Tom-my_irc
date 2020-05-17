import Button from "@material-ui/core/Button";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));