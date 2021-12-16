# 设置继承镜像
FROM nginx

# 提供作者信息
LABEL maintainer="loenzo"

# 将编译后的静态文件拷贝到镜像
ADD /public /usr/share/nginx/html

# 用本地的 default.conf 配置来替换nginx镜像里的默认配置
# ADD default.conf /etc/nginx/conf.d/default.conf

# 更改 ubuntu:18.04
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic main restricted universe multiverse" > /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-security main restricted universe multiverse" >> /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-updates main restricted universe multiverse" >> /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-proposed main restricted universe multiverse" >> /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-backports main restricted universe multiverse" >> /etc/apt/sources.list
# RUN apt-get update

# VOLUME [ "/etc/nginx/conf.d/" ]

# 开放端口
EXPOSE 80

ENTRYPOINT ["nginx"]

# 设置启动命令
CMD ["-g","daemon off;"]