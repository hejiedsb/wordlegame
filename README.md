# Wordle 游戏

一个使用 React + TypeScript 前端和 Flask 后端的 Wordle 单词猜测游戏。

## 📝 项目简介

这是一个仿照 Wordle 游戏制作的网页版单词猜测游戏。玩家需要在 6 次机会内猜出一个 5 字母的英文单词。

## 🎮 游戏规则

- 每天有一个固定的 5 字母英文单词
- 玩家有 6 次猜测机会
- 每次猜测后会显示提示：
  - 绿色：字母正确且位置正确
  - 黄色：字母存在但位置错误
  - 灰色：字母不存在于答案中

## 🏗️ 项目架构

```
wordle/
├── frontend/          # React + TypeScript 前端
│   ├── src/
│   │   ├── App.tsx    # 主应用组件
│   │   ├── Board.tsx  # 游戏面板组件
│   │   └── Keyboard.tsx # 虚拟键盘组件
│   └── package.json
└── backend/           # Flask 后端 API
    ├── app/
    │   └── main.py    # Flask 主应用
    └── requirements.txt
```

## 🚀 快速开始

### 环境要求

- Node.js (v16 或更高版本)
- Python 3.8+
- npm 或 yarn

### 安装与运行

#### 1. 启动后端服务

```bash
# 进入后端目录
cd backend

# 创建虚拟环境（推荐）
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或者 venv\Scripts\activate  # Windows

# 安装依赖
pip install flask flask-cors

# 运行后端服务
python app/main.py
```

后端将在 `http://localhost:5000` 运行

#### 2. 启动前端服务

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

前端将在 `http://localhost:5173` 运行

## 🔧 技术栈

### 前端
- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **CSS3** - 样式

### 后端
- **Flask** - Web 框架
- **Python** - 服务端语言

## 📁 主要文件说明

### 前端组件

- `App.tsx` - 主应用组件，管理游戏状态和 API 调用
- `Board.tsx` - 游戏面板，显示猜测网格
- `Keyboard.tsx` - 虚拟键盘组件

### 后端 API

- `main.py` - Flask 应用，提供每日单词 API

### API 接口

```
GET /api/wordle/{yyyy-MM-dd}
```

返回指定日期的 Wordle 答案：
```json
{
  "date": "2024-10-01",
  "solution": "ought"
}
```

## 🎯 功能特性

- ✅ 每日固定单词
- ✅ 6 次猜测机会
- ✅ 实时字母状态反馈
- ✅ 响应式设计
- ✅ TypeScript 类型安全
- 🚧 键盘交互（开发中）
- 🚧 游戏统计（计划中）

## 🛠️ 开发

### 前端开发

```bash
cd frontend

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

### 后端开发

```bash
cd backend

# 运行开发服务器
python app/main.py
```

## 📋 TODO

- [ ] 完善键盘交互功能
- [ ] 添加游戏结果统计
- [ ] 实现游戏状态保存
- [ ] 添加动画效果
- [ ] 支持多语言
- [ ] 添加音效

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

## 🎉 致谢

感谢 [Wordle](https://www.nytimes.com/games/wordle/index.html) 原版游戏的启发。