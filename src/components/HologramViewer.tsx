import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

interface HologramViewerProps {
  type: 'diy' | 'enterprise';
  className?: string;
}

const HologramViewer = ({ type, className = '' }: HologramViewerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        ease: "linear"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { 
          duration: 0.2, 
          ease: "linear" 
        }
      }}
      className={`relative ${className}`}
    >
      <div className="w-full h-80 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
          performance={{ min: 0.8 }}
          dpr={[1, 1.5]}
          frameloop="demand"
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <pointLight position={[8, 8, 8]} intensity={1.2} />
            <pointLight position={[-8, -8, -8]} intensity={0.4} />
            <spotLight position={[0, 12, 0]} intensity={1} angle={0.3} penumbra={1} />
            
            {type === 'diy' ? <DIYHologram /> : <EnterpriseHologram />}
            
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              enableDamping
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Subtle holographic glow effects */}
      <motion.div 
        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10 pointer-events-none"
        animate={{ 
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </motion.div>
  );
};

const DIYHologram = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        {/* Cardboard base */}
        <mesh position={[0, -1, 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshStandardMaterial 
            color="#D97706" 
            roughness={0.8} 
            metalness={0.1}
          />
        </mesh>
        
        {/* Cardboard sides */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
          <boxGeometry args={[2.8, 1.5, 0.1]} />
          <meshStandardMaterial 
            color="#F59E0B" 
            roughness={0.7} 
            metalness={0.05}
          />
        </mesh>
        
        {/* Holographic projection */}
        <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
          <mesh position={[0, 1, 0]} castShadow>
            <octahedronGeometry args={[0.5]} />
            <meshStandardMaterial
              color="#3B82F6"
              transparent
              opacity={0.8}
              emissive="#1E40AF"
              emissiveIntensity={0.4}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Float key={i} speed={2 + i * 0.2} rotationIntensity={0.1} floatIntensity={0.6}>
            <mesh position={[
              (Math.random() - 0.5) * 4,
              Math.random() * 3.5,
              (Math.random() - 0.5) * 4
            ]}>
              <sphereGeometry args={[0.025 + Math.random() * 0.015]} />
              <meshStandardMaterial
                color="#60A5FA"
                transparent
                opacity={0.7}
                emissive="#3B82F6"
                emissiveIntensity={0.3}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </Float>
  );
};

const EnterpriseHologram = () => {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group>
        {/* Premium base */}
        <mesh position={[0, -1, 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.3, 2]} />
          <meshStandardMaterial 
            color="#1F2937" 
            metalness={0.9} 
            roughness={0.1}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Premium acrylic display */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2.8, 1.8, 0.1]} />
          <meshStandardMaterial
            color="#F8FAFC"
            transparent
            opacity={0.15}
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Advanced holographic projection */}
        <Float speed={1.8} rotationIntensity={1} floatIntensity={1}>
          <group>
            <mesh position={[0, 1.2, 0]} castShadow>
              <icosahedronGeometry args={[0.6]} />
              <meshStandardMaterial
                color="#8B5CF6"
                transparent
                opacity={0.9}
                emissive="#7C3AED"
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.8}
              />
            </mesh>
            
            {/* Inner core */}
            <mesh position={[0, 1.2, 0]}>
              <sphereGeometry args={[0.3]} />
              <meshStandardMaterial
                color="#06B6D4"
                transparent
                opacity={0.95}
                emissive="#0891B2"
                emissiveIntensity={0.7}
                roughness={0.05}
                metalness={0.9}
              />
            </mesh>
          </group>
        </Float>
        
        {/* LED indicators */}
        {[
          { pos: [-1.2, -0.8, 0.8] as [number, number, number], color: "#10B981", emissive: "#059669" },
          { pos: [-1, -0.8, 0.8] as [number, number, number], color: "#3B82F6", emissive: "#2563EB" },
          { pos: [-0.8, -0.8, 0.8] as [number, number, number], color: "#8B5CF6", emissive: "#7C3AED" }
        ].map((led, i) => (
          <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={0.05} floatIntensity={0.15}>
            <mesh position={led.pos}>
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial 
                color={led.color} 
                emissive={led.emissive} 
                emissiveIntensity={1}
                transparent
                opacity={0.9}
              />
            </mesh>
          </Float>
        ))}
        
        {/* Energy field */}
        {Array.from({ length: 12 }).map((_, i) => (
          <Float key={i} speed={1.5 + i * 0.15} rotationIntensity={0.08} floatIntensity={0.5}>
            <mesh position={[
              Math.cos(i * 0.5) * (2.2 + Math.sin(i * 0.4)),
              Math.sin(i * 0.4) * 2.2 + 1,
              Math.sin(i * 0.5) * (2.2 + Math.cos(i * 0.4))
            ]}>
              <sphereGeometry args={[0.018 + Math.random() * 0.008]} />
              <meshStandardMaterial
                color="#A855F7"
                transparent
                opacity={0.8}
                emissive="#9333EA"
                emissiveIntensity={0.4}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </Float>
  );
};

export default HologramViewer;