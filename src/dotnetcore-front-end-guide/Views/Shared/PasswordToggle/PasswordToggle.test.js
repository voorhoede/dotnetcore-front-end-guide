import $ from 'jquery';
import passwordToggle from './PasswordToggle';

describe('passwordToggle module', function () {
	let instance;
	beforeEach(function () {
		instance = passwordToggle.enhance(fixture());
	});

	it('should have class visible after initialize', function () {
		expect(instance.$trigger.hasClass(instance.config.visibleClass)).toBe(true);
	});

	it('should have method to toggle visibility', function () {
		expect(instance.toggleVisibility).toBeDefined();
	});
});

describe('passwordToggle.toggleVisibility() method', function () {
	let instance;
	beforeEach(function () {
		instance = passwordToggle.enhance(fixture());
	});

	it('should switch target input type to text if trigger is checked', function () {
		instance.$trigger.attr('checked', true);
		instance.$trigger.trigger('change');
		expect(instance.$target.attr('type')).toBe('text');
	});

	it('should switch target input type to password if trigger is not checked', function () {
		instance.$trigger.attr('checked', false);
		instance.$trigger.trigger('change');
		expect(instance.$target.attr('type')).toBe('password');
	});
});

function fixture() {
	let element = `
		<div data-password-toggle>
			<input data-password-target type="password"/>
			<input data-password-trigger class="password-toggle" type="checkbox">
		</div>`;

	return $(element)[0];
}
