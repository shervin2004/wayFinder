import { GLView } from 'expo-gl';
import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export default function App() {
  const onContextCreate = async (gl) => {
    console.log('GLView context created:', gl);

    // Initialize renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        context: gl,
        antialias: true,
        alpha: true
      });
      renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
      renderer.setClearColor(0x0000ff, 1.0); // Blue background
      console.log('Renderer initialized:', renderer);
    } catch (error) {
      console.error('Renderer setup error:', error);
      return;
    }

    // Scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    console.log('Scene and camera set up');

    // Add a red cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    scene.add(cube);
    console.log('Cube added to scene');

    // Animation loop
    const animate = () => {
      try {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        gl.endFrameEXP();
        console.log('Frame rendered');
      } catch (error) {
        console.error('Animation loop error:', error);
      }
    };
    animate();
  };

  const onError = (error) => {
    console.error('GLView error:', error);
  };

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={onContextCreate}
      onError={onError}
    />
  );
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