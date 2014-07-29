goodVibes.js
============

HTML5 Vibration API simplified.

About
-----

goodVibes.js provides an easy implementation of HTML5 Vibration API. It handles both static and dynamically added elements.

Basic Usage
-----

Using goodVibes.js is very simple. Just add `data-vibrate` for your element:
<pre>
&lt;button data-vibrate="200">I'll vibrate for 200ms when clicked&lt;/button>
</pre>

Then append the script anywhere on the page:
<pre>
&lt;script src="/path/to/goodVibes.js">&lt;/script>
</pre>

Advanced Usage
--------------
You can pass arrays for `data-vibrate` to provide pauses in vibration. For instance:
<pre>
&lt;button data-vibrate="[500, 200, 500]">500ms, pause for 200ms, and 500ms more&lt;/button>
</pre>

You can also define the event trigger for vibration as follows:
<pre>
&lt;button data-vibrate="200" data-vibrate-trigger="touchend">200ms vibration ontouchend&lt;/button>
</pre>

You can also add elements dynamically with `data-vibrate / data-vibrate-trigger` and they will work  as well.

Live Demo
---------
To view the demo, you'll need a device that properly supports HTML5 Vibration API.

Demo can be viewed in here: <a href="//demo.hakoniemi.net/goodVibes/">TBA</a>.
