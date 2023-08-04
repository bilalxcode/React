import "./index";

const SlotM = (props) => {
  
    if (props.x === props.y && props.y === props.z) {
      return (
        <>
          <div className="slot_inner">
            <h1>
              {props.x}
              {props.y}
              {props.z}
            </h1>
            <h1>YOU WON!🎉</h1>
            <hr />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slot_inner">
            <h1>
              {props.x}
              {props.y}
              {props.z}
            </h1>
            <h5> TRY AGAIN </h5>
            <hr />
          </div>
        </>
      );
    }
  };

  export default SlotM;