
#include "wasmGlue.h"

#include <glue/class.h>
#include <glue/enum.h>
#include <AACCodec/AACCodec.h>
// #include "aac-codec.h"



// class AACCodec {
// public:
//   std::string &play(string &s);  // Function declaration
// };

// // function definition outside the class

// std::string AACCodec::play(std::string s) {
//   std::reverse(s.begin(), s.end());
//   return s.data();
// }

glue::MapValue wasmGlue() {
  using namespace aaccodec;

  auto lib = glue::createAnyMap();
  // clang-format off
  // lib["AACCodec"] = glue::createClass<AACCodec>()
  //   .addConstructor()
  //   .addMethod("play", &AACCodec::play);

  lib["AACCodec"] = glue::createClass<AACCodec>()
    .addConstructor<std::string>()
    .addMethod("greet", &AACCodec::greet)
    .addMethod("sumArrayInt32", &AACCodec::sumArrayInt32)
    .addMethod("aacenc_init", &AACCodec::aacenc_init)
    .addMethod("aacenc_max_output_buffer_size", &AACCodec::aacenc_max_output_buffer_size)
    .addMethod("aacenc_frame_size", &AACCodec::aacenc_frame_size)
    .addMethod("aacenc_encode", &AACCodec::aacenc_encode)
    .addMethod("aacenc_close", &AACCodec::aacenc_close)
  ;

  lib["LanguageCode"] = glue::createEnum<LanguageCode>()
    .addValue("EN", LanguageCode::EN)
    .addValue("DE", LanguageCode::DE)
    .addValue("ES", LanguageCode::ES)
    .addValue("FR", LanguageCode::FR)
  ;

  // clang-format on

  return lib;
}
