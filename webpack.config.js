var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require("webpack");
module.exports =
{
    entry:
    {
        //入口文件
        "index":__dirname+'/src/jssrc/index.js',
    },
    output: {
        path: __dirname+'/src/webapp/js',  //输出文件夹
        filename:'[name].js'   //最终打包生成的文件名(只是文件名，不带路径的哦)
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    externals: {

    },
    module:{
        loaders:[
            {test:/\.js$/,loader:"babel-loader",query:{compact:true}},
            //这里肯定要加入n个loader 譬如vue-loader、babel-loader、css-loader等等
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: __dirname+'/src/webapp/index.html',   //目标文件
            template: __dirname+'/src/html/index.html', //模板文件
            inject:'body',
            hash:true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
            chunks:["index"]
        })

    ]
}