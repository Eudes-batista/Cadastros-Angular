const PROXY_CONFIG = [{
    context: ['/api'],
    target: 'http://192.168.0.104:4200',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
}];

module.exports = PROXY_CONFIG;