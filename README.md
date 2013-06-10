#tinybox.modify.js


Tinybox2 is the successor of the previously published resource TinyBox which is a standalone JavaScript modal windows library.   
The library is lightweight ( **5kb** ) and supports *images*, *iframes*, *HTML* and *Ajax* requests natively.  

**tinybox.modify.js** is a small [Tinybox2][1] plugin that is able to manage the navigation between different popups.  
It adds only **684byte** to the main library.

**@see** a simple example: [**link**][2]

### import

    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="tinybox.js"></script>
    <script type="text/javascript" src="tinybox.modify.min.js"></script>

### API

    disableStack()              // to reset popups history and disable calls to modify() until the next show() call
    close()                     // disableStack() and closes current popup
    back(n)                     // n backward jumps (if n is undefined it counts as 1)
    modify(content, noTrack)    // to jump to next popup (if noTrack is 1 or true, this jump is not tracked)

**<u>Note</u>**: `content` could be an html string or an url.

## TODO
I am planning to insert *on open and on close callbacks* as additional parameters of modify().


  [1]: http://www.scriptiny.com/2011/03/javascript-modal-windows/
  [2]: http://goo.gl/GRzTK
