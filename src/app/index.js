/**
 * @file  JavaScript entry point of the project
 * @author lisa <liza199797@mail.ru>
 */

import './polyfills';
import $ from 'jquery';
import {consoleErrorFix, ieViewportFix} from './base';

// This is necessary because bootstrap itself checks the existence of jQuery with window.jQuery.
global.jQuery = $;

// Because of bootstrap is not an UMD Module, we can’t import it with ES6 syntax.
require('bootstrap-sass');

$(() => {
	consoleErrorFix();
	ieViewportFix();
	console.log('YaY, my first ES6-Module !!!!');
});
