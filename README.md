
# Random Key Killer
Are you:
 * A QA Engineer who wants to play a joke on the devs
 * Like eff it, it's my last day (birthday is also a valid excuse)
 * Just plain evil

 Well this is the javascript for you. This simple yet evil javascript randomly suppresses keydown event for keys a - z. On each page load a random number between 65 and 90 (keycodes a - z). When the keydown event is triggered the script checks to see if the keycode matches the random number. If so the event is suppressed. For example if the random number was 65 it would not allow the user to type the letter 'a'. However if the user refreshes the page, the letter 'a' would work again but another letter would not work.

 Pro Tip:
 Minify and change module name to help obfuscate what this script actually does.

Note:This is all for fun. Do not use in production, unless it is April 1st :)
