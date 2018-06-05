#!/bin/sh
cd D:/个人项目/manager-system/
npm run build
rm -rf D:/个人项目/blog-ssr/ssr/manager-system/*
cp -r ./dist/* D:/个人项目/blog-ssr/ssr/manager-system/