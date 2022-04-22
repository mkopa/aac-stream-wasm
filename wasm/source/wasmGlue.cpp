
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

class Alloc
{
public:
// public area. visible to the 'user' of the new data type.
    Alloc()
    { 
        memPtr = (uint8_t *)malloc(1024*8);
    }
    ~Alloc() {
      free(memPtr);
    }
    uint8_t *getMem() {
      return memPtr;
    }

    uint32_t getStrLen(std::string data) {
      return data.length();
    }

    std::string reverse(std::string data) {
      std::string reversed;
      for(int n = data.length()-1; n >= 0; n--){
        reversed.push_back(data[n]);
      }
      return reversed;
    }

    std::vector<uint8_t> reverseBinary(std::vector<uint8_t> data) {
      std::vector<uint8_t> reversed;
      for(int n = data.size()-1; n >= 0; n--){
        reversed.push_back(data[n]);
      }
      return reversed;
    }

    std::string base64test(std::string data) {
       //using namespace aaccodec;
     // AACCodec codec();// = new AACCodec::AACCodec(std::string("ok"));
     // codec.b64_encode ((const uint8_t *)"lalala", 6);
      
      // int siz = codec
    }

    // uint8_t[] doIt(uint8_t[] data) {
    //   return data;
    // }

    
private:
// no one can see anything in this area except you.
    uint8_t* memPtr;
};

uint8_t *alloc(size_t size) {
  return (uint8_t *)malloc(size);
}

glue::MapValue wasmGlue() {
  using namespace aaccodec;

  auto lib = glue::createAnyMap();
  // clang-format off
  // lib["AACCodec"] = glue::createClass<AACCodec>()
  //   .addConstructor()
  //   .addMethod("play", &AACCodec::play);
  lib["Alloc"] = glue::createClass<Alloc>()
    .addConstructor()
    .addMethod("getMem", &Alloc::getMem)
    .addMethod("getStrLen", &Alloc::getStrLen)
    .addMethod("reverse", &Alloc::reverse)
    .addMethod("reverseBinary", &Alloc::reverseBinary)
  ;

  lib["AACCodec"] = glue::createClass<AACCodec>()
    .addConstructor()
    .addMethod("greet", &AACCodec::greet)
    // .addMethod("alloc", &alloc)
    .addMethod("sumArrayInt32", &AACCodec::sumArrayInt32)
    .addMethod("aacenc_init", &AACCodec::aacenc_init)
    .addMethod("aacenc_max_output_buffer_size", &AACCodec::aacenc_max_output_buffer_size)
    .addMethod("aacenc_frame_size", &AACCodec::aacenc_frame_size)
    .addMethod("aacenc_encode", &AACCodec::aacenc_encode)
    .addMethod("aacenc_close", &AACCodec::aacenc_close)
    .addMethod("aacEncoderInit", &AACCodec::aacEncoderInit)
    .addMethod("aacEncodeB64", &AACCodec::aacEncodeB64)
    .addMethod("base64test", &AACCodec::base64test)
    .addMethod("aacDecoderInit", &AACCodec::aacDecoderInit)
    .addMethod("aacDecodeB64", &AACCodec::aacDecodeB64)
    // .addMethod("base64test", &AACCodec::base64test)
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
