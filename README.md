# Shaders In ThreeJS

This repo is a harness where I can play with shaders. I'm creating a sea with waves using vertex and fragment shaders in ThreeJS.

Just a bit of fun 😉

## Vertex Shaders vs Fragment Shaders

- Vertex Shaders perform transforms on the positions of vertices.

- Fragment Shaders perform fill operations to pixels between vertices

## GLSL Data Types

Attributes - Vertex specific and can only be used in vertex shaders.
Uniforms - these are global and perform operations in both vertex and fragement shaders.

## ThreeJS Shader and Raw Shader Material

- ShaderMaterial - allows you to write your own shaders.

- RawShaderMaterial - allows you to write your own shaders but does not include any default uniforms or attributes.

## Communication between shaders and ThreeJS

- ThreeJS provides a set of default uniforms and attributes that can be used in shaders.

- ThreeJS also provides a set of methods that can be used to pass data from the CPU to the GPU.
- You can also share data between threejs and shaders by using uniforms and attributes.

```typescript
const shaderMaterial = new THREE.ShaderMaterial({
  fragmentShader,
  vertexShader,
});

shaderMaterial.uniforms.uTime = { value: 0 };
```

Take a look at the code for examples on how to do this.
