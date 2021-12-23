import React from "react";

const WordOrNum = (props) => {
  if (isNaN(props.val)) {
    return (
      <div>
        <p
          style={
            props.textColor
              ? {
                  color: props.textColor,
                  backgroundColor: props.backgroundColor,
                }
              : null
          }
        >
          The word is : {props.val}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p
          style={
            props.textColor
              ? {
                  color: props.textColor,
                  backgroundColor: props.backgroundColor,
                }
              : null
          }
        >
          The numba is : {props.val}
        </p>
      </div>
    );
  }
};

export default WordOrNum;
