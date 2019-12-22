---  
author: Hoang Trinh  
date: 2019-19-12 10:37:00+00:00  
layout: post  
slug: react-router-catch-all-routes
title: Handling 404 pages (catch all routes) with React Router v4
thumbnail: '../thumbnails/react.png'  
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
> GRANT ALL ON `mydb`.* TO `username`@localhost IDENTIFIED BY 'password';

Alternatively, you can use 'CREATE SCHEMA' instead of 'CREATE DATABASE':

> CREATE SCHEMA `mydb` CHARACTER SET utf8 COLLATE utf8_general_ci;

> GRANT ALL ON `mydb`.* TO `username`@localhost IDENTIFIED BY 'password';

I hope this helps someone else too!
