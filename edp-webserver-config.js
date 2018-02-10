function mockHandler(map) {
    return function (context) {
        var pathname = map[context.request.pathname];

        if(!pathname){ // 支持正则匹配
            Object.keys(map).some(function(url){
                if(new RegExp(url).test(context.request.pathname)){
                    pathname = map[url];
                    return true;
                }
            });
        }

        if (pathname.match(/\.php$/)) {
            return php(null, null, function (context) {
                context.request.pathname = pathname;
                return context.request;
            }).call(this, context);
        }
        else {
            var filename = require('path').normalize( __dirname + '/' + pathname);
            context.content = require('fs').readFileSync(filename, 'utf-8');
        }
    };
}

exports.port = 8888;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;
exports.getLocations = function () {
    return [
        {
            location: /\/$/,
            handler: home( 'index.html' )
        },
        {
            location: /^\/redirect-local/,
            handler: redirect('redirect-target', false)
        },
        {
            location: /^\/redirect-remote/,
            handler: redirect('http://www.baidu.com', false)
        },
        {
            location: /^\/redirect-target/,
            handler: content('redirectd!')
        },
        {
            location: '/empty',
            handler: empty()
        },
        {
            location: /\.css($|\?)/,
            handler: [
                autoless()
            ]
        },
        {
            location: /\.less($|\?)/,
            handler: [
                file(),
                less()
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                proxyNoneExists()
            ]
        },
        {
            location: /^\/api\//,
            handler: [
                mockHandler(require('./mock/debug'))
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};