import "./style.css"

const canvas = document.querySelector("canvas")!;
const gl = canvas.getContext("webgl")!;
if (!gl) alert("WebGL not supported");

gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
