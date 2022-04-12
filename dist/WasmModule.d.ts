/** @customConstructor AACCodec.__new */
declare class AACCodec {
  private unique_2770090898231993425: "aaccodec::AACCodec"
  constructor(arg0: string)
  aacenc_close(): void
  aacenc_encode(arg1: unknown /* char * */, arg2: number, arg3: number, arg4: unknown /* char * */, arg5: number): number
  aacenc_frame_size(): number
  aacenc_init(arg1: number, arg2: number, arg3: number, arg4: number): number
  aacenc_max_output_buffer_size(): number
  greet(arg1: LanguageCode): string
  sumArrayInt32(arg1: unknown /* int * */, arg2: number): number
}
declare class LanguageCode {
  private unique_10292993915453334805: "aaccodec::LanguageCode"
  static DE: LanguageCode
  static EN: LanguageCode
  static ES: LanguageCode
  static FR: LanguageCode
  __eq(arg1: LanguageCode): boolean
  value(): number
}

export type GlueModule = {
  LanguageCode: typeof LanguageCode;
  AACCodec: typeof AACCodec;
}
export type EmGlueModule = {
  setConstructCallback: (callback: (v: {delete(): void}) => void) => void;
  getExceptionMessage: (ptr: number) => string;
}
export type EmscriptenModule = { callMain: (...args: any[]) => void }
export type PostRunModule = GlueModule & EmGlueModule & EmscriptenModule
export type PreRunModule = { then(arg: (module: PostRunModule) => void): PreRunModule }
export default function(): PreRunModule
