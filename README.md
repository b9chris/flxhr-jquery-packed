Slimmed Flxhr for JQuery

This project offers a slimmer version of flxhr specific to JQuery. Flxhr features not supported by JQuery are removed, and the scripts are modified to be ready for script combining and minification.

flxhr is a frequently used alternative to JQuery CORS (Cross-Origin Resource Sharing) in browsers where CORS is not supported (nearly every version of IE and Opera, and a few others).

Unfortunately, relative to JQuery's CORS support, a standard set of includes for flxhr is both heavy and slow.

Heavy, because the Javascript alone checks in at 70k unminified, and the total deploy bundle minified (and .swf compiled, obviously) checks in at 50k. This is a problem if you're trying to support the widest swath of browsers, because the oldest, non-CORS browsers also perform terribly in Javascript benchmarks and tend to be installed on older machines. 50k of minified js is nothing for Chrome on a modern laptop, but IE6 on a Pentium II is another story.

Slow, because flxhr and its jquery wrapper are composed of 4 js files, 2 swf files, and 1 vbs file. Instead of minifying those all together like modern practice prescribes, flxhr is built to "lazy-load" its dependencies. That is, it has a function called load_script and some hard-coded variable names and file names it uses. By default each file checks to see if its dependencies are present and if not, loads the hard-coded paths from the server. This is slow because it can result in up to 7 requests just to load the flxhr module - a lot of wasted round-trip time for the user. And, if script combining and minification is assumed, the code to handle lazy loading is waste.

In response to these concerns the load_script method and other lazy-loading code is removed. Two features are also removed: IE-only VBS-file based binary support, and XML document support (since modern AJAX is really AJAJ - json is fetched, not XML).

This project's js files can be minified into a single slimmer script that works alone (with its 2 related .swf files on the server ready to be fetched) or inlined directly into HTML (preferably at the end of the body tag).

One potential optimization not currently performed is the removal of CheckPlayer.js entirely. It would significantly reduce the size of the code. CheckPlayer walks a user through installing Flash for the first time if they don't have it installed. Since the number of fresh IE6 installations without Flash installed is likely astonishingly low, CheckPlayer arguably offers no value. In addition, CheckPlayer doesn't work very well for this use case. Since Flash is just being used as a hack to cross domain boundaries, there is no visible UI. If an IE6 user doesn't have Flash installed, a small box appears with a UI asking the user to install Flash. When they choose to do so, the UI shows a progress bar and appears to install Flash - but IE6 requires a restart to accept the installation. Arguably you've already lost this user from your site - redirecting the user to http://get.adobe.com/flashplayer/ is simpler (far less code) and will walk the user more clearly through the install steps.


