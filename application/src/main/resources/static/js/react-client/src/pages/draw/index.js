import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import * as React from "react";
import style from "../../pages/draw/style.module.scss";
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
      <div className={style.drawContainer}>
       <ReactSketchCanvas
       className={style.drawCanvas}
        style={styles}
        width="80%"
        height="80vh"
        strokeWidth={4}
        strokeColor="teal"
        eraserWidth={5}

        />
        <div>
    
  
        </div>

        <button
        className={style.drawButton}
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
          Download Image
        </button>
      </div>
      
    );
  }
};

export default Canvas;