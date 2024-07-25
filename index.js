

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
//header.style.backgroundColor = '#afa';
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

let footer = document.createElement('div');
main.appendChild(footer);

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
        color: '#61656f',
    });
    return output;
}
let createHeader = (header) => {
    let logoTopInfo = document.createElement('div');
    Object.assign(logoTopInfo.style, {
        width: '1170px',
        maxWidth: '100%',
        height: '60px',
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
    navbar.style.backgroundColor = '#f4f5f8';
    navbar.style.display = 'flex';
    let menu = document.createElement('div');
    Object.assign(menu.style, {
        width: '1170px',
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    Object.assign(backgroundImage.style, {
        width: '100%',
        height: 'auto',
        filter: 'brightness(60%)',
    });
    let overlay = document.createElement('div');
    let bigText = document.createElement('h2');
    let smallText = document.createElement('p');
    let button = document.createElement('button');
    Object.assign(overlay.style, {
        position: 'absolute',
        top: '50%',
        left: '0%',
        width: '100%',
        transform: 'translate(0%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        flexDirection: 'column',
        fontFamily: 'Arial',
    });
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

/**
 * Create footer
 */

let textBlock = (type, text, ...styles) => {
    let output = document.createElement(type);
    output.innerText = text;
    for(style of styles) Object.assign(output.style, style);
    return output;
}

let prefooterBlock = (color, title, description) => {
    let output = document.createElement('div');
    Object.assign(output.style, {
        backgroundColor: color,
        fontFamily: 'Arial',
        font: '14px',
        padding: '20px 50px',
    });
    let titleDiv = document.createElement('h4');
    titleDiv.innerHTML = title;
    let descDiv = document.createElement('p');
    descDiv.innerHTML = description;
    setChildren(output, [titleDiv, descDiv]);
    return output;
};

let createFooter = (footer) => {
    Object.assign(footer.style, {
        backgroundColor: '#03153e'
    });
    let prefooter = document.createElement('div');
    Object.assign(prefooter.style, {
        transform: 'translate(0, -50%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        lineHeight: 1.4,
    });
    let prefooterLeft = prefooterBlock('#ffda43', 'HEAD OFFICE', 
        'PO Box 16122, Collins Street West <br/>Victoria 8007 Australia');
    prefooterLeft.style.marginLeft = 'auto';
    let prefooterMid = prefooterBlock('#ffd426', 'CALL US',
        'SUPPORT 1800 425 4646 <br/>OFFICE: +1 (253) 2587 220');
    let prefooterRight = prefooterBlock('#ffd012', 'EMAIL US',
        'hello@offshoreindustry.com <br/>sales@offshoreindustry.com');
    prefooterRight.style.marginRight = 'auto';
    setChildren(prefooter, [prefooterLeft, prefooterMid, prefooterRight]);
    let infoBar = document.createElement('div');
    Object.assign(infoBar.style, {
        color: 'rgba(255, 255, 255, 0.5)',
        font: '16px',
        fontFamily: 'Arial',
        display: 'flex',
    });
    infoBar.style.color = 'rgba(255, 255, 255, 0.5)';
    let about = document.createElement('div');
    about.style.maxWidth = '360px';
    about.style.margin = '25px';
    about.style.marginLeft = 'auto';
    let footerLogoImg = document.createElement('img');
    footerLogoImg.src = footerLogo;
    let footerAbout = document.createElement('p');
    footerAbout.style.lineHeight = 1.68;
    footerAbout.innerText = 'Collaboratively deliver parternships progressive alignments. Assertively premier supply chains before emerging solutions. Monetize high-payoff action items before wireless internal or organic sources exceptional action items.';
    setChildren(about, [footerLogoImg, footerAbout]);
    let links = document.createElement('div');
    links.style.margin = '25px';
    setChildren(links, [
        textBlock('h2', 'QUICK LINKS', {color: '#ffffff'}),
        textBlock('p', 'Careers'),
        textBlock('p', 'Contact'),
        textBlock('p', 'Market Info'),
        textBlock('p', 'Technology'),
        textBlock('p', 'Latest News'),
    ]);
    let services = document.createElement('div');
    services.style.margin = '25px';
    setChildren(services, [
        textBlock('h2', 'OUR SERVICES', {color: '#ffffff'}),
        textBlock('p', 'Chemical & Commercial Fuels'),
        textBlock('p', 'Aviation Fuels & Marine Fuels'),
        textBlock('p', 'Lubricants Services'),
        textBlock('p', 'Liquified Petrolium Gas'),
        textBlock('p', 'Shell Sulphur, Trading & Supply'),
    ]);
    let newsletter = document.createElement('div');
    newsletter.style.margin = '25px';
    newsletter.style.marginRight = 'auto';
    newsletter.style.maxWidth = '360px';
    let subscribeButton = document.createElement('button');
    Object.assign(subscribeButton.style, {
        backgroundColor: '#ffd426', 
        fontSize: '22px',
        fontWeight: 'bold',
        padding: '10px', 
        color: '#000',
        width: '100%',
    });
    subscribeButton.innerText = 'SUBSCRIBE NOW!';
    setChildren(newsletter, [
        textBlock('h2', 'NEWSLETTER', {color: '#fff'}),
        textBlock('p', 'Subscribe to our newsletters to receive latest news and updates.'),
        textBlock('p', 'Enter your email', {backgroundColor: '#fff', padding: '10px', color: '#777'}),
        subscribeButton
    ]);
    setChildren(infoBar, [about, links, services, newsletter]);

    let copyright = document.createElement('div');
    Object.assign(copyright.style, {
        backgroundColor: '#020e28',
        padding: '35px 0',
        display: 'flex',
        color: '#8d8d8d',
        fontFamily: 'Arial',
    });
    let copyrightWrapper = document.createElement('div');
    Object.assign(copyrightWrapper.style, {
        width: '1170px',
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 15px',
        display: 'flex',
    });
    let copyrightLeft = document.createElement('div');
    copyrightLeft.innerText = 'Copyright \u00a9 2016 Offshore Industries. All rights reserved.';
    let copyrightRight = document.createElement('div');
    copyrightRight.innerText = 'Terms of Use \t Privacy Policy';
    setChildren(copyrightWrapper, [copyrightLeft, expandingDiv(), copyrightRight]);
    setChildren(copyright, [copyrightWrapper]);
    setChildren(footer, [prefooter, infoBar, copyright]);
};

createFooter(footer);
