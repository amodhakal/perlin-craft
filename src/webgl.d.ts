interface WebGLContextAttributes {
  alpha: bool;
  depth: bool;
  stencil: bool;
  antialias: bool;
  premultipliedAlpha: bool;
}

interface WebGLObject {
  $__dummyprop__WebGLObject: any;
}

interface WebGLBuffer extends WebGLObject {
  $__dummyprop__WebGLBuffer: any;
}

interface WebGLFramebuffer extends WebGLObject {
  $__dummyprop__WebGLFramebuffer: any;
}

interface WebGLProgram extends WebGLObject {
  $__dummyprop__WebGLProgram: any;
}

interface WebGLRenderbuffer extends WebGLObject {
  $__dummyprop__WebGLRenderbuffer: any;
}

interface WebGLShader extends WebGLObject {
  $__dummyprop__WebGLShader: any;
}

interface WebGLTexture extends WebGLObject {
  $__dummyprop__WebGLTexture: any;
}

interface WebGLUniformLocation {
  $__dummyprop__WebGLUniformLocation: any;
}

interface WebGLActiveInfo {
  size: number;
  type: number;
  name: string;
}

interface WebGLRenderingContext {
  DEPTH_BUFFER_BIT: number;
  STENCIL_BUFFER_BIT: number;
  COLOR_BUFFER_BIT: number;
  POINTS: number;
  LINES: number;
  LINE_LOOP: number;
  LINE_STRIP: number;
  TRIANGLES: number;
  TRIANGLE_STRIP: number;
  TRIANGLE_FAN: number;
  ZERO: number;
  ONE: number;
  SRC_COLOR: number;
  ONE_MINUS_SRC_COLOR: number;
  SRC_ALPHA: number;
  ONE_MINUS_SRC_ALPHA: number;
  DST_ALPHA: number;
  ONE_MINUS_DST_ALPHA: number;
  DST_COLOR: number;
  ONE_MINUS_DST_COLOR: number;
  SRC_ALPHA_SATURATE: number;
  FUNC_ADD: number;
  BLEND_EQUATION: number;
  BLEND_EQUATION_RGB: number;
  BLEND_EQUATION_ALPHA: number;
  FUNC_SUBTRACT: number;
  FUNC_REVERSE_SUBTRACT: number;
  BLEND_DST_RGB: number;
  BLEND_SRC_RGB: number;
  BLEND_DST_ALPHA: number;
  BLEND_SRC_ALPHA: number;
  CONSTANT_COLOR: number;
  ONE_MINUS_CONSTANT_COLOR: number;
  CONSTANT_ALPHA: number;
  ONE_MINUS_CONSTANT_ALPHA: number;
  BLEND_COLOR: number;
  ARRAY_BUFFER: number;
  ELEMENT_ARRAY_BUFFER: number;
  ARRAY_BUFFER_BINDING: number;
  ELEMENT_ARRAY_BUFFER_BINDING: number;
  STREAM_DRAW: number;
  STATIC_DRAW: number;
  DYNAMIC_DRAW: number;
  BUFFER_SIZE: number;
  BUFFER_USAGE: number;
  CURRENT_VERTEX_ATTRIB: number;
  FRONT: number;
  BACK: number;
  FRONT_AND_BACK: number;
  TEXTURE_2D: number;
  CULL_FACE: number;
  BLEND: number;
  DITHER: number;
  STENCIL_TEST: number;
  DEPTH_TEST: number;
  SCISSOR_TEST: number;
  POLYGON_OFFSET_FILL: number;
  SAMPLE_ALPHA_TO_COVERAGE: number;
  SAMPLE_COVERAGE: number;
  NO_ERROR: number;
  INVALID_ENUM: number;
  INVALID_VALUE: number;
  INVALID_OPERATION: number;
  OUT_OF_MEMORY: number;
  CW: number;
  CCW: number;
  LINE_WIDTH: number;
  ALIASED_POINT_SIZE_RANGE: number;
  ALIASED_LINE_WIDTH_RANGE: number;
  CULL_FACE_MODE: number;
  FRONT_FACE: number;
  DEPTH_RANGE: number;
  DEPTH_WRITEMASK: number;
  DEPTH_CLEAR_VALUE: number;
  DEPTH_FUNC: number;
  STENCIL_CLEAR_VALUE: number;
  STENCIL_FUNC: number;
  STENCIL_FAIL: number;
  STENCIL_PASS_DEPTH_FAIL: number;
  STENCIL_PASS_DEPTH_PASS: number;
  STENCIL_REF: number;
  STENCIL_VALUE_MASK: number;
  STENCIL_WRITEMASK: number;
  STENCIL_BACK_FUNC: number;
  STENCIL_BACK_FAIL: number;
  STENCIL_BACK_PASS_DEPTH_FAIL: number;
  STENCIL_BACK_PASS_DEPTH_PASS: number;
  STENCIL_BACK_REF: number;
  STENCIL_BACK_VALUE_MASK: number;
  STENCIL_BACK_WRITEMASK: number;
  VIEWPORT: number;
  SCISSOR_BOX: number;
  COLOR_CLEAR_VALUE: number;
  COLOR_WRITEMASK: number;
  UNPACK_ALIGNMENT: number;
  PACK_ALIGNMENT: number;
  MAX_TEXTURE_SIZE: number;
  MAX_VIEWPORT_DIMS: number;
  SUBPIXEL_BITS: number;
  RED_BITS: number;
  GREEN_BITS: number;
  BLUE_BITS: number;
  ALPHA_BITS: number;
  DEPTH_BITS: number;
  STENCIL_BITS: number;
  POLYGON_OFFSET_UNITS: number;
  POLYGON_OFFSET_FACTOR: number;
  TEXTURE_BINDING_2D: number;
  SAMPLE_BUFFERS: number;
  SAMPLES: number;
  SAMPLE_COVERAGE_VALUE: number;
  SAMPLE_COVERAGE_INVERT: number;
  NUM_COMPRESSED_TEXTURE_FORMATS: number;
  COMPRESSED_TEXTURE_FORMATS: number;
  DONT_CARE: number;
  FASTEST: number;
  NICEST: number;
  GENERATE_MIPMAP_HINT: number;
  BYTE: number;
  UNSIGNED_BYTE: number;
  SHORT: number;
  UNSIGNED_SHORT: number;
  INT: number;
  UNSIGNED_INT: number;
  FLOAT: number;
  DEPTH_COMPONENT: number;
  ALPHA: number;
  RGB: number;
  RGBA: number;
  LUMINANCE: number;
  LUMINANCE_ALPHA: number;
  UNSIGNED_SHORT_4_4_4_4: number;
  UNSIGNED_SHORT_5_5_5_1: number;
  UNSIGNED_SHORT_5_6_5: number;
  FRAGMENT_SHADER: number;
  VERTEX_SHADER: number;
  MAX_VERTEX_ATTRIBS: number;
  MAX_VERTEX_UNIFORM_VECTORS: number;
  MAX_VARYING_VECTORS: number;
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
  MAX_TEXTURE_IMAGE_UNITS: number;
  MAX_FRAGMENT_UNIFORM_VECTORS: number;
  SHADER_TYPE: number;
  DELETE_STATUS: number;
  LINK_STATUS: number;
  VALIDATE_STATUS: number;
  ATTACHED_SHADERS: number;
  ACTIVE_UNIFORMS: number;
  ACTIVE_UNIFORM_MAX_LENGTH: number;
  ACTIVE_ATTRIBUTES: number;
  ACTIVE_ATTRIBUTE_MAX_LENGTH: number;
  SHADING_LANGUAGE_VERSION: number;
  CURRENT_PROGRAM: number;
  NEVER: number;
  LESS: number;
  EQUAL: number;
  LEQUAL: number;
  GREATER: number;
  NOTEQUAL: number;
  GEQUAL: number;
  ALWAYS: number;
  KEEP: number;
  REPLACE: number;
  INCR: number;
  DECR: number;
  INVERT: number;
  INCR_WRAP: number;
  DECR_WRAP: number;
  VENDOR: number;
  RENDERER: number;
  VERSION: number;
  NEAREST: number;
  LINEAR: number;
  NEAREST_MIPMAP_NEAREST: number;
  LINEAR_MIPMAP_NEAREST: number;
  NEAREST_MIPMAP_LINEAR: number;
  LINEAR_MIPMAP_LINEAR: number;
  TEXTURE_MAG_FILTER: number;
  TEXTURE_MIN_FILTER: number;
  TEXTURE_WRAP_S: number;
  TEXTURE_WRAP_T: number;
  TEXTURE: number;
  TEXTURE_CUBE_MAP: number;
  TEXTURE_BINDING_CUBE_MAP: number;
  TEXTURE_CUBE_MAP_POSITIVE_X: number;
  TEXTURE_CUBE_MAP_NEGATIVE_X: number;
  TEXTURE_CUBE_MAP_POSITIVE_Y: number;
  TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
  TEXTURE_CUBE_MAP_POSITIVE_Z: number;
  TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
  MAX_CUBE_MAP_TEXTURE_SIZE: number;
  TEXTURE0: number;
  TEXTURE1: number;
  TEXTURE2: number;
  TEXTURE3: number;
  TEXTURE4: number;
  TEXTURE5: number;
  TEXTURE6: number;
  TEXTURE7: number;
  TEXTURE8: number;
  TEXTURE9: number;
  TEXTURE10: number;
  TEXTURE11: number;
  TEXTURE12: number;
  TEXTURE13: number;
  TEXTURE14: number;
  TEXTURE15: number;
  TEXTURE16: number;
  TEXTURE17: number;
  TEXTURE18: number;
  TEXTURE19: number;
  TEXTURE20: number;
  TEXTURE21: number;
  TEXTURE22: number;
  TEXTURE23: number;
  TEXTURE24: number;
  TEXTURE25: number;
  TEXTURE26: number;
  TEXTURE27: number;
  TEXTURE28: number;
  TEXTURE29: number;
  TEXTURE30: number;
  TEXTURE31: number;
  ACTIVE_TEXTURE: number;
  REPEAT: number;
  CLAMP_TO_EDGE: number;
  MIRRORED_REPEAT: number;
  FLOAT_VEC2: number;
  FLOAT_VEC3: number;
  FLOAT_VEC4: number;
  INT_VEC2: number;
  INT_VEC3: number;
  INT_VEC4: number;
  BOOL: number;
  BOOL_VEC2: number;
  BOOL_VEC3: number;
  BOOL_VEC4: number;
  FLOAT_MAT2: number;
  FLOAT_MAT3: number;
  FLOAT_MAT4: number;
  SAMPLER_2D: number;
  SAMPLER_CUBE: number;
  VERTEX_ATTRIB_ARRAY_ENABLED: number;
  VERTEX_ATTRIB_ARRAY_SIZE: number;
  VERTEX_ATTRIB_ARRAY_STRIDE: number;
  VERTEX_ATTRIB_ARRAY_TYPE: number;
  VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
  VERTEX_ATTRIB_ARRAY_POINTER: number;
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
  COMPILE_STATUS: number;
  INFO_LOG_LENGTH: number;
  SHADER_SOURCE_LENGTH: number;
  LOW_FLOAT: number;
  MEDIUM_FLOAT: number;
  HIGH_FLOAT: number;
  LOW_INT: number;
  MEDIUM_INT: number;
  HIGH_INT: number;
  FRAMEBUFFER: number;
  RENDERBUFFER: number;
  RGBA4: number;
  RGB5_A1: number;
  RGB565: number;
  DEPTH_COMPONENT16: number;
  STENCIL_INDEX: number;
  STENCIL_INDEX8: number;
  DEPTH_STENCIL: number;
  RENDERBUFFER_WIDTH: number;
  RENDERBUFFER_HEIGHT: number;
  RENDERBUFFER_INTERNAL_FORMAT: number;
  RENDERBUFFER_RED_SIZE: number;
  RENDERBUFFER_GREEN_SIZE: number;
  RENDERBUFFER_BLUE_SIZE: number;
  RENDERBUFFER_ALPHA_SIZE: number;
  RENDERBUFFER_DEPTH_SIZE: number;
  RENDERBUFFER_STENCIL_SIZE: number;
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
  COLOR_ATTACHMENT0: number;
  DEPTH_ATTACHMENT: number;
  STENCIL_ATTACHMENT: number;
  DEPTH_STENCIL_ATTACHMENT: number;
  NONE: number;
  FRAMEBUFFER_COMPLETE: number;
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
  FRAMEBUFFER_UNSUPPORTED: number;
  FRAMEBUFFER_BINDING: number;
  RENDERBUFFER_BINDING: number;
  MAX_RENDERBUFFER_SIZE: number;
  INVALID_FRAMEBUFFER_OPERATION: number;
  UNPACK_FLIP_Y_WEBGL: number;
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
  CONTEXT_LOST_WEBGL: number;
  UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
  BROWSER_DEFAULT_WEBGL: number;
  canvas: HTMLCanvasElement;
  getContextAttributes(): WebGLContextAttributes;
  isContextLost(): bool;
  getSupportedExtensions(): string[];
  getExtension(name: string): any;
  activeTexture(texture: number): void;
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
  bindBuffer(target: number, buffer: WebGLBuffer): void;
  bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;
  bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;
  bindTexture(target: number, texture: WebGLTexture): void;
  blendColor(red: number, green: number, blue: number, alpha: number): void;
  blendEquation(mode: number): void;
  blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
  blendFunc(sfactor: number, dfactor: number): void;
  blendFuncSeparate(
    srcRGB: number,
    dstRGB: number,
    srcAlpha: number,
    dstAlpha: number
  ): void;
  bufferData(target: number, size: number, usage: number): void;
  bufferData(target: number, data: ArrayBufferView, usage: number): void;
  bufferData(target: number, data: ArrayBuffer, usage: number): void;
  bufferSubData(target: number, offset: number, data: ArrayBufferView): void;
  bufferSubData(target: number, offset: number, data: ArrayBuffer): void;
  checkFramebufferStatus(target: number): number;
  clear(mask: number): void;
  clearColor(red: number, green: number, blue: number, alpha: number): void;
  clearDepth(depth: number): void;
  clearStencil(s: number): void;
  colorMask(red: bool, green: bool, blue: bool, alpha: bool): void;
  compileShader(shader: WebGLShader): void;
  copyTexImage2D(
    target: number,
    level: number,
    internalformat: number,
    x: number,
    y: number,
    width: number,
    height: number,
    border: number
  ): void;
  copyTexSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  createBuffer(): WebGLBuffer;
  createFramebuffer(): WebGLFramebuffer;
  createProgram(): WebGLProgram;
  createRenderbuffer(): WebGLRenderbuffer;
  createShader(type: number): WebGLShader;
  createTexture(): WebGLTexture;
  cullFace(mode: number): void;
  deleteBuffer(buffer: WebGLBuffer): void;
  deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
  deleteProgram(program: WebGLProgram): void;
  deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
  deleteShader(shader: WebGLShader): void;
  deleteTexture(texture: WebGLTexture): void;
  depthFunc(func: number): void;
  depthMask(flag: bool): void;
  depthRange(zNear: number, zFar: number): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;
  disable(cap: number): void;
  disableVertexAttribArray(index: number): void;
  drawArrays(mode: number, first: number, count: number): void;
  drawElements(mode: number, count: number, type: number, offset: number): void;
  enable(cap: number): void;
  enableVertexAttribArray(index: number): void;
  finish(): void;
  flush(): void;
  framebufferRenderbuffer(
    target: number,
    attachment: number,
    renderbuffertarget: number,
    renderbuffer: WebGLRenderbuffer
  ): void;
  framebufferTexture2D(
    target: number,
    attachment: number,
    textarget: number,
    texture: WebGLTexture,
    level: number
  ): void;
  frontFace(mode: number): void;
  generateMipmap(target: number): void;
  getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;
  getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
  getAttachedShaders(program: WebGLProgram): WebGLShader[];
  getAttribLocation(program: WebGLProgram, name: string): number;
  getParameter(pname: number): any;
  getBufferParameter(target: number, pname: number): any;
  getError(): number;
  getFramebufferAttachmentParameter(
    target: number,
    attachment: number,
    pname: number
  ): any;
  getProgramParameter(program: WebGLProgram, pname: number): any;
  getProgramInfoLog(program: WebGLProgram): string;
  getRenderbufferParameter(target: number, pname: number): any;
  getShaderParameter(shader: WebGLShader, pname: number): any;
  getShaderInfoLog(shader: WebGLShader): string;
  getShaderSource(shader: WebGLShader): string;
  getTexParameter(target: number, pname: number): any;
  getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
  getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
  getVertexAttrib(index: number, pname: number): any;
  getVertexAttribOffset(index: number, pname: number): number;
  hint(target: number, mode: number): void;
  isBuffer(buffer: WebGLBuffer): bool;
  isEnabled(cap: number): bool;
  isFramebuffer(framebuffer: WebGLFramebuffer): bool;
  isProgram(program: WebGLProgram): bool;
  isRenderbuffer(renderbuffer: WebGLRenderbuffer): bool;
  isShader(shader: WebGLShader): bool;
  isTexture(texture: WebGLTexture): bool;
  lineWidth(width: number): void;
  linkProgram(program: WebGLProgram): void;
  pixelStorei(pname: number, param: number): void;
  polygonOffset(factor: number, units: number): void;
  readPixels(
    x: number,
    y: number,
    width: number,
    height: number,
    format: number,
    type: number,
    pixels: ArrayBufferView
  ): void;
  renderbufferStorage(
    target: number,
    internalformat: number,
    width: number,
    height: number
  ): void;
  sampleCoverage(value: number, invert: bool): void;
  scissor(x: number, y: number, width: number, height: number): void;
  shaderSource(shader: WebGLShader, source: string): void;
  stencilFunc(func: number, ref: number, mask: number): void;
  stencilFuncSeparate(
    face: number,
    func: number,
    ref: number,
    mask: number
  ): void;
  stencilMask(mask: number): void;
  stencilMaskSeparate(face: number, mask: number): void;
  stencilOp(fail: number, zfail: number, zpass: number): void;
  stencilOpSeparate(
    face: number,
    fail: number,
    zfail: number,
    zpass: number
  ): void;
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    pixels: ArrayBufferView
  ): void;
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    format: number,
    type: number,
    pixels: ImageData
  ): void;
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    format: number,
    type: number,
    image: HTMLImageElement
  ): void;
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    format: number,
    type: number,
    canvas: HTMLCanvasElement
  ): void;
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    format: number,
    type: number,
    video: HTMLVideoElement
  ): void;
  texParameterf(target: number, pname: number, param: number): void;
  texParameteri(target: number, pname: number, param: number): void;
  texSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    width: number,
    height: number,
    format: number,
    type: number,
    pixels: ArrayBufferView
  ): void;
  texSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    format: number,
    type: number,
    pixels: ImageData
  ): void;
  texSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    format: number,
    type: number,
    image: HTMLImageElement
  ): void;
  texSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    format: number,
    type: number,
    canvas: HTMLCanvasElement
  ): void;
  texSubImage2D(
    target: number,
    level: number,
    xoffset: number,
    yoffset: number,
    format: number,
    type: number,
    video: HTMLVideoElement
  ): void;
  uniform1f(location: WebGLUniformLocation, x: number): void;
  uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;
  uniform1fv(location: WebGLUniformLocation, v: number[]): void;
  uniform1i(location: WebGLUniformLocation, x: number): void;
  uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;
  uniform1iv(location: WebGLUniformLocation, v: number[]): void;
  uniform2f(location: WebGLUniformLocation, x: number, y: number): void;
  uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;
  uniform2fv(location: WebGLUniformLocation, v: number[]): void;
  uniform2i(location: WebGLUniformLocation, x: number, y: number): void;
  uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;
  uniform2iv(location: WebGLUniformLocation, v: number[]): void;
  uniform3f(
    location: WebGLUniformLocation,
    x: number,
    y: number,
    z: number
  ): void;
  uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;
  uniform3fv(location: WebGLUniformLocation, v: number[]): void;
  uniform3i(
    location: WebGLUniformLocation,
    x: number,
    y: number,
    z: number
  ): void;
  uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;
  uniform3iv(location: WebGLUniformLocation, v: number[]): void;
  uniform4f(
    location: WebGLUniformLocation,
    x: number,
    y: number,
    z: number,
    w: number
  ): void;
  uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;
  uniform4fv(location: WebGLUniformLocation, v: number[]): void;
  uniform4i(
    location: WebGLUniformLocation,
    x: number,
    y: number,
    z: number,
    w: number
  ): void;
  uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;
  uniform4iv(location: WebGLUniformLocation, v: number[]): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation,
    transpose: bool,
    value: Float32Array
  ): void;
  uniformMatrix2fv(
    location: WebGLUniformLocation,
    transpose: bool,
    value: number[]
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation,
    transpose: bool,
    value: Float32Array
  ): void;
  uniformMatrix3fv(
    location: WebGLUniformLocation,
    transpose: bool,
    value: number[]
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation,
    transpose: bool,
    value: Float32Array
  ): void;
  uniformMatrix4fv(
    location: WebGLUniformLocation,
    transpose: bool,
    value: number[]
  ): void;
  useProgram(program: WebGLProgram): void;
  validateProgram(program: WebGLProgram): void;
  vertexAttrib1f(indx: number, x: number): void;
  vertexAttrib1fv(indx: number, values: Float32Array): void;
  vertexAttrib1fv(indx: number, values: number[]): void;
  vertexAttrib2f(indx: number, x: number, y: number): void;
  vertexAttrib2fv(indx: number, values: Float32Array): void;
  vertexAttrib2fv(indx: number, values: number[]): void;
  vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
  vertexAttrib3fv(indx: number, values: Float32Array): void;
  vertexAttrib3fv(indx: number, values: number[]): void;
  vertexAttrib4f(
    indx: number,
    x: number,
    y: number,
    z: number,
    w: number
  ): void;
  vertexAttrib4fv(indx: number, values: Float32Array): void;
  vertexAttrib4fv(indx: number, values: number[]): void;
  vertexAttribPointer(
    indx: number,
    size: number,
    type: number,
    normalized: bool,
    stride: number,
    offset: number
  ): void;
  viewport(x: number, y: number, width: number, height: number): void;
}

