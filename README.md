# Slimmed Flxhr for JQuery #

This project offers a slimmer version of flxhr specific to JQuery. The backwards-compatible Cross-Origin library has been narrowed down to focus on modern Javascript practices: Script combining and minification instead of loading multiple files for a single module, and AJAX support for JSON instead of XML.

flxhr is a frequently used alternative to JQuery CORS (Cross-Origin Resource Sharing) in browsers where CORS is not supported (IE4-9, most versions of Opera, and a few others).

The goal of this project is to make supporting CORS possible with a single minified script for >99% of browsers on the web. JQuery built-in CORS support + flxhr = success.

Unfortunately, relative to JQuery's CORS support, the standard build of flxhr is both heavy and slow.

**Heavy**<br/>
The Javascript alone checks in at 84k unminified, and the total deploy minified bundle checks in at 50k. This is a problem if you're trying to support the widest swath of browsers, because the oldest, non-CORS browsers that would use flxhr also perform terribly in Javascript benchmarks and tend to be installed on older machines. 50k of minified js is nothing for Chrome on a modern laptop, but IE6 on a Pentium II is another story.

**Slow**<br/>
Flxhr and its jquery wrapper are composed of 4 js files, 2 swf files, and 1 vbs file. Instead of minifying those all together like modern practice prescribes, flxhr is built to "lazy-load" its dependencies. That is, it has a function called load_script and some hard-coded variable names and file names it uses. By default each file checks to see if its dependencies are present and if not, loads the hard-coded paths from the server. This is slow because it can result in up to 7 requests just to load the flxhr module - a lot of wasted round-trip time for the user. And, if script combining and minification is assumed, the code to handle lazy loading is waste.

In response to these concerns the `load_script` method and other lazy-loading code is removed. Two features are also removed: IE-only VBS-file based binary support, and XML document support (since modern AJAX is really AJAJ - json is fetched, not XML).

This project's js files can be minified into a single slimmer script that works alone (with its 2 related .swf files on the server ready to be fetched) or inlined directly into HTML (preferably at the end of the body tag). Minified, the total jquery plugin comes to 31k, and the 2 swf files add an additional 12k. The total minified package weighs 43k, a savings of 14%. Future versions may save more.

## Usage ##

You can use flxhr in a few ways. The simplest way is to just include it with jquery, either by script combining and minifying the entire package together, or just minifying flxhr. Here's an example of the latter:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="/ui/flxhr.js"></script>
    <script>
    (function() {
		var corsJson = $.ajax({
			url: '//domainb.com/testcors',
			data: { message: 'Test Message' },
			type: 'POST',
			dataType: 'json',
			flXHR: !$.support.cors,
			success: function(r) {
				alert(r.message);
			},
			error: function(a,b,c) {
				alert('Error');
			}
		});
    })();
    </script>

You can also opt to include the flxhr code only if cors is not supported, using `$.getScript()`. This adds the time of an extra round-trip to legacy browsers like IE9 and below, but saves initialization code for browsers like IE10 Chrome.

