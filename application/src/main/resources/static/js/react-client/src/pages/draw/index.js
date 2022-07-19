import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import * as React from "react";

import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
  
 
};

const Canvas = class extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }
 
   

  render() {
    return (
      <div>
       <ReactSketchCanvas
        style={styles}
        width="600"
        height="800px"
        strokeWidth={4}
        strokeColor="teal"
        eraserWidth={5}

        />
        <div>
    
  
        </div>

        <button
          onClick={() => {
            this.canvas.current.
              exportImage("png")
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Get Image
        </button>
      </div>
      
    );
  }
};

export default Canvas;