import React from 'react';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const onContextCreate = async (gl) => {
    const renderer = new THREE.WebGLRenderer({ context: gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.setClearColor(0x0000ff); // Blue background

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Fallback cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    scene.add(cube);

    // Lighting
    scene.add(new THREE.DirectionalLight(0xffffff, 0.8));
    scene.add(new THREE.AmbientLight(0x404040));

    // Load GLB
    try {
      const asset = Asset.fromModule(require('../assets/flat.glb'));
      await asset.downloadAsync();
      console.log('Asset URI:', asset.localUri);
      const loader = new GLTFLoader();
      loader.load(
        asset.localUri,
        (gltf) => {
          console.log('GLB loaded:', gltf);
          scene.add(gltf.scene);
        },
        undefined,
        (error) => console.error('GLB error:', error)
      );
    } catch (error) {
      console.error('Asset error:', error);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
}



// import { View, Text } from 'react-native';
// import styles from './styles/style';
// import Map1 from './components/map';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Map1 />
//     </View>
//   );
// };