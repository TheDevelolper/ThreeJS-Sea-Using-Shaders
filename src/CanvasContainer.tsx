import { Canvas } from "@react-three/fiber";
import "./CanvasContainer.css";
import App from "./App";

/**
 * Renders a container for the canvas element.
 * @returns The JSX element for the canvas container.
 *
 * This is nessisary for react 3 fiber hooks to work as they're supposed to
 * work inside of a canvas element.
 */
function CanvasContainer() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 2],
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 1,
        far: 1000,
      }}
    >
      <App />
    </Canvas>
  );
}

export default CanvasContainer;
