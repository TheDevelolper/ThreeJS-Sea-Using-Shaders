/*
Vertex shader is a program that runs on each vertex of a 3D model.
supported data types:
attributes (are associated with vertices so not supported in fragment shader)
uniforms are used for values that are constant for all vertices
varyings (are shared between vertex and fragment shaders)
*/

precision mediump float;
uniform float time;
varying vec3 vertPositionVarying;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {

	//* model matrix is for the object itself, position, scale, rotation.
	//* view matrix is for the view, position and rotation.
	//* ModelView matrix is the combination of the two above.
	//* projection matrix is for the camera, fov, aspect ratio, near, far.

	//! the order of multiplication is important.
	vec4 vertPosition = modelMatrix * vec4(position, 1.0);
	vertPosition.x += 0.0;
	vertPosition.y += sin(time + (vertPosition.x * vertPosition.z) * rand(vertPosition.zx)) * 0.4;
	vertPosition.z += 0.0;

	vertPositionVarying = vertPosition.xyz;

	vec4 viewPosition = viewMatrix * vertPosition;
	vec4 projectionPosition = projectionMatrix * viewPosition;

	gl_Position = projectionPosition;
}