interface WebGLContextEvent extends Event {
  statusMessage: string;
  initWebGLContextEvent(
    typeArg: string,
    canBubbleArg: bool,
    cancelableArg: bool,
    statusMessageArg: string
  ): void;
}

//Extend the window object with cross Browser callbacks so TS will not complain
//Also add the (non-standard) Canvas Element parameter for performance improvement
interface WindowAnimationTiming {
  requestAnimationFrame(
    callback: FrameRequestCallback,
    canvas?: HTMLCanvasElement
  ): number;
  //msRequestAnimationFrame(callback: FrameRequestCallback, canvas ?: HTMLCanvasElement): number;
  mozRequestAnimationFrame(
    callback: FrameRequestCallback,
    canvas?: HTMLCanvasElement
  ): number;
  webkitRequestAnimationFrame(
    callback: FrameRequestCallback,
    canvas?: HTMLCanvasElement
  ): number;
  oRequestAnimationFrame(
    callback: FrameRequestCallback,
    canvas?: HTMLCanvasElement
  ): number;

  cancelRequestAnimationFrame(handle: number): void;
  //msCancelRequestAnimationFrame(handle: number): void;
  mozCancelRequestAnimationFrame(handle: number): void;
  webkitCancelRequestAnimationFrame(handle: number): void;
  oCancelRequestAnimationFrame(handle: number): void;
}

//To make WebGL work
interface HTMLCanvasElement {
  getContext(contextId: string, params: {}): WebGLRenderingContext;
}
