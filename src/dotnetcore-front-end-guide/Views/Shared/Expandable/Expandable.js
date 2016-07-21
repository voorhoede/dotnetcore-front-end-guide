import $ from 'jquery';

let module = {
	config: {
		selector: '[data-expandable]',
		handler: '[data-expandable-handler]',
		expandableClass: 'expandable',
		expandedClass: 'expandable--expanded'
	},
	setup(element, config = {}) {
		this.config = $.extend({}, this.config, config);
		this.$element = $(element);
		this.$element.addClass(this.config.expandableClass);
		this.$element.on('toggle', () => this.toggleExpand());
		this.$handler = this.$element.find(this.config.handler);
		this.$handler.on('click', () => this.$element.trigger('toggle'));
		this.isExpanded = this.$element.hasClass(this.config.expandedClass);
		// Check if mandatory config for external handlers exist
		if (this.config.externalHandler && this.config.externalContext) {
			this.setExternalHandler();
		}
		return this;
	},
	/**
	 * Toggle (expand / collapse) the expand state by adding / removing the expanded class.
	 * @param {Boolean} [isExpanded]    Set true to force component to expand (optional).
	 * @returns {Boolean}               True if component is expanded.
	 */
	toggleExpand(isExpanded = !this.isExpanded) {
		this.isExpanded = isExpanded;
		this.$element.toggleClass(this.config.expandedClass);
		this.$element.attr('aria-expanded', this.isExpanded);
		return this.isExpanded;
	},
	/**
	 * Set handlers that may toggle Expandable that live outsite of itself.
	 * It requires a context do be defined on the initial config (can be document)
	 */
	setExternalHandler() {
		let externalHandler;
		externalHandler = $(this.config.externalContext).find(this.config.externalHandler);
		externalHandler.on('click', () => this.$element.trigger('toggle'));
		return externalHandler;
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

