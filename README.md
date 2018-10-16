

# ckeditor5-simple-button-plugin

[![npm version](https://badge.fury.io/js/%40samhammer%2Fckeditor5-simple-button-plugin.svg)](https://www.npmjs.com/package/@samhammer/ckeditor5-simple-button-plugin)

A generic ckeditor plugin to configure toolbar-buttons from outside.

## Features

 - Simply configure ui buttons directly via the configuration object.
 - Possibility to enable those buttons even if the editor is in readonly state.

## How to use
To be able to use this plugin you need a custom build of ckeditor.

Further instructions can be found here:
https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html

Installation:

```bash
npm i @samhammer/ckeditor5-simple-button-plugin
```

## Configuration

Each button is described with a configuration object as shown below. The `onClick` function can return a promise. The button is always disabled before the `onClick` function is called. It is enabled again after the returned promise is resolved or rejected. If no promise is returned the button is enabled again immediately. The `onClick` function receives the `ButtonView` object which makes it possible to change properties of the button (icon, tooltip or something else). The parameter `syncDisabledState` is optional and defaults to `true`. If `true` the enabled-state is always in sync with the readonly-state of the editor. If you need a button in enabled-state when the editor is readonly you have to set this parameter to `false`.

Example:

```js
InlineEditor
	.create( editorElement, {
		simpleButton: [
            {
                name: "myFirstButton",
                label: "My First button - Click me",
                icon: svgXmlContent,
                syncDisabledState: false,
                onClick: (buttonView) => { /* ... */ }
            },
            ...
        ]
	} )
	.then( ... )
	.catch( ... );
```


## How to publish

For publishing an npm account that is referenced to the organization is required.

See the following how to:

https://docs.npmjs.com/getting-started/publishing-npm-packages

If everything is configured correctly just count up the version number in our package.json and execute one of the following commands:

```bash
npm publish --access public
```

## License

ckeditor5-simple-button-plugin is released under the MIT License. See LICENSE file for details.
