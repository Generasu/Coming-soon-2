function renderIcons(selector, icons) {
    const count = icons.length;
    const DOM = document.querySelector(selector);
    // console.log(DOM);
    
    // console.log(icons);
    //  <a href="#" class="fa fa-facebook" aria-hidden="true"></a>

    console.log('is viso bus:', count);


    for (let i = 0; i < count; i++) {
        // console.log("icons", i);
        const social = icons[i];
        const HTML = '<a href="' + social.url + '" class="fa fa-' + social.icons + '"></a>';
        console.log(HTML);
        
        DOM.innerHTML += HTML
        // console.log(social.icons);

        // console.log(HTML);


    }
    return;
}
export default renderIcons;