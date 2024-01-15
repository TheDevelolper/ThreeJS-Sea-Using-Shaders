/*
Fragment shader is a program that runs on each "pixel" (fragment really) of a 3D model.
supported data types:
uniforms
varyings (are shared between vertex and fragment shaders)
*/

varying vec3 vertPositionVarying;

void main() {
	float intensity = 1.0;
	gl_FragColor = vec4(intensity * 0.2 + vertPositionVarying.y, intensity + vertPositionVarying.y, 1.0 + intensity + vertPositionVarying.y, 1);
}
