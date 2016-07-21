# Expandible

## Functionality

Collapse or show content using a handler

## Usage

Add `data-expandible` to the element wrapping the component to enhance it.
When the component is enhanced, an `expandible` class is added to the element.

When the state of the component changes (expands/collapses) an `expandible--expanded` class is toggled (added/removed respectively).

If you want the component to be expanded initially after it's been enhanced, simply add `expandible--expanded` in the initial HTML.

You can also define a handler outsite of the element to toggle the expanded state. For that option you need to pass `externalHandler` on your initial config. This config option is a string that is passed to jQuery to return the famouse jQuery object. You also need to pass `externalContext` to help jQuery not query the whole document for the external handler. 

### Example

#### HTML

	<div data-external-context>
		<div data-expandable>
			Your content
			<button data-expandable-handler>toggle</button>
		</div>
		<button data-external-handler>toggle</button>
	</div>


#### JS

	const config = {
		externalHandler: '[data-external-handler]',
		externalContext: '[data-external-context]'
	};

	expandable.enhance(element, config);
