const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new DashboardPlugin()
    ]
});