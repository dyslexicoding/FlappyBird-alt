import { useEffect, useState } from "react";

// varable declration

const BirdSize = 20;
const GameWidth = 500;
const GameHight = 500;
const Gravity = 6;
const JumpHeight = 100


export default function FlappyBird() {
  
  // starts at a postion in air
  const [BirdPosition, setBirdPosition] = useState(250);

  // Upate bird postion
  useEffect(() => {
    let TimeID = NodeJS.Timer;

    // 500 should be bottom of the window therefore, if bird is less that 500 eg flying its still alive therefore affected by gravity
    if (BirdPosition < GameHight - BirdSize){
      TimeID = setInterval(() => {
        setBirdPosition((BirdPosition) => BirdPosition + Gravity);
      },24);
    } 

    return () => {
      clearInterval(TimeID);

    };


  }, [BirdPosition]);

  // Jumping Function

  const handleClick = () => {
    let newBirdPosition = BirdPosition - JumpHeight;
    setBirdPosition(newBirdPosition)
  }


  return(
    <div>
      <div
        style={{ display: "flex", width: "100%", justifyContent: "center" }}
        onClick={handleClick}
      >
        {/*HTML Element That Represents The Game Background*/}
        <div
          style={{
            backgroundColor: "white",
            height: `${GameHight}px`,
            width: `${GameWidth}px`,
          }}
        >
          {/*HTML Element That Represents the Bird*/}
          <div
            style={{
              position: "absolute",
              backgroundColor: "red",
              height: `${BirdSize}px`,
              width: `${BirdSize}px`,
              borderRadius: "100%",
              top: `${BirdPosition}px`,
            }}
          />
        </div>
      </div>
    </div>
  )


}