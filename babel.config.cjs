module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }], // Corrección de "esmodule" a "esmodules"
    ['@babel/preset-react', { runtime: 'automatic' }], // Corrección de "aumatic" a "automatic"
  ]
};
