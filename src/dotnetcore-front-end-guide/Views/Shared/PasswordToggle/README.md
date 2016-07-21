# Password Toggle

## Functionality

This module is responsible for toggling visible the password on an input type password. It uses the state (checked / not checked) of a checkbox to set the visibility.

## Usage

* **`data-password-toggle`** - defines the container for the module

* **`data-password-target`** - defines the input on where to toggle visibility of password
* **`data-password-trigger`** - defines the checkbox that toggles the visibility

### Example

	<div data-password-toggle>
		<input data-password-target type="password"/>
		<input data-password-trigger class="password-toggle" type="checkbox">
	</div>


