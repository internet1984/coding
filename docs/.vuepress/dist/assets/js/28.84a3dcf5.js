(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{259:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"laravel-教程文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-教程文档","aria-hidden":"true"}},[t._v("#")]),t._v(" LARAVEL 教程文档")]),t._v(" "),e("blockquote",[e("p",[t._v("后盾人 www.houdunren.com  作者："),e("a",{attrs:{href:"http://www.aoxiangjun.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("向军大叔"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("Laravel是一套简洁、优雅的PHP Web开发框架(PHP Web Framework)。它可以让你从面条一样杂乱的代码中解脱出来；它可以帮你构建一个完美的网络APP，而且每行代码都可以简洁、富于表达力。")]),t._v(" "),e("p",[t._v("Laravel 是 基于 PHP 语言的 Web 开源框架，采用了 MVC 的架构模式，在 2011 年 6 月正式发布了首个版本。\n深度集成 PHP 强大的扩展包（Composer）生态与 PHP 开发者广大的受众群，让 Laravel 在发布之后的短短几年时间得到了极其迅猛的发展。我们通过 Google Trends 提供的趋势图（图 1.1）可以看出，Laravel 框架在过去十年，其增长速度迅猛。")]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/FA2AB3FA-2B6F-4BC0-881B-03CB09668B37-0343581.png",alt:"FA2AB3FA-2B6F-4BC0-881B-03CB09668B37"}})]),t._v(" "),e("p",[e("strong",[t._v("laravel是GitHub上PHP项目排名第一的")])]),t._v(" "),e("p",[e("img",{attrs:{src:"assets/A7BA857C-974D-4B0D-A4F6-6D77E0F51743-0343658.png",alt:"A7BA857C-974D-4B0D-A4F6-6D77E0F51743"}})]),t._v(" "),e("h2",{attrs:{id:"版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),e("h4",{attrs:{id:"lts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lts","aria-hidden":"true"}},[t._v("#")]),t._v(" Lts")]),t._v(" "),e("p",[t._v("Long-Term Support,长期技术支持（版本），该版本拥有较长的维护周期，是商业项目优先考虑使用的版本。")]),t._v(" "),e("h4",{attrs:{id:"常规版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规版","aria-hidden":"true"}},[t._v("#")]),t._v(" 常规版")]),t._v(" "),e("p",[t._v("提供6个月的bug修复，维护周期短但功能较新，学习为了使用新功能可采用这个版本。")]),t._v(" "),e("h2",{attrs:{id:"全新安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全新安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 全新安装")]),t._v(" "),e("p",[t._v("使用composer安装laravel框架")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("composer create-project --prefer-dist laravel/laravel blog\n")])])]),e("p",[t._v("安装完 Laravel 之后，你必须将 web 服务器更目录指向 "),e("code",[t._v("public")]),t._v(" 目录。该目录下的 "),e("code",[t._v("index.php")]),t._v(" 文件将作为所有进入应用程序的 HTTP 请求的前端控制器。")]),t._v(" "),e("p",[t._v("需要修改 "),e("code",[t._v(".env")]),t._v(" 配置文件中的 "),e("code",[t._v("APP_NAME")]),t._v(" 与 "),e("code",[t._v("APP_URL")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("APP_NAME=后盾人\nAPP_URL=http://houdunren.com\n")])])]),e("h2",{attrs:{id:"mysql低版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql低版本","aria-hidden":"true"}},[t._v("#")]),t._v(" Mysql低版本")]),t._v(" "),e("p",[t._v("如果你是在版本低于 5.7.7 的 MySQL release 上创建索引，那就需要你手动配置迁移生成的默认字符串长度。")]),t._v(" "),e("p",[t._v("在 AppServiceProvider.php 文件里的 boot 方法里设置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public function boot()\n{\n \t\\Schema::defaultStringLength(191);\n}\n")])])]),e("h2",{attrs:{id:"下载他人项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载他人项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 下载他人项目")]),t._v(" "),e("p",[t._v("检出别人的项目时，因为.env、verdor、node_moduels文件或目录是不提交到版本库的，造成检出后项目不能正常运行。需要以下几步处理：")]),t._v(" "),e("ol",[e("li",[t._v("composer install")]),t._v(" "),e("li",[t._v("cnpm install")]),t._v(" "),e("li",[t._v("复制 .env.example 文件为 .env文件")]),t._v(" "),e("li",[t._v("执行  "),e("code",[t._v("php artisan key:generate")]),t._v("  生成应用秘钥")]),t._v(" "),e("li",[t._v("修改 .env 配置文件其他数据为你网站数据（比如数据库配置等）")])]),t._v(" "),e("h2",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),e("h4",{attrs:{id:"路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),e("p",[t._v("laravel 的路由类型很多，为了对大家不造成学习压力。我们先讲解基础的使用，后面会深入讲到其他路由处理方式。")]),t._v(" "),e("p",[t._v("修改 routes/web.php 路由表文件。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Route::get('/home', 'TestController@home');\nRoute::get('/lists', 'TestController@lists');\nRoute::get('/show', 'TestController@show');\n")])])]),e("h4",{attrs:{id:"控制器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),e("p",[t._v("创建控制器")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan make:controller TestController\n")])])]),e("p",[t._v("内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<?php namespace App\\Http\\Controllers;\nuse Illuminate\\Http\\Request;\nclass TestController extends Controller\n{\n\tpublic function home(){\n\t\treturn __METHOD__;\n\t}\n\n\tpublic function lists(){\n\t\treturn __METHOD__;\n\t}\n\n\tpublic function show(){\n\t\treturn __METHOD__;\n\t}\n}\n")])])]),e("p",[t._v("浏览器中访问 "),e("code",[t._v("http://laravel.hd/lists")]),t._v(" 显示内容如下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("App\\Http\\Controllers\\TestController::lists\n")])])]),e("p",[t._v("以上就是laravel中基本路由与控制器的操作流程。")]),t._v(" "),e("h2",{attrs:{id:"视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 视图")]),t._v(" "),e("p",[t._v("视图就是我们显示的页面，视图保存在 "),e("code",[t._v("resources/views")]),t._v(" 文件夹中。")]),t._v(" "),e("h4",{attrs:{id:"继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),e("p",[t._v("模板继承是为了共用相同页面数据，减少代码冗余。")]),t._v(" "),e("p",[t._v("下面定义 views/layouts/master.blade.php 文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>\n\t\t@yield('title', '后盾人')\n\t</title>\n</head>\n<body>\n\t@yield('content')\n</body>\n</html>\n")])])]),e("p",[t._v("然后在子模板中引入父模板，并使用section替换父模板中yield定义的占位内容。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@extends('layouts.master')\n@section('title','后盾人 - 首页')\n@section('content')\n\t<h1>首页1</h1>\n@endsection\n")])])]),e("h4",{attrs:{id:"include"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#include","aria-hidden":"true"}},[t._v("#")]),t._v(" include")]),t._v(" "),e("p",[t._v("include用于加载外部模板")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@include('user.show')\n")])])]),e("p",[t._v("被引入的视图会继承父视图中的所有数据，同时也可以向引入的视图传递额外的数组数据：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@include('view.name', ['some' => 'data'])\n")])])]),e("h4",{attrs:{id:"includeif"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#includeif","aria-hidden":"true"}},[t._v("#")]),t._v(" includeIf")]),t._v(" "),e("p",[t._v("当然，如果尝试使用 "),e("code",[t._v("@include")]),t._v(" 去引入一个不存在的视图，Laravel 会抛出错误。如果想引入一个可能存在或可能不存在的视图，就使用 "),e("code",[t._v("@includeIf")]),t._v(" 指令:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@includeIf('view.name', ['some' => 'data'])\n")])])]),e("h4",{attrs:{id:"includewhen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#includewhen","aria-hidden":"true"}},[t._v("#")]),t._v(" includeWhen")]),t._v(" "),e("p",[t._v("如果要根据给定的布尔条件 "),e("code",[t._v("@include")]),t._v(" 视图，可以使用 "),e("code",[t._v("@includeWhen")]),t._v(" 指令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@includeWhen($boolean, 'view.name', ['some' => 'data'])\n")])])]),e("h4",{attrs:{id:"stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stack","aria-hidden":"true"}},[t._v("#")]),t._v(" stack")]),t._v(" "),e("p",[t._v("Blade 可以被推送到在其他视图或布局中的其他位置渲染的命名堆栈。这在子视图中指定所需的 JavaScript 库时非常有用：")]),t._v(" "),e("p",[t._v("父模板使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<head>\n    \x3c!-- Head Contents --\x3e\n    @stack('scripts')\n</head>\n")])])]),e("p",[t._v("子模板")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@push('scripts')\n    <script src=\"/example.js\"><\/script>\n@endpush\n")])])]),e("h4",{attrs:{id:"component-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-slot","aria-hidden":"true"}},[t._v("#")]),t._v(" component&slot")]),t._v(" "),e("p",[t._v("组件相比 @extends 更灵活些，下面是定义一个 "),e("code",[t._v("modal")]),t._v(" 组件。")]),t._v(" "),e("p",[t._v("组件中的变量可以在调用组件时传参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@component('components.modal',['title'=>'你好','url'=>route('home')])\n")])])]),e("p",[t._v("也可以使用 "),e("code",[t._v("slot")]),t._v(" 标签赋值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@slot(\'footer\')\n<button type="button" data-dismiss="modal" class="btn btn-secondary md-close">cancel</button>\n@endslot\n')])])]),e("p",[e("strong",[t._v("示例")])]),t._v(" "),e("p",[t._v("定义一个模态框组件 "),e("code",[t._v("view/components/modal.blade.php")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<form action="{{$url}}" method="post" {!!isset($id)?"id=\\"$id\\"":\'\'!!}>\n    @csrf\n    @isset($method) @method($method) @endif\n    <div id="form-bp1" tabindex="-1" role="dialog" class="modal fade colored-header colored-header-primary">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header modal-header-colored">\n                    <h3 class="modal-title">\n                        @isset($title) {{$title}} @endisset\n                    </h3>\n                    <button type="button" data-dismiss="modal" aria-hidden="true" class="close md-close"><span class="mdi mdi-close"></span></button>\n                </div>\n                <div class="modal-body">\n                    {{$slot}}\n                </div>\n                <div class="modal-footer">\n                    @isset($footer)\n                        {{$footer}}\n                    @else\n                        <button type="button" data-dismiss="modal" class="btn btn-secondary md-close">关闭</button>\n                        <button type="button" data-dismiss="modal" class="btn btn-primary md-close">保存</button>\n                    @endif\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n')])])]),e("p",[t._v("模板中调用 "),e("code",[t._v("modal")]),t._v(" 组件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@component(\'components.modal\',[\'title\'=>\'你好\',\'url\'=>route(\'home\'),\'method\'=>\'PUT\'])\n<div class="form-group row">\n <label for="inputText3" class="col-12 col-sm-3 col-form-label text-sm-right">\n   Input Text\n </label>\n <div class="col-12 col-sm-12 col-lg-6">\n  <input id="inputText3" type="text" class="form-control form-control-sm">\n </div>\n</div>\n@slot(\'footer\')\n<button type="button" data-dismiss="modal" class="btn btn-secondary md-close">cancel</button>\n<button type="button" data-dismiss="modal" class="btn btn-primary md-close">save</button>\n@endslot\n@endcomponent\n')])])]),e("h3",{attrs:{id:"动态视图目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态视图目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态视图目录")]),t._v(" "),e("p",[t._v("有时我们需要经常改变视图目录")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$finder = app('view')->getFinder();\n$finder->prependLocation(public_path('templates/'));\n")])])]),e("h2",{attrs:{id:"脚手架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架","aria-hidden":"true"}},[t._v("#")]),t._v(" 脚手架")]),t._v(" "),e("p",[t._v("安装cnpm 使用国内镜像，安装速度快。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])])]),e("p",[t._v("根据packagist.json 安装前端库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cnpm install\ncnpm install cross-env\n")])])]),e("p",[t._v("我们需要在 resources/assets 目录下的js 与 css 目录中编写前端文件。")]),t._v(" "),e("p",[e("strong",[t._v("执行编译")])]),t._v(" "),e("p",[t._v("编写好文件事我们需要执行编译操作，生成可供浏览器访问的文件，默认生成在 public/css 与 public/js目录中")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run dev\n")])])]),e("p",[t._v("引入编译好的样式文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<link rel="stylesheet" href="/css/app.css">\n')])])]),e("p",[t._v("文件监听**")]),t._v(" "),e("p",[t._v("每次修改都手动编译效率很低，执行以下命令后Webpack 会在检测到文件更改时自动重新编译资源：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run watch\n")])])]),e("p",[t._v("在某些环境中，当文件更改时，Webpack 不会更新。如果系统出现这种情况，请考虑使用 "),e("code",[t._v("watch-poll")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run watch-poll\n")])])]),e("p",[e("strong",[t._v("Bootstrap")])]),t._v(" "),e("p",[t._v("在app.scss 文件中定义：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@import '~bootstrap/scss/bootstrap'; \n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);