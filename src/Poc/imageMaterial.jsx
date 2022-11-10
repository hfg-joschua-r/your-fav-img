// src/Poc/image.js
import { extend } from '@react-three/fiber'
import { ShaderMaterial } from 'three'

import glsl from 'babel-plugin-glsl/macro';
import { Fragment } from 'react';

export const ImageMaterial = ShaderMaterial(
  { u_time: 0, u_diffuse: new THREE.Texture(), u_normal: new THREE.Texture(), u_depth: new THREE.Texture(), u_mouse: new THREE.Vector2(0, 0) },
      VertexShader`
      #define MPI 3.1415926535897932384626433832795
      // precision mediump float;
      
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      
      uniform float u_time;
      varying vec2 v_uv;
      
      
      void main() {
        vec3 pos = position;
      
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        v_uv = uv;
      }`,
      Fragment `
      precision mediump float;

      uniform float u_time;
      uniform sampler2D u_diffuse; 
      uniform sampler2D u_normal; 
      uniform sampler2D u_depth; 
      uniform vec2 u_mouse;
      
      varying vec2 v_uv;
      
      void main() {
      
        // all maps
        vec4 diffuse = texture2D(u_diffuse, v_uv);
        vec4 normal = texture2D(u_normal, v_uv);
        vec4 depth = texture2D(u_depth, v_uv);
      
        // light
        float dist = 1. - distance(u_mouse, v_uv);
        dist = smoothstep(.0, 1., dist);
        
        float _factor = (.8 + depth.r * .2) + dist;
        float ptl = dot(normalize(vec3(u_mouse, .1)), normal.rgb) * _factor;
      
        // mix with light
        diffuse.rgb *= ptl;
      
        // compute indicator position
        float pos = distance(vec2(u_mouse.x, u_mouse.y), v_uv);
        pos = smoothstep(.1, .0, pos);
        //diffuse.rgb += pos * .5; // uncomment to see light posiiton
      
      
        gl_FragColor.rgb = diffuse.rgb;
        //gl_FragColor.rgb = vec3(pos);
        gl_FragColor.a = 1.;
      }`,
    )
  
      
extend({ ImageMaterial })