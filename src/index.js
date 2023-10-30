import * as idx from './index-functions.js'


window.onload= function(){
    setTimeout(()=>{window.scrollTo(0, 0)}, 100)
    idx.darkModeGet()
    idx.eventListenerHandler()
    idx.themeToggleHandler()
    idx.scrollHandler()
    idx.resizeHandler()
}