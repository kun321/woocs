<div align="center">
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAaMjiUvbKRhX7.png" width="150" height="150" alt="woocs" />

  <h1>woocs</h1>
</div>

基于 [doocs/md](https://github.com/doocs/md) 开发的微信 Markdown 编辑器桌面应用。

![](https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAeEyU14WC5WqH.png)

## 关于本项目

保留 [doocs/md](https://github.com/doocs/md) 原功能的前提下，对其进行了桌面化适配。

* 本地内容管理，从 `localStorage` 移动至 `${用户文档目录}/woocs`
* 将新建、设置、导入导出、关于等操作移动至菜单栏，并对常用操作增加快捷键操作
* 将原菜单栏和设置的重复项合并至设置面板内
* 新增工具栏，将格式、上传、表格、内容管理、新建等移动至工具栏

注：本人只有 mac，所以无法对其他系统进行测试，欢迎 pr。

## 开发

### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

---

欢迎关注我的公众号：前端生存指南，一起聊聊前端、AI 和生活。

<div align="center">
  <img src="https://cloud-minapp-47803.cloud.ifanrusercontent.com/1tvAM68Cvrx3bfLR.jpg" style="width: 180px;">
</div>