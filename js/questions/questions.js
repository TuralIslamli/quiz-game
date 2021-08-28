function addScript(src){
    let script = document.createElement('script');
    script.src = 'js/questionsOf' + src + '.js';
    script.async = false;
    document.body.appendChild(script);
}

addScript('Science');
addScript('Art');
addScript('Sport');
addScript('Music');
addScript('Medicine');
addScript('Geography');