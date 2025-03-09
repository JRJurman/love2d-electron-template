# love2d-electron-template
Template for running a LÖVE / Love2d / love.js game in an electron window

## Why?

This template allows developers to run the [love.js](https://github.com/Davidobot/love.js) output as a standalone application. The reason you might want this is so that you can leverage Web APIs and affordances that are not natively available in the LÖVE game engine.

Namely, this is a building block for the [love2d-a11y-template](https://github.com/JRJurman/love2d-a11y-template), which allows developers to build LÖVE games that can interact with the native screen reader. This Project is more of a stripped down version of the offering there.

## What is it?

There are three files included in this project that you can copy or reference for your own project:

<dl>

<dt><code>index.js</code></dt>
<dd>This is the javascript entrypoint for the electron app. This will run the hosted instance of the love.js project.</dd>

<dt><code>template.html</code></dt>
<dd>This is a modified template to center and expand the canvas of the game based on the window size.</dd>

<dt><code>build.sh</code></dt>
<dd>This is a set of scripts that you'll want to run to build the final project. You can either trigger this as a shell script, or include it as part of some other build tooling (or even a package.json).</dd>

</dl>

## Packaging Your Project

In order to build OS specific packages, you'll need to run the following steps. These are based on the [Electron Tutorial for Packaging Projects](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging).

1. Run the following commands:

```sh
npm install --save-dev @electron-forge/cli
npx electron-forge import
```
