#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build:docs

# 进入生成的文件夹
cd docs/.vuepress/dist

# git 命令
git init
git add .
commitmsg='updated at '$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "$commitmsg" 

# 发布: git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:ecomfe/san-admin.git master:gh-pages

# 返回上一次的工作目录
cd -
