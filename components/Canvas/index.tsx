import { Canvas } from "@react-three/fiber";

export default function CanvasComponent({ children }: any) {
  return (
    <Canvas
      className="relative z-0 "
      camera={{
        fov: 45,
        position: [0, 0, 55],
        near: 0.1,
        far: 200,
      }}
    >
      {children}
    </Canvas>
  );
}
