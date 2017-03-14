# JPopup
a popup notification tool.

## Requirements
jQuery is required and `jquery.popup.js` should be included in html.

`<script src="./jquery.popup.js"></script>`

## Usage
simply call `$.popup()` anywhere, a "Hello World" notification will pop out at the left bottom corner and slide out of screen after a while. 
some parameters can also be passed into `$.popup()` for customization:
* `msg`: any string. it decribes the content of notification message.
* `type`: `"warning"` or `"success"`. it changes the color of notification based on certain scenarios.

## Example
`$.popup({
  msg: "Access Denied!",
  type: "warning"
});`
