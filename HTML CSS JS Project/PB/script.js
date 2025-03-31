  
 

// Get the canvas element
const canvas = document.getElementsByClassName("drawing-area");
const ctx = canvas.getContext("2d");

// Variables for tracking drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Event listener for mouse down (start drawing)
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

// Event listener for mouse move (draw while moving)
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return; // Don't draw if not pressing the mouse
  const currentX = e.offsetX;
  const currentY = e.offsetY;

  // Draw line
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();

  // Update last position
  lastX = currentX;
  lastY = currentY;
});

// Event listener for mouse up (stop drawing)
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Optional: Clear the canvas if mouse leaves
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});
