#include "aac-codec.h"
#include <iostream>
#include <algorithm>
#include <iterator>

std::string AACCodec::play(std::string s) {
  std::reverse(s.begin(), s.end());
  return s.data();
}