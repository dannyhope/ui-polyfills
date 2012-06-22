# menu-open.js

Expects structure roughly as a heading to click on to open (`h2`) and a list (`ul`) of links (`a`). 

## Example: 

[![HTML tree for menu](http://i.imgur.com/Hqire.png)](http://software.hixie.ch/utilities/js/live-dom-viewer/?%09%09%09%09%3Ch2%3EAdd%20to%20my%20calendar%3C%2Fh2%3E%0A%09%09%09%09%3Cul%20id%3D%22calMenu%22%3E%0A%09%09%09%09%09%3Cli%3E%3Ca%20href%3D%22http%3A%2F%2Fremysharp.com%22%3EiCal%20or%20Outlook%3C%2Fa%3E%3C%2Fli%3E%0A%09%09%09%09%09%3Cli%3E%3Ca%20href%3D%22http%3A%2F%2Fdannyhope.co.uk%22%20target%3D%22_new%22%3EGoogle%20Calendar%3C%2Fa%3E%3C%2Fli%3E%0A%09%09%09%09%3C%2Ful%3E%0A)

## Sequence:

1. Mouse down on heading
2. Menu opens
3. Move through open menu items
4. Menu items receive hover state (though actually applying `.hover` class)
5. Mouse up emulates a click on that item

## Code also supports:

* clicking to open menu, then clicking any menu item
* clicking anywhere outside of menu to close menu
* `target="_blank"` on links to open in a new window

## Note

If you're using jQuery (or some such) to hook event handles, you will need to change the line that set `window.location` and trigger a click on the target element `e.target`.