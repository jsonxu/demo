fis.config.set('pack', {
    'pkg/lib.js': [
        '/app_js/underscore/**.js',
        '/app_css/backbone/**.js',
        '/app_img/jquery/**.js',
        '/modules/vendor/**.js',
        '/modules/common/**.js'
    ]
});

//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
//fis.config.set('roadmap.domain', 'http://www.pingan.com');

fis.config.merge({
    roadmap : {
        ext : {
            //less后缀的文件将输出为css后缀
            //并且在parser之后的其他处理流程中被当做css文件处理
            less : 'css',
            //md后缀的文件将输出为html文件
            //并且在parser之后的其他处理流程中被当做html文件处理
            md : 'html'
        },
        domain : {
            //所有css文件添加http://localhost:8080作为域名
            '**.css' : 'http://css2.pingan.com',
            '**.less' : 'http://css2.pingan.com',
            '**.scss' : 'http://css2.pingan.com',
            '**.js' : 'http://script2.pingan.com',
            '**.jpg' : 'http://img2.pingan.com',
            '**.gif' : 'http://img2.pingan.com',
            '**.png' : 'http://img2.pingan.com'
        },
        path : [
            {
                //所有的js文件
                reg : '**.js',
                //发布到/static/js/xxx目录下
                release : '/static/app_js$&'
            },
            {
                //所有的css文件
                reg : '**.html',
                //发布到/static/css/xxx目录下
                release : '/static/page$&'
            },
            {
                //所有的css文件
                reg : '**.css',
                //发布到/static/css/xxx目录下
                release : '/static/app_css$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/app_img\/(.*\.(?:png|gif|.jpg))/i,
                //发布到/static/pic/xxx目录下
                release : '/app_img/$1'
            }
        ]
    }
});

//如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
//否则png图片透明部分在ie下会显示灰色背景
//使用spmx release命令时，添加--optimize或-o参数即可生效
//fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
//使用pure release命令时，添加--lint或-l参数即可生效
fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

//开始autoCombine可以将零散资源进行自动打包
fis.config.set('settings.postpackager.simple.autoCombine', true);
//开启autoReflow使得在关闭autoCombine的情况下，依然会优化脚本与样式资源引用位置
fis.config.set('settings.postpackager.simple.autoReflow', true);

//配置FIS中使用csssprites
fis.config.set('modules.spriter', 'csssprites');

//为所有样式资源开启csssprites
fis.config.set('roadmap.path', [{
    reg: '**.css',
    useSprite: true
}]);

//如果想配置html中的css片段进行csssprites处理，可以像下面这样配置
fis.config.set('settings.spriter.csssprites', {
    //开启模板内联css处理,默认关闭
    htmlUseSprite: true,
    //默认针对html原生<style></style>标签内的内容处理。
    //用户可以通过配置styleTag来扩展要识别的css片段
    //以下是默认<style></style>标签的匹配正则
    styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig

    //**styleReg规则**
    //1. 默认不配置styleReg，仅支持html中默认style标签中的css内容
    //2. 配置styleReg时候，仅支持styleReg匹配到的内容。
    //3. styleReg正则必须捕获三个分组，
    //     $1为：开始标签（start tag），
    //     $2为：内容(content) ,
    //     $3为：结束标签(end tag)
});

//设置csssprites的合并间距和排列方式，线性排列的layout参数是linear
fis.config.set('settings.spriter.csssprites', {
    //图之间的边距
    margin: 10,
    //使用矩阵排列方式，默认为线性`linear`
    layout: 'matrix'
});

//如果想配置html中的css片段进行csssprites处理，可以像下面这样配置
fis.config.set('settings.spriter.csssprites', {
    //开启模板内联css处理,默认关闭
    htmlUseSprite: true,
    //默认针对html原生<style></style>标签内的内容处理。
    //用户可以通过配置styleTag来扩展要识别的css片段
    //以下是默认<style></style>标签的匹配正则
    styleReg: /(<style(?:(?=\s)[\s\S]*?["'\s\w\/\-]>|>))([\s\S]*?)(<\/style\s*>|$)/ig

    //**styleReg规则**
    //1. 默认不配置styleReg，仅支持html中默认style标签中的css内容
    //2. 配置styleReg时候，仅支持styleReg匹配到的内容。
    //3. styleReg正则必须捕获三个分组，
    //     $1为：开始标签（start tag），
    //     $2为：内容(content) ,
    //     $3为：结束标签(end tag)
});

//项目排除掉_xxx.scss，这些属于框架文件，不用关心
//fis.config.set('project.exclude', '**/_*.scss');
//fis.config.set('project.exclude', '**/g/*.*');
//scss后缀的文件，用fis-parser-sass插件编译
//fis.config.set('modules.parser.scss', 'sass');
//scss文件产出为css文件
//fis.config.set('roadmap.ext.scss', 'css');