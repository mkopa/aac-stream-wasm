import {
  withAACCodec,
  withAACCodecScope,
  AACCodec,
  persistAACCodecValue,
  LanguageCode,
  deleteAACCodecValue,
} from "../source";

test("Calling wasm methods", async () => {
  await withAACCodec((aaccodecModule) => {
    const greeter = new aaccodecModule.AACCodec("Wasm");
    expect(greeter.greet(aaccodecModule.LanguageCode.EN)).toBe("Hello, Wasm!");
  });
});

// non-public helper functions for testing
import {
  __getCurrentWasmScope,
  __getCurrentWasmScopeStackSize,
} from "../source/wasmWrapper";

test("Scoping", async () => {
  expect(__getCurrentWasmScopeStackSize()).toBe(0);
  await withAACCodec((greeterModule) => {
    expect(__getCurrentWasmScopeStackSize()).toBe(1);
    expect(__getCurrentWasmScope().length).toBe(0);
    new greeterModule.AACCodec("Outer");
    expect(__getCurrentWasmScope().length).toBe(1);
    withAACCodecScope(() => {
      expect(__getCurrentWasmScopeStackSize()).toBe(2);
      expect(__getCurrentWasmScope().length).toBe(0);
      new greeterModule.AACCodec("Inner 1");
      expect(__getCurrentWasmScope().length).toBe(1);
      new greeterModule.AACCodec("Inner 2");
      expect(__getCurrentWasmScope().length).toBe(2);
    });
    expect(__getCurrentWasmScopeStackSize()).toBe(1);
  });
  expect(__getCurrentWasmScopeStackSize()).toBe(0);
});

test("Persisting values", async () => {
  let aaccodec: AACCodec;
  let language: LanguageCode;

  await withAACCodec((greeterModule) => {
    aaccodec = persistAACCodecValue(new greeterModule.AACCodec("Global"));
    language = greeterModule.LanguageCode.EN;
    expect(__getCurrentWasmScope().length).toBe(0);
  }).then(() => {
    expect(aaccodec.greet(language)).toBe("Hello, Global!");
    deleteAACCodecValue(aaccodec);
  });
});
