import "./index";
import SlotM from "./SlotM";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 <span>Welcome to Slot Machine Game </span> 🎰{" "}
      </h1>
      <div className="slot_machines">
        <SlotM x="😊" z="😆" y="😊" />
        <SlotM x="😊" z="😊" y="😊" />
        <SlotM x="🍎" z="🍌" y="🍎" />
        
      </div>
    </>
  );
};

export default App;
