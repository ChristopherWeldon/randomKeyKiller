andomKeyKiller = (function (keyKiller) {
    //@var int Random keycode between 65 (a) and 90 (z)
    var randomKeycode = Math.floor(Math.random()*(90-65+1)+65);

    /**
     * On keydown check if key code matches random key code. If so prevent propagation
     * @param event Event Keydown event
     * @returns {boolean} false if key code match to prevent event propagation
     */
    function onKeydown(event) {
        if (event.keyCode === randomKeycode){
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
    }

    //Add event listener for keydown
    document.addEventListener("keydown", onKeydown);
    return keyKiller;
}(RandomKeyKiller|| {}));