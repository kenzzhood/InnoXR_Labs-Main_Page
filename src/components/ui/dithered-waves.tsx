/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DitherProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
}

const Dither = ({
  waveSpeed = 0.02,
  waveFrequency = 2,
  waveAmplitude = 0.4,
  waveColor = [0.9, 0.9, 0.9],
  colorNum = 8,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.8,
}: DitherProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
      className="w-full h-full"
    >
      <DitheredWaves
        waveSpeed={waveSpeed}
        waveFrequency={waveFrequency}
        waveAmplitude={waveAmplitude}
        waveColor={waveColor}
        colorNum={colorNum}
        pixelSize={pixelSize}
        disableAnimation={disableAnimation}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={mouseRadius}
      />
    </Canvas>
  );
};

const DitheredWaves = ({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  colorNum,
  pixelSize,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius,
}: Required<DitherProps>) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        mouse: { value: new THREE.Vector2(0.5, 0.5) },
        waveSpeed: { value: waveSpeed },
        waveFrequency: { value: waveFrequency },
        waveAmplitude: { value: waveAmplitude },
        waveColor: { value: new THREE.Vector3(...waveColor) },
        colorNum: { value: colorNum },
        pixelSize: { value: pixelSize },
        mouseRadius: { value: mouseRadius },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        uniform float waveSpeed;
        uniform float waveFrequency;
        uniform float waveAmplitude;
        uniform vec3 waveColor;
        uniform float colorNum;
        uniform float pixelSize;
        uniform float mouseRadius;
        varying vec2 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
          vec2 st = vUv;
          vec2 pixelatedSt = floor(st * resolution / pixelSize) * pixelSize / resolution;
          
          float wave = sin(pixelatedSt.x * waveFrequency + time * waveSpeed) * waveAmplitude;
          wave += sin(pixelatedSt.y * waveFrequency * 0.7 + time * waveSpeed * 0.8) * waveAmplitude * 0.5;
          
          float mouseDist = distance(st, mouse);
          float mouseEffect = smoothstep(mouseRadius, 0.0, mouseDist);
          wave += mouseEffect * 0.3;
          
          float noiseValue = noise(pixelatedSt * 10.0 + time * 0.1);
          wave += noiseValue * 0.1;
          
          float intensity = (wave + 1.0) * 0.5;
          intensity = floor(intensity * colorNum) / colorNum;
          
          float dither = random(pixelatedSt + time * 0.01) * 0.1;
          intensity += dither;
          
          vec3 color = waveColor * intensity;
          color = mix(color, vec3(1.0), mouseEffect * 0.2);
          
          gl_FragColor = vec4(color, intensity * 0.8);
        }
      `,
      transparent: true,
    });
  }, [waveSpeed, waveFrequency, waveAmplitude, waveColor, colorNum, pixelSize, mouseRadius]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    if (!disableAnimation) {
      shaderMaterial.uniforms.time.value = state.clock.elapsedTime;
    }
    
    if (enableMouseInteraction) {
      shaderMaterial.uniforms.mouse.value.set(
        mouseRef.current.x,
        1.0 - mouseRef.current.y
      );
    }
  });

  // Mouse interaction
  if (enableMouseInteraction && typeof window !== 'undefined') {
    window.addEventListener('mousemove', (event) => {
      mouseRef.current.x = event.clientX / window.innerWidth;
      mouseRef.current.y = event.clientY / window.innerHeight;
    });
  }

  return (
    <mesh ref={meshRef} material={shaderMaterial}>
      <planeGeometry args={[10, 10]} />
    </mesh>
  );
};

export default Dither;