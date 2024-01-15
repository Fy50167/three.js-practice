import './App.css'
import {useEffect} from 'react';
import * as THREE from 'three';

function App() {
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth/window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas = document.getElementById('threeJsCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

  })


  return (
    <>
      <div>
        <canvas id = 'threeJsCanvas' />
      </div>
    </>
  )
}

export default App
