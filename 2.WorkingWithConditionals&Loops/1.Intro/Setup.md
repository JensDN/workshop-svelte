# Setup

To setup Svelte.js locally is a really easy and quick process.

## Node.js

First be sure to have the package manager Node.js **<u>globally</u>** installed on your PC.

If you forgot before the start of this workshop, **shame**. 

<img src="https://i.imgur.com/NAJE0d0.png" alt="shame" style="zoom: 50%;" />

( Here are 3 quick links that can help you out :smiley: )

[NodeJS Download](https://nodejs.org/en/download/)

[How to install and use node in Windows, MAC/Linux](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

[BeginnerGuide to NPM](https://www.sitepoint.com/beginners-guide-node-package-manager/)



## The easiest way to get started with Svelte

### 1. Use the REPL 				

The [Svelte REPL](https://svelte.dev/repl) is the easiest way to begin. You can choose  from a list of examples to get you started, and tweak them until they do what you want.

At some point, your app will outgrow the [REPL](https://svelte.dev/repl). Click the **download** button to save a `svelte-app.zip` file to your computer and <u>uncompress</u> it.

Open a terminal window and set the project up...

```bash
cd /path/to/svelte-app
npm install
```

...then start up a development server:

```bash
npm run dev
```

This will serve your app on [http://localhost:5000/](http://localhost:5000/) and rebuild it with [Rollup](https://rollupjs.org/) every time you make a change to the files in `svelte-app/src`.

## 						 					

### 2. Use degit 				

When you download from the REPL, you're getting a customised version of the [svelte.js/template](https://github.com/sveltejs/template) repo. You can skip messing around with zip files by using [degit](https://github.com/Rich-Harris/degit), a project scaffolding tool.

In the terminal, you can instantly create a new project like so:

```bash
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
npm install
npm run dev
```

This will create a new project in the `my-svelte-project` directory, install its dependencies, and start a server on [http://localhost:5000/](http://localhost:5000/).

Once you've tinkered a bit and understood how everything fits together, you can fork 

 and start doing this instead:

```bash
npx degit your-name/template my-new-project
```

And that's it! Do `npm run build` to create a production-ready version of your app, and check the project template's [README](https://github.com/sveltejs/template/blob/master/README.md)

 for instructions on how to easily deploy your app to the web with  or [Now](https://zeit.co/now) or [Surge](http://surge.sh/) .

##### For More information, [svelte.dev](https://svelte.dev/blog/the-easiest-way-to-get-started) has plenty of documentation on thins like server-side rendering, other options etc.