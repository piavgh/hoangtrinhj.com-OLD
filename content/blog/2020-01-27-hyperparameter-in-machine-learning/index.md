---
author: Hoang Trinh
date: 2020-01-27 10:59:00+00:00
layout: post
slug: hyperparameter-in-machine-learning
title: What is the Hyperparameter in Machine Learning?
thumbnail: '../thumbnails/deep-learning.png'
cover: './preview.jpg'
template: post
reference: https://machinelearningmastery.com/difference-between-a-parameter-and-a-hyperparameter/
categories:
  - AI
  - Machine Learning
  - Deep Learning
tags:
  - ai
  - machine-learning
  - deep-learning
---

![What is Hyperparameter in Machine Learning](./hyperparameter-cover.jpg)

It can be confusing when you get started in applied machine learning.

There are so many terms to use and many of the terms may not be used consistently. This is especially true if you have come from another field of study that may use some of the same terms as machine learning, but they are used differently.

For example: the terms _"model parameter"_ and _"model hyperparameter"_.

Not having a clear definition for these terms is a common struggle for beginners, especially those that have come from the fields of statistics or economics.

In this post, we will take a closer look at these terms.

First, let's take a look at what make you confused: "_parameter_"

## What is a Model Parameter?

A model parameter is a configuration variable that is internal to the model and whose value can be estimated from data.

- They are required by the model when making predictions.
- They values define the skill of the model on your problem.
- They are estimated or learned from data.
- They are often not set manually by the practitioner.
- They are often saved as part of the learned model.

Parameters are key to machine learning algorithms. They are the part of the model that is learned from historical training data.

In classical machine learning literature, we may think of the model as the hypothesis and the parameters as the tailoring of the hypothesis to a specific set of data.

Often model parameters are estimated using an optimization algorithm, which is a type of efficient search through possible parameter values.

- **Statistics**: In statistics, you may assume a distribution for a variable, such as a Gaussian distribution. Two parameters of the Gaussian distribution are the mean (mu) and the standard deviation (sigma). This holds in machine learning, where these parameters may be estimated from data and used as part of a predictive model.
- **Programming**: In programming, you may pass a parameter to a function. In this case, a parameter is a function argument that could have one of a range of values. In machine learning, the specific model you are using is the function and requires parameters in order to make a prediction on new data.

Whether a model has a fixed or variable number of parameters determines whether it may be referred to as “parametric” or “nonparametric“.

Some examples of model parameters include:

- The weights in an artificial neural network.
- The support vectors in a support vector machine.
- The coefficients in a linear regression or logistic regression.

## What is a Model Hyperparameter?

A model hyperparameter is a configuration that is external to the model and whose value cannot be estimated from data.

- They are often used in processes to help estimate model parameters.
- They are often specified by the practitioner.
- They can often be set using heuristics.
- They are often tuned for a given predictive modeling problem.

We cannot know the best value for a model hyperparameter on a given problem. We may use rules of thumb, copy values used on other problems, or search for the best value by trial and error.

When a machine learning algorithm is tuned for a specific problem, such as when you are using a grid search or a random search, then you are tuning the hyperparameters of the model or order to discover the parameters of the model that result in the most skillful predictions.

> Many models have important parameters which cannot be directly estimated from the data. For example, in the K-nearest neighbor classification model … This type of model parameter is referred to as a tuning parameter because there is no analytical formula available to calculate an appropriate value.
>
> — Page 64-65, [Applied Predictive Modeling](https://www.amazon.com/Applied-Predictive-Modeling-Max-Kuhn/dp/1461468485), 2013

Model hyperparameters are often referred to as model parameters which can make things confusing. A good rule of thumb to overcome this confusion is as follows:

> **If you have to specify a model parameter manually then
> it is probably a model hyperparameter.**

Some examples of model hyperparameters include:

- The learning rate for training a neural network.
- The C and sigma hyperparameters for support vector machines.
- The k in k-nearest neighbors.

## Summary

In this post, you discovered the clear definitions and the difference between model parameters and model hyperparameters.

In summary, model parameters are estimated from data automatically and model hyperparameters are set manually and are used in processes to help estimate model parameters.

Model hyperparameters are often referred to as parameters because they are the parts of the machine learning that must be set manually and tuned.
