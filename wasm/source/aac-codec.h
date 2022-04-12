#ifndef AAC_CODEC_H
#define AAC_CODEC_H
#pragma once

#include <iostream>
#include <algorithm>
#include <iterator>

class AACCodec {
public:
    AACCodec();
    ~AACCodec();
    std::string play(std::string);
};

#endif
