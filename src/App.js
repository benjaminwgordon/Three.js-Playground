import React from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      direction: 1
    }
  }


  componentDidMount(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var geometry1 = new THREE.BoxGeometry( 1, 2, 1 );

    var material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var material4 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var material5 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var material6 = new THREE.MeshBasicMaterial( { color: 0xff00ff } );


    var cube = new THREE.Mesh( geometry, [material1, material2, material3, material4, material5, material6] );
    var rect = new THREE.Mesh(geometry1, [material1, material2, material3, material4, material5, material6])

    scene.add( cube );
    scene.add(rect);
    rect.position.add(new Vector3(2,0,0));
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame( animate );
      cube.rotation.x += this.state.direction * 0.01;
      cube.rotation.y += 0.01;
      rect.rotation.x += this.state.direction * 0.01;
      rect.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();
  }

  reverse = () => {
    this.setState({
      direction: this.state.direction * -1
    })
  }


  render(){
    return(
      <div>
        <div ref={ref => (this.mount = ref)} />
        <button onClick={this.reverse}>Reverse Me</button>
      </div>
    )
  }
}

export default App;
