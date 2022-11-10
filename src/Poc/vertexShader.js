const vertexShader = `
#define MPI 3.1415926535897932384626433832795
// precision mediump float;


attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec2 uv;
uniform float u_time;
varying vec2 v_uv;

void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}`

export default vertexShader
