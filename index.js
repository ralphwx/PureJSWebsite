

/**
 * Get the HTML element where everything is rendered. Assumed to be at a div
 * with ID root for now.
 */
let root = document.getElementById('root');

/**
 * Create header and main
 */
let header = document.createElement('div');
header.style.width = '100%';
header.style.height = '20dvh';
header.style.backgroundColor = '#afa';
root.appendChild(header);
let main = document.createElement('main');
root.appendChild(header);
root.appendChild(main);

/**
 * Create all the sections
 */
let sectionCounter = 0;
let makeSection = () => {
    sectionCounter++;
    let output = document.createElement('section');
    output.style.width = '100%'
    output.style.minHeight = '15dvh'
    if(sectionCounter & 1) output.style.backgroundColor = 'lightgray';
    else output.style.backgroundColor = 'darkgray';
    return output;
}

let [homeSlider, homeCompany, homeCeo, homeServices, homeLinks, homeProcess, homeStats, homeServicesOther, homeTestimonials, homePublications, homeNews, homePartners] = Array.from({length: 12}, (_, i) => {return makeSection()});

for(child of [homeSlider, homeCompany, homeCeo, homeServices, homeLinks, homeProcess, homeStats, homeServicesOther, homeTestimonials, homePublications, homeNews, homePartners]) {
    main.appendChild(child);
}

/**
 * Home slider section
 */
let createHomeSlider = (section) => {
    let backgroundImage = document.createElement('img')
    backgroundImage.src = sliderBackgroundImage;
    backgroundImage.style.width = '100%';
    backgroundImage.style.height = 'auto';
    backgroundImage.style.filter = 'brightness(60%)';
    let overlay = document.createElement('div');
    let bigText = document.createElement('h2');
    let smallText = document.createElement('p');
    let button = document.createElement('button');
    overlay.style.position = 'absolute';
    overlay.style.top = '50%';
    overlay.style.left = '0%'
    overlay.style.width = '100%';
    overlay.style.tranform = 'translate(0%, -50%)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = 'white';
    overlay.style.flexDirection = 'column';
    overlay.style.fontFamily = 'Arial';
    bigText.innerText = 'Slider Header';
    bigText.style.fontSize = '50px';
    bigText.margin = '0 0 30px';
    smallText.innerText = 'slider description';
    smallText.style.fontSize = '20px';
    smallText.style.margin = '0 0 40px';
    button.innerText = 'Know More';
    button.style.padding = '20px';
    button.style.fontSize = '20px';
    button.style.backgroundColor = '#ffda44';
    for(child of [bigText, smallText, button]) overlay.appendChild(child);
    section.appendChild(backgroundImage);
    section.appendChild(overlay);
}

createHomeSlider(homeSlider);
