import './App.css';
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js"
import SphereGroup from './components/sphereGroup';

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{fov: 120}} >
        <OrbitControls maxDistance={20} 
        minDistance={5} 
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={3.5} />
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[2, 3, 5]} intensity={2} />
        <SphereGroup />
      </Canvas>
    </div>
  );
}

export default App;
