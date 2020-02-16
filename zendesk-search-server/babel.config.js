module.exports = {
  plugins: [
    "@babel/plugin-transform-spread",
    "@babel/proposal-object-rest-spread"
  ],
  presets: [
    ["@babel/preset-env", getPresetEnvConfig()],
    "@babel/preset-typescript"
  ]
};

function getPresetEnvConfig() {
  const config = {
    useBuiltIns: "entry"
  };

  return config;
}
