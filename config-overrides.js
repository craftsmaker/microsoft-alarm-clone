module.exports = function(config,env){
    config.target = "electron-renderer";

    console.log(env);

    config.node =  {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    };

    return config;
}