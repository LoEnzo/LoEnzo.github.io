#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run build
yarn build

# 进入生成的文件夹
#cd docs/.vuepress/dist
cd public

git config --global user.name 'LoEnzo'
git config --global user.email '928264247@qq.com'

git init
git add -A
git commit -m 'deploy'

# 如果是发布到自定义域名
echo 'https://hjwu.cf/' > CNAME


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:LoEnzo/myblog.git master:gh-pages
# git push -f https://gitee.com/myMagicRain/myblog.git master:gh-pages

cd -
