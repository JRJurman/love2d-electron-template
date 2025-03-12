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

## How to Run your game

After you copy the above into your root folder, you can start the game running the build script and using `electron` to start the game:

```sh
./build.sh FOLDER_NAME
npx electron FOLDER_NAME
```

Where `FOLDER_NAME` is whatever folder you want to create with `love.js`.

## Packaging Your Project

In order to build an OS executable, you'll need to run the following steps in the folder generated by `love.js`. These are based on the [Electron Tutorial for Packaging Projects](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging).

1. Run the following commands in the folder generated by `love.js` (the `FOLDER_NAME` you used above) to add electron-forge to your project:

```sh
cd FOLDER_NAME
npm init --yes
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

2. At this point, you can verify that the game works as expected by starting the app again.

```sh
npm start
```

This should call the new `electron-forge start`.

3. Finally, run the command to build the package for release

```sh
npm run make
```

From there, you should be able to launch the executable made in the `out` folder.

If that all works as expected, congrats!
You'll want to follow the guides on electron's official site for [signing the package](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging#important-signing-your-code)
and making it run smoothly on other devices.

## Sample

You can check out the sample project in the folder in this project, which has gone through all the above steps.

This sample also includes a modified forge config. If you are looking to do a Windows build, using GitHub Actions is an easy way to build that artifact.
