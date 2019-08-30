(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{201:function(t,a,e){"use strict";e.r(a);var r=e(0),v=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("p",[t._v("Mattermost 预装包包含 Mattermost 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。")]),t._v(" "),e("h2",{attrs:{id:"路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 路径")]),t._v(" "),e("h3",{attrs:{id:"mattermost"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mattermost","aria-hidden":"true"}},[t._v("#")]),t._v(" Mattermost")]),t._v(" "),e("p",[t._v("Mattermost 安装目录： "),e("em",[t._v("/opt/mattermost/")]),e("br"),t._v("\nMattermost 配置文件： "),e("em",[t._v("/opt/mattermost/config/config.json")]),e("br"),t._v("\nMattermost 数据目录： "),e("em",[t._v("/opt/mattermost/data")]),e("br"),t._v("\nMattermost 日志目录： "),e("em",[t._v("/opt/mattermost/logs")])]),t._v(" "),e("blockquote",[e("p",[t._v("Metabase 配置文件中包含数据库连接信息，更改了 MySQL 数据库账号密码，此处也需要对应修改")])]),t._v(" "),e("h3",{attrs:{id:"go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go","aria-hidden":"true"}},[t._v("#")]),t._v(" Go")]),t._v(" "),e("p",[t._v("Mattermost 使用 Go 语言开发，镜像默认支持 Go 程序部署")]),t._v(" "),e("h3",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),e("p",[t._v("Nginx 虚拟主机配置文件："),e("em",[t._v("/etc/nginx/conf.d/default.conf")]),e("br"),t._v("\nNginx 主配置文件： "),e("em",[t._v("/etc/nginx/nginx.conf")]),e("br"),t._v("\nNginx 日志文件： "),e("em",[t._v("/var/log/nginx/")])]),t._v(" "),e("h3",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[t._v("#")]),t._v(" MYSQL")]),t._v(" "),e("p",[t._v("MySQL 安装路径: "),e("em",[t._v("/usr/local/mysql")]),e("br"),t._v("\nMySQL 数据文件 "),e("em",[t._v("/data/mysql")]),e("br"),t._v("\nMySQL 配置文件: "),e("em",[t._v("/etc/my.cnf")]),e("br"),t._v("\nMySQL 可视化管理地址: "),e("em",[t._v("http://服务器公网IP:9090")]),t._v("，用户名和密码请见 "),e("router-link",{attrs:{to:"/zh/stack-accounts.html"}},[t._v("账号密码")]),t._v(" 章节。")],1),t._v(" "),e("h2",{attrs:{id:"端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端口号","aria-hidden":"true"}},[t._v("#")]),t._v(" 端口号")]),t._v(" "),e("p",[t._v("下面是您在使用本镜像过程中，需要用到的端口号，请通过 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云控制台安全组"),e("OutboundLink")],1),t._v("进行设置")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("端口号")]),t._v(" "),e("th",[t._v("用途")]),t._v(" "),e("th",[t._v("必要性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("MySQL")]),t._v(" "),e("td",[t._v("3306")]),t._v(" "),e("td",[t._v("远程连接MySQL")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("HTTP")]),t._v(" "),e("td",[t._v("80")]),t._v(" "),e("td",[t._v("通过http访问Metabase")]),t._v(" "),e("td",[t._v("必须")])]),t._v(" "),e("tr",[e("td",[t._v("HTTPS")]),t._v(" "),e("td",[t._v("443")]),t._v(" "),e("td",[t._v("通过https访问Metabase")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("phpMyAdmin on Docker")]),t._v(" "),e("td",[t._v("9090")]),t._v(" "),e("td",[t._v("可视化管理MySQL")]),t._v(" "),e("td",[t._v("可选")])])])]),t._v(" "),e("h2",{attrs:{id:"版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本号","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本号")]),t._v(" "),e("p",[t._v("组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# mattermost version\ncd /opt/mattermost/bin\n./mattermost version\n\n# Nginx version:\nnginx -v\n\n# MySQL version:\nmysql -V\n\n# Dokcer:\ndocker --version\n")])])])])},[],!1,null,null,null);a.default=v.exports}}]);