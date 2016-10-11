
项目目录说明

.                   # 根目录
├── /build/                     # 编译输出目录
├── /docs/                      # 项目相关文档目录
├── /node_modules/              # npm包目录
├── /src/                       # 代码源目录
│   ├── /actions/               # Actions目录
│   ├── /api/                   # REST API目录
│   ├── /components/            # React组件目录
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content 静态内容目录(plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core components 核心组件(Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components高级别的React组件库
│   ├── /public/                # Static files which are copied into the /build/public folder静态文件库
│   ├── /stores/                # Stores contain the application state and logic程序运行时状态和逻辑仓库
│   ├── /utils/                 # Utility classes and functions工具类和方法
│   ├── /index.js                 # Client-side startup script客户端启动脚本
│   ├── /config.js              # Global application settings全局设置
│   ├── /routes.js              # Univer