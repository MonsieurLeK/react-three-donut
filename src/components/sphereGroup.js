import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function SphereGroup() {

    const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0;
  });

    return <group className="sphereGroup" ref={group} >
    <mesh position={[0, 0, 0]} >
      <sphereGeometry args={[1, 30]} />
      <meshStandardMaterial color={"white"} 
      roughness={0.3} />
    </mesh>
    <mesh position={[2, 0, 0]} >
      <sphereGeometry args={[1, 30]} />
      <meshStandardMaterial color={"white"} 
      roughness={0.3} />
    </mesh>
    <mesh position={[-2, 0, 0]} >
      <sphereGeometry args={[1, 30]} />
      <meshStandardMaterial color={"white"} 
      roughness={0.3} />
    </mesh>
  </group>
}

export default SphereGroup