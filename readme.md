# .NET Core front-end development guide


## Getting started

Install .NET Core framework on your machine. You can access the [official website](https://www.microsoft.com/net/core) and download the lastest version. After installation head over to your recently cloned repo and run `dotnet restore`. This will install all the packages that the project requires for .net core.

Next head over to [nodejs](https://nodejs.org) and download the latest stable version. The recommended version is 5.x or above. 0.10.x and 0.12.x versions **do not** work.

After updating the *node* version, it's time to install the required dependencies. You can run this by running the command, from your project directory, on your terminal:

```bash
npm install
```

## Available tasks

`npm run ...` | Description
---|---
`build` or `start` | Build all static assets.
`build:js` | Compile, bundle and minify javascript.
`build:jsvendor` | Bundle and minify vendor javascript.
`build:css` | Compile, bundle and minify css.
`build:assets` | Move assets from inside of Views to wwwroot.
`develop` or `watch` | Watch javascript and css files and compile them on change.
`watch:js` | Watch javascript and compile on change.
`watch:css` | Watch css and compile on change.
`watch:reload` | Watch css and javascript and reload the browser on change.
`test` | Run javascript tests. 
`test:watch` | Watch for changes on test and run all tests (only on *PhantomJS*) on change.

## Tech stack

The static generator uses two modules to generate the output. **PostCSS** for css and **Browserify** for js.

### PostCSS

[PostCSS](https://github.com/postcss/postcss#postcss---) is a css post processor. That means that after styles are created they are processed with plugins to change behaviour with various objectives.

In the case of this configuration we choose to use 3 plugins. [postcss-import](https://github.com/postcss/postcss-import#postcss-import), [postcss-nested](https://github.com/postcss/postcss-nested#postcss-nested-) and [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars#postcss-simple-variables-). Following those links will describe what you can do with your css styles besides the normal css.

You can simply just write plain css and not use them if you desire so.

### Browserify

For module management and dependency injection we are using [browserify](http://browserify.org/). Check the **Template** section of this document to see how to structure your files to use it with browserify.

## Module structure

All the modules have the same structure:

	/[ModuleGroup]/
		/[ModuleName]/
			Assets/ -- to store assets related with the module
			[ModuleName].cshtml
			[ModuleName].demo.cshtml -- optional module demo
			[ModuleName].css -- optional module styles
			[ModuleName].js -- option module enhancementents
			[ModuleName].test.js
			README.md


All modules should include a README.md file that explains what's the module purpose and how to use it.

The `.demo.html` file is added when you want preview the module separatly. You can reach your module demo on `Views/{moduleGroup}/{moduleName}`. This also serves as a simple front-end guide where all the modules can be previewed.

There is a example under `/Views/Shared/_Template` it’s the best starting point when you want to create a new module. Duplicate it and rename it as you wish.

## Testing

[Jasmine](http://jasmine.github.io/2.4/introduction.html) is used to test all the javascript enhancements that a specific module requires. Ideally we would do [Behavior Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development#Principles_of_BDD) as Jasmine is quite good on that. The way it expresses the intend of the behavior is quite clear an easy to read. Sometimes it's hard to start with the module specs and then develop, but is not always possible, thus the reference to *Ideally*.

With that said, nothing should prevent us to have a complete test of all the enhancements on the module. ;) 


