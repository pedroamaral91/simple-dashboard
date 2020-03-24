const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function(config, env) {
  config = rewireReactHotLoader(config, env);
  config = rewireStyledComponents(config, env, {
    // eslint-disable-next-line no-process-env
    displayName: process.env.NODE_ENV === 'development',
    pure: true,
    transpileTemplateLiterals: true,
    fileName: false,
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };

  return config;
};
