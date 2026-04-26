import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Sparkles } from "@react-three/drei";

function AnimatedGlobe() {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <group>
        <mesh>
          <sphereGeometry args={[2.2, 96, 96]} />
          <meshStandardMaterial
            color="#2563eb"
            wireframe
            emissive="#38bdf8"
            emissiveIntensity={0.8}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[2.65, 96, 96]} />
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.22}
            emissive="#a855f7"
            emissiveIntensity={1}
          />
        </mesh>

        <Sparkles count={220} scale={5.5} size={4} speed={1.7} />
      </group>
    </Float>
  );
}

export default function GoalGlobe() {
  return (
    <div className="globeBox">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[-5, -5, -5]} intensity={2} />

        <Stars radius={120} depth={80} count={7000} factor={5} fade />

        <AnimatedGlobe />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      </Canvas>
    </div>
  );
}
