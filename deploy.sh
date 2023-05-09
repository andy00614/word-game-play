#!/bin/bash

# 配置变量
LOCAL_DIR="."
REMOTE_USER="root"
REMOTE_HOST="8.219.157.52"
REMOTE_DIR="/root/frontend/deploy_test/w3-game"
PORT=8888
APP_PORT=80
DOCKER_IMAGE="w3-game-demo-image"
DOCKER_CONTAINER="w3-game-demo-container"

# 判断远程目录是否存在，不存在则创建
ssh "$REMOTE_USER@$REMOTE_HOST" "if [ ! -d \"$REMOTE_DIR\" ]; then mkdir -p \"$REMOTE_DIR\"; fi"

# 使用 rsync 同步本地代码到远程服务器
rsync -avz --delete \
  --exclude node_modules \
  --exclude .git \
  --exclude .env \
  --exclude .next \
  --exclude '.swc' \
  "$LOCAL_DIR" \
  "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"

# 在远程服务器上使用 Docker 部署应用
ssh "$REMOTE_USER@$REMOTE_HOST" "\
  cd $REMOTE_DIR && \
  docker build -t $DOCKER_IMAGE . && \
  if docker container ls -a | grep $DOCKER_CONTAINER; then \
    docker container stop $DOCKER_CONTAINER && \
    docker container rm $DOCKER_CONTAINER; \
  fi && \
  docker run -d -p $PORT:$APP_PORT --name $DOCKER_CONTAINER $DOCKER_IMAGE \
"
