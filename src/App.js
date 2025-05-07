import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  //   const webviewRef = useRef(null);
  //   const [pathIndex, setPathIndex] = useState(0);
  //   const predefinedPath = [0, 2, 5, 1];

  //   const uri = Platform.OS === 'android'
  //     ? 'file:///android_asset/html/Wayfinding-Multi-path.html'
  //     : require('./assets/html/Wayfinding-Multi-path.html');

  //   const sendMessageToWebView = (data) => {
  //     webviewRef.current?.postMessage(JSON.stringify(data));
  //   };

  //   const handleWebViewMessage = (event) => {
  //     try {
  //       const message = JSON.parse(event.nativeEvent.data);
  //       console.log('Received from WebView:', message);
  //       // You can handle acknowledgements or other data from the WebView here
  //     } catch (error) {
  //       console.log('Error parsing WebView message:', error);
  //     }
  //   };

  //   const moveBotToNextPoint = () => {
  //     if (pathIndex < predefinedPath.length) {
  //       const targetIndex = predefinedPath[pathIndex];
  //       sendMessageToWebView({ command: 'moveBot', index: targetIndex });
  //       setPathIndex(pathIndex + 1);
  //     } else {
  //       alert('Bot has completed the predefined path!');
  //       setPathIndex(0); // Reset the path
  //     }
  //   };

  //   const injectedJavaScript = `
  //   (function() {
  //     window.addEventListener('message', function(event) {
  //       try {
  //         const message = JSON.parse(event.data);
  //         if (message.command === 'moveBot' && typeof move === 'function') {
  //           console.log('WebView received moveBot command for index:', message.index);
  //           move(message.index);
  //           // Optionally, send a confirmation back to React Native
  //           window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'botMoved', index: message.index }));
  //         }
  //       } catch (error) {
  //         console.error('WebView error handling message:', error);
  //       }
  //     });
  //   })();
  // `;

  //   return (
  //     <View style={styles.container}>
  //       <StatusBar hidden={true} />
  //       <WebView
  //         source={Platform.OS === 'android' ? { uri } : uri}
  //         style={{ flex: 1 }}
  //         ref={webviewRef}
  //         onMessage={handleWebViewMessage}
  //         injectedJavaScript={injectedJavaScript}
  //       />
  //       <Button style={{ position: 'relative', top: 30 }} title="Move Bot to Next Point" onPress={moveBotToNextPoint} />
  //     </View>
  //   );
  return (
    <View style={styles.container }>
      <Text>HI</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});