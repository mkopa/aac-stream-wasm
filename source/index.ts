export {
  withWasm as withAACCodec,
  withWasmScope as withAACCodecScope,
  persistWasmValue as persistAACCodecValue,
  deletePersistedValue as deleteAACCodecValue,
  GlueModule as AACCodecModule,
  getWasm,
} from "./wasmWrapper";

export type { AACCodec, LanguageCode, Alloc } from "./WasmModule";
