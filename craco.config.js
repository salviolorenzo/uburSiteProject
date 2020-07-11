const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = function({ env }) {
	return {
		reactScriptsVersion : 'react-scripts' /* (default value) */,
		style               : {
			modules : {
				localIdentName : ''
			},
			css     : {
				loaderOptions : {
					/* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
				},
				loaderOptions : (cssLoaderOptions, { env, paths }) => {
					return cssLoaderOptions;
				}
			},
			sass    : {
				loaderOptions : {
					/* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
				},
				loaderOptions : (sassLoaderOptions, { env, paths }) => {
					return sassLoaderOptions;
				}
			},
			postcss : {
				mode          : 'extends' /* (default value) */ || 'file',
				plugins       : [],
				env           : {
					autoprefixer : {
						/* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
					},
					stage        : 3 /* Any valid stages: https://cssdb.org/#staging-process. */,
					features     : {
						/* Any CSS features: https://preset-env.cssdb.org/features. */
					}
				},
				loaderOptions : {
					/* Any postcss-loader configuration options: https://github.com/postcss/postcss-loader. */
				},
				loaderOptions : (postcssLoaderOptions, { env, paths }) => {
					return postcssLoaderOptions;
				}
			}
		},
		eslint              : {
			enable : true /* (default value) */,
			mode   : 'extends' /* (default value) */ || 'file'
		},
		babel               : {
			presets       : [],
			plugins       : [],
			loaderOptions : {
				/* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
			},
			loaderOptions : (babelLoaderOptions, { env, paths }) => {
				return babelLoaderOptions;
			}
		},
		typescript          : {
			enableTypeChecking : true /* (default value)  */
		},
		webpack             : {
			alias     : {},
			plugins   : [
				new CompressionPlugin({
					//gzip plugin
					filename  : '[path].gz[query]',
					algorithm : 'gzip',
					test      : /\.(js|css|html|svg)$/,
					threshold : 8192,
					minRatio  : 0.8
				}),
				new BrotliPlugin({
					//brotli plugin
					asset     : '[path].br[query]',
					test      : /\.(js|css|html|svg)$/,
					threshold : 10240,
					minRatio  : 0.8
				})
			],
			configure : {
				/* Any webpack configuration options: https://webpack.js.org/configuration */
			},
			configure : (webpackConfig, { env, paths }) => {
				return webpackConfig;
			}
		},
		jest                : {
			babel     : {
				addPresets : true /* (default value) */,
				addPlugins : true /* (default value) */
			},
			configure : {
				/* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */
			},
			configure : (jestConfig, { env, paths, resolve, rootDir }) => {
				return jestConfig;
			}
		},
		devServer           : {
			/* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver. */
		},
		devServer           : (devServerConfig, { env, paths, proxy, allowedHost }) => {
			return devServerConfig;
		},
		plugins             : [
			{
				plugin  : {
					overrideCracoConfig   : ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
						return cracoConfig;
					},
					overrideWebpackConfig : ({
						webpackConfig,
						cracoConfig,
						pluginOptions,
						context       : { env, paths }
					}) => {
						return webpackConfig;
					}
				},
				options : {}
			}
		]
	};
};
