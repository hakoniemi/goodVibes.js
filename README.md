goodVibes.js
============

HTML5 Vibration API simplified.

About
-----

goodVibes.js provides an easy implementation of HTML5 Vibration API. It handles both static and dynamically added elements.

How it Works
-----
Vibration will occur by default when user clicks an element with specific attributes. Notice that there's no ghost click but response of the vibration is immediate.

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

###Intervals###
You can pass arrays for `data-vibrate` to provide pauses in vibration. For instance:
<pre>
&lt;button data-vibrate="[500, 200, 500]">500ms, pause for 200ms, and 500ms more&lt;/button>
</pre>

###Event Listeners###
You can also define the event listeners for vibration:
<pre>
&lt;button data-vibrate="50" data-vibrate-on="touchmove">50ms vibration ontouchmove&lt;/button>
</pre>

###Dynamic Elements###
You can add elements dynamically with `data-vibrate / data-vibrate-on` and they will work as well.

###Using Parent Element to Declare Vibration###
Instead of explicitly declaring vibration for every single element (e.g. on a list), it's possible to declare vibration properties to parent element. With simple CSS selector syntax, one cand define which child nodes will dispatch the event for vibration:
<pre>
&lt;ul data-vibrate="100" data-vibrate-element="li">
    &lt;li>One&lt;/li>
    &lt;li>Two&lt;/li>
    &lt;li>Three&lt;/li>
    &lt;li>Four&lt;/li>
&lt;/ul>
</pre>

Live Demo
---------
To view the demo, you'll need a device that properly supports HTML5 Vibration API.

Demo can be viewed in here: <a href="//demo.hakoniemi.net/goodVibes/">TBA</a>.
