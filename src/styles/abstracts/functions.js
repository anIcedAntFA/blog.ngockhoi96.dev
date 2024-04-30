function alpha(color, blur) {
  return `color-mix(in srgb, ${color} ${blur}, transparent)`;
}

module.exports = { alpha };
