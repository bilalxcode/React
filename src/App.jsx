import { useState } from "react";
import "./index";
import SlotM from "./SlotM";

const emojis = ["🍎", "🍌", "🍇"];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const App = () => {
  const [slotEmojis, setSlotEmojis] = useState({
    slot1: "🍎",
    slot2: "🍎",
    slot3: "🍎",
  });

  const handleRandomEmojis = () => {
    setSlotEmojis({
      slot1: getRandomEmoji(),
      slot2: getRandomEmoji(),
      slot3: getRandomEmoji(),
    });
  };

  return (
    <>
      <h1 className="heading_style">
        🎰 <span>Welcome to Slot Machine Game </span> 🎰{" "}
      </h1>
      <div className="slot_machines">
        <SlotM x={slotEmojis.slot1} y={slotEmojis.slot2} z={slotEmojis.slot3} />
        <SlotM x={getRandomEmoji()} y={getRandomEmoji()} z={getRandomEmoji()} />
        <SlotM x={getRandomEmoji()} y={getRandomEmoji()} z={getRandomEmoji()} />
      </div>
      <button onClick={handleRandomEmojis}>Generate!</button>
    </>
  );
};

export default App;
