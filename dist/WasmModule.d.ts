/** @customConstructor AACCodec.__new */
declare class AACCodec {
  private unique_2770090898231993425: "aaccodec::AACCodec"
  constructor()
  aacEncodeB64(arg1: string): string
  aacEncoderInit(arg1: number, arg2: number, arg3: number, arg4: number): number
  aacenc_close(): void
  aacenc_encode(arg1: unknown /* char * */, arg2: number, arg3: number, arg4: unknown /* char * */, arg5: number): number
  aacenc_frame_size(): number
  aacenc_init(arg1: number, arg2: number, arg3: number, arg4: number): number
  aacenc_max_output_buffer_size(): number
  base64test(arg1: string): string
  greet(arg1: LanguageCode): string
  sumArrayInt32(arg1: unknown /* signed char * */, arg2: number): number
}
/** @customConstructor Alloc.__new */
declare class Alloc {
  private unique_3378670364616043382: "Alloc"
  constructor()
  getMem(): unknown /* unsigned char * */
  getStrLen(arg1: string): number
  reverse(arg1: string): string
  reverseBinary(arg1: unknown /* std::vector<unsigned char> */): unknown /* std::vector<unsigned char> */
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
  AACCodec: typeof AACCodec;
  LanguageCode: typeof LanguageCode;
  Alloc: typeof Alloc;
}
export type EmGlueModule = {
  setConstructCallback: (callback: (v: {delete(): void}) => void) => void;
  getExceptionMessage: (ptr: number) => string;
}
export type EmscriptenModule = { callMain: (...args: any[]) => void }
export type PostRunModule = GlueModule & EmGlueModule & EmscriptenModule
export type PreRunModule = { then(arg: (module: PostRunModule) => void): PreRunModule }
export default function(): PreRunModule
