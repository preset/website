---
title: 'Introduction'
description: ''
search: ''
sidebar: 'docs'
next: '/docs/basics/getting-started/'
---

## Introduction

Preset is a system that makes it easy to perform modifications on a freshly scaffolded project.

It is distributed as a command line tool, which makes it accessible without installation thanks to [`npx`](https://www.npmjs.com/package/npx).

## Understanding the need

If you are familiar with the concept of starter projects or boilerplates, this system is an alternative.

### Problem

The main issue with the concept of boilerplate is that, from the user point of view, it is hard to know what changed.

The features of the boilerplate have to be well-documented, but even then, the user won't know exactly what files have been edited or removed for the boilerplate to work, unless it is also documented—which would be a lot of work.

As a maintainer, it can be hard as well to keep track of the changes that have been made to the original codebase. It can be easy to forget something in an update, and dead code can be introduced this way.

### Solution

A preset, on the other hand, describes the exact changes needed for the features to be added. By reading the preset's code, you know the exact changes it brings.

This solves the previous issue, and makes the maintenance easier, because the overhead caused by all of the files of a boilerplate is gone.
