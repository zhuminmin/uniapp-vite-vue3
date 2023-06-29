# uniapp-vite-vue3 项目模板

### 开发环境

1. node v16.17.0 (建议使用nvm管理node版本，nvm不会的自行百度，windows需要使用管理员权限打开终端执行nvm的命令) [下载windows安装包](https://github.com/coreybutler/nvm-windows/releases)
2. npm  v9.6.5
3. pnpm v8.3.1

### 依赖安装

```shell
npm i -g pnpm 
pnpm i
```
#### 注意
1. 本项目使用淘宝源
2. 待`@dcloudio/`相关插件支持vue3.3.4的版本, pinia才能使用最新的版本，[详情请看issues](https://github.com/vueuse/vue-demi/issues/233)

### 开发环境运行

| 命令          | 说明     |
|-------------|--------|
| pnpm dev:h5 | h5端    |
| pnpm dev:mp-weixin   | 微信小程序端 |


### 打包生产环境


| 命令          | 说明     |
|-------------|--------|
| pnpm build:h5 | h5端    |
| pnpm build:mp-weixin   | 微信小程序端 |
