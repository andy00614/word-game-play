# # 使用 Node.js 官方镜像作为基础镜像
# FROM node:16

# # 设置工作目录
# WORKDIR /app

# # 复制 package.json 和 package-lock.json 到工作目录
# COPY package*.json ./

# # 安装项目依赖
# RUN npm install

# # 复制项目文件到工作目录
# COPY . .

# # 构建项目
# RUN npm run build

# # 安装一个简单的 HTTP 服务器
# RUN npm install -g serve

# # 暴露端口
# EXPOSE 5000

# # 启动 HTTP 服务器并指定构建文件夹作为服务根目录
# CMD ["serve", "-s", "dist", "-l", "5000"]


# 使用 Node.js 官方镜像作为基础镜像
FROM node:16 as build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建项目
RUN npm run build

# 使用 Nginx 官方镜像作为基础镜像
FROM nginx:stable

# 复制构建好的应用文件到 Nginx 镜像中的 /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html

# 复制 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
