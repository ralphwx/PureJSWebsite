

/**
 * Get the HTML element where everything is rendered. Assumed to be at a div
 * with ID root for now.
 */
let root = document.getElementById('root');

/**
 * Create header and main
 */
let header = document.createElement('header');
header.style.width = '100%';
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
 * Header section
 */

let setChildren = (parentElement, children) => {
    for(child of children) parentElement.appendChild(child);
}

let expandingDiv = () => {
    let output = document.createElement('div');
    output.style.marginLeft = 'auto';
    output.style.marginRight = 'auto';
    return output;
}

let hSpace = (width) => {
    let output = document.createElement('div');
    output.style.width = width;
    return output;
}

let contactCard = (header, descriptor) => {
    let output = document.createElement('div');
    let headerText = document.createElement('div');
    headerText.innerHTML = header;
    Object.assign(headerText.style, {
        color: '#093eb6',
        fontWeight: 'bold',
        marginBottom: '20px',
        fontSize: '15px',
        fontFamily: 'Arial',
    });
    let headerDescriptor = document.createElement('div');
    headerDescriptor.innerHTML = descriptor;
    Object.assign(headerDescriptor.style, {
        color: '#76797f',
        fontSize: '15px',
        margin: '0 0 10px',
        fontFamily: 'Arial',
    });
    output.appendChild(headerText);
    output.appendChild(headerDescriptor);
    output.style.padding = '0 20px';
    output.height = '100%';
    return output;
}

let tallImg = (src) => {
    let output = document.createElement('img');
    output.src = src;
    console.log(src);
    output.style.height = '100%';
    output.style.width = 'auto';
    return output;
}

let menuItem = (inner) => {
    let output = document.createElement('li');
    output.innerHTML = inner;
    Object.assign(output.style, {
        fontSize: '15px',
        padding: '20px 25px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    });
    return output;
}
let createHeader = (header) => {
    header.display = 'flex';
    let logoTopInfo = document.createElement('div');
    Object.assign(logoTopInfo.style, {
        width: '1170px',
        maxWidth: '100%',
        height: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        padding: '25px 0',
    });
    let contact = document.createElement('div');
    contact.style.display = 'flex';
    let call = contactCard('CALL US', '1800 425 4646');
    let email = contactCard('EMAIL US', 'info@offshoreinsustry.com');
    let market = contactCard('MARKET', '256.78 (+4.26)');
    email.style.borderLeft = '1px solid #e9ecf2';
    email.style.borderRight = '1px solid #e9ecf2';
    setChildren(contact, [
        call, email, market, hSpace('20px'), tallImg(fb), hSpace('20px'),
        tallImg(twitter), hSpace('20px'), tallImg(linkedin)
    ]);
    setChildren(logoTopInfo, [
        tallImg(logo), expandingDiv(), contact
    ]);

    let navbar = document.createElement('nav');
    let menu = document.createElement('ul');
    Object.assign(menu.style, {
        width: '1170px',
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '40%',
        backgroundColor: 'purple',
        display: 'flex',
        listStyleType: 'none',
    });
    setChildren(menu, [
        menuItem('HOME'), menuItem('ABOUT'), menuItem('SERVICES'), 
        menuItem('TECHNOLOGY'), menuItem('NEWS & MEDIA'), menuItem('PAGES'),
        menuItem('CAREERS'), menuItem('CONTACT')
    ]);
    setChildren(navbar, [menu]);
    setChildren(header, [logoTopInfo, navbar]);
}
createHeader(header);

/**
 * Home slider section
 */
let createHomeSlider = (section) => {
    section.style.position = 'relative';
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
