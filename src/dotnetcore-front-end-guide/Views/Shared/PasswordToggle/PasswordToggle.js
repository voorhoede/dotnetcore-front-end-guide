import $ from 'jquery';

let module = {
	config: {
		selector: '[data-password-toggle]',
		targetSelector: '[data-password-target]',
		triggerSelector: '[data-password-trigger]',
		visibleClass: 'password-toggle--visible'
	},
	setup(element, config = {}) {
		this.config = $.extend({}, this.config, config);
		this.$element = $(element);
		this.$trigger = this.$element.find(this.config.triggerSelector);
		this.$target = this.$element.find(this.config.targetSelector);
		this.$trigger.addClass(module.config.visibleClass);
		this.$trigger.on('change', () => this.toggleVisibility(this.$trigger[0].checked));
		return this;
	},
	toggleVisibility(isVisible) {
		return this.$target.attr('type', (isVisible ? 'text' : 'password'));
	}
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
