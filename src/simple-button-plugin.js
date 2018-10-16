/**
 * @module SimpleButton/SimpleButton
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SimpleButtonUi from './simple-button-ui';

/**
 * The simple button plugin. It makes buttons in the toolbar configurable from outside.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SimpleButton extends Plugin {

    /**
     * @inheritDoc
     */
	static get requires() {
		return [SimpleButtonUi];
	}

    /**
     * @inheritDoc
     */
	static get pluginName() {
		return 'simpleButton';
	}

}
