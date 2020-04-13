---
author: Hoang Trinh
date: 2019-12-22 22:58:00+00:00
layout: post
slug: mysql-create-database-with-utf8-character-set
title: MySQL Create Database with UTF8 Character Set Syntax
thumbnail: '../thumbnails/mysql.png'
cover: './preview.jpg'
template: post
categories:
  - Mysql
tags:
  - mysql
  - utf-8
---

I always forget the MySQL create database with UTF8 character set syntax, so here it is:

> CREATE DATABASE `mydb` CHARACTER SET utf8 COLLATE utf8_general_ci;
>
> GRANT ALL ON `mydb`.\* TO `username`@localhost IDENTIFIED BY 'password';

Alternatively, you can use 'CREATE SCHEMA' instead of 'CREATE DATABASE':

> CREATE SCHEMA `mydb` CHARACTER SET utf8 COLLATE utf8_general_ci;
>
> GRANT ALL ON `mydb`.\* TO `username`@localhost IDENTIFIED BY 'password';

I hope this helps someone else too!
