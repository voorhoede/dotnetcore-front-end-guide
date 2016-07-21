import $ from 'jquery';

let module = {
	config: {
		selector: '[data-module]'
	},
	setup(element, config = {}) {
		this.config = $.extend({}, this.config, config);
		this.$element = $(element);
		return this;
	},
	method() {}
};

function enhance(element, config) {
	const instance = Object.create(module);
	instance.setup(element, config);
	return instance;
}

function enhanceAll() {
	const elements = [].slice.call(document.querySelectorAll(module.config.selector));
	return enhanceElements(elements);
}

function enhanceElements(elements) {
	return elements.map(function (element) {
		let object = Object.create(module);
		return object.setup(element);
	});
}

export default {enhance, enhanceAll};
