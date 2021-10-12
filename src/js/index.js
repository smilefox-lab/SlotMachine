import Slot from "./Slot.js";

const config = {
  inverted: true, // true: reels spin from top to bottom; false: reels spin from bottom to top
};

const slot = new Slot(document.getElementById("slot"), config);
