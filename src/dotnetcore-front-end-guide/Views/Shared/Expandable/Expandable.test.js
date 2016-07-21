import $ from 'jquery';
import expandable from './Expandable';

describe('expandable module', function () {
	let instance;
	beforeEach(function () {
		instance = expandable.enhance(fixture());
	});

	it('should have expanded class after triggered "toggle"`', function () {
		instance.$element.trigger('toggle');
		expect(instance.$element.hasClass('expandable--expanded')).toBe(true);
	});

	it('should have expandable class after setup`', function () {
		expect(instance.$element.hasClass('expandable')).toBe(true);
	});

	it('should not have expanded class after triggered "toggle" twice`', function () {
		instance.$element.trigger('toggle');
		instance.$element.trigger('toggle');
		expect(instance.$element.hasClass('expandable--expanded')).toBe(false);
	});
});

describe('expandable module with external handler', function () {
	let instance;
	const config = {
		externalHandler: '[data-external-handler]',
		externalContext: '[data-external-context]'
	};
	beforeEach(function () {
		instance = expandable.enhance(fixtureWithExternalHandler(), config);
	});

	it('should extend default config', function () {
		let expectedConfig = {
			selector: '[data-expandable]',
			handler: '[data-expandable-handler]',
			expandableClass: 'expandable',
			expandedClass: 'expandable--expanded',
			externalHandler: '[data-external-handler]',
			externalContext: '[data-external-context]'
		};
		expect(instance.config).toEqual(expectedConfig);
	});
});

function fixture() {
	let element = `<div data-expandable>
		<button data-expandable-handler>toggle</button>
	</div>`;

	return $(element)[0];
}

function fixtureWithExternalHandler() {
	let element = `<div data-external-context>
		<div data-expandable>
			<button data-expandable-handler>toggle</button>
		</div>
		<button data-external-handler>toggle</button>
	</div>`;

	return $(element)[0];
}
