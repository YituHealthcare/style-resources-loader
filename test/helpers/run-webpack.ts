import webpack, {Configuration} from 'webpack';

const runWebpack = (config: Configuration) =>
    new Promise((resolve, reject) =>
        webpack(config, (webpackErr, stats) => {
            const err =
                webpackErr ||
                (stats.hasErrors() && stats.compilation.errors[0]) ||
                (stats.hasWarnings() && stats.compilation.warnings[0]);

            err ? reject(err) : resolve();
        }),
    );

export default runWebpack;
