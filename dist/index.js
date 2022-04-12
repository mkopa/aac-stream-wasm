"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWasm = exports.deleteAACCodecValue = exports.persistAACCodecValue = exports.withAACCodecScope = exports.withAACCodec = void 0;
var wasmWrapper_1 = require("./wasmWrapper");
Object.defineProperty(exports, "withAACCodec", { enumerable: true, get: function () { return wasmWrapper_1.withWasm; } });
Object.defineProperty(exports, "withAACCodecScope", { enumerable: true, get: function () { return wasmWrapper_1.withWasmScope; } });
Object.defineProperty(exports, "persistAACCodecValue", { enumerable: true, get: function () { return wasmWrapper_1.persistWasmValue; } });
Object.defineProperty(exports, "deleteAACCodecValue", { enumerable: true, get: function () { return wasmWrapper_1.deletePersistedValue; } });
Object.defineProperty(exports, "getWasm", { enumerable: true, get: function () { return wasmWrapper_1.getWasm; } });
//# sourceMappingURL=index.js.map