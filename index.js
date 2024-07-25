

/**
 * Get the HTML element where everything is rendered. Assumed to be at a div
 * with ID root for now.
 */
let root = document.getElementById('root');

/**
 * Generic helper functions
 */

let setChildren = (parentElement, children) => {
    for(child of children) parentElement.appendChild(child);
}

let createContainer = (type, ...styles) => {
    let output = document.createElement(type);
    for(let style of styles) {
        Object.assign(output.style, style);
    }
    return output;
}

let createText = (type, text, ...styles) => {
    output = createContainer(type, ...styles);
    output.innerHTML = text;
    return output;
}

let createImage = (src, ...styles) => {
    output = document.createElement('img');
    output.src = src;
    for(style of styles) Object.assign(output.style, style);
    return output;
}

let createButton = (inner, ...styles) => {
    output = createContainer('div', ...styles);
    output.innerHTML = inner;
    return output;
}

let buttonDefault = {
    backgroundColor: '#ffda44',
    fontSize: '20px',
    color: '#4c443a',
    fontWeight: 'bold',
    font: 'Arial',
    padding: '15px 40px', 
    borderRadius: '3px',
    textAlign: 'center',
}

let hSpace = (width) => {
    let output = createContainer('div', {width: width});
    return output;
}

let centered = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

let expandingDiv = () => {
    let output = createContainer('div', centered);
    return output;
}
/**
 * Create header and main
 */

let header = createContainer('div', {
    width: '100%',
});
let main = document.createElement('main');
let footer = document.createElement('footer');
setChildren(root, [header, main, footer]);

/**
 * Create all the sections
 */
let sectionCounter = 0;
let makeSection = () => {
    sectionCounter++;
    let backgroundColor = sectionCounter & 1 ? 'lightgray' : 'darkgray';
    let output = createContainer('section', {
        width: '100%',
        minHeight: '15dvh',
        backgroundColor: backgroundColor,
    });
    return output;
}

let [homeSlider, homeCompany, homeCeo, homeServices, homeLinks, homeProcess, homeStats, homeServicesOther, homeTestimonials, homePublications, homeNews, homePartners] = Array.from({length: 12}, (_, i) => {return makeSection()});


setChildren(main, [
    homeSlider, homeCompany, homeCeo, homeServices, homeLinks, homeProcess,
    homeStats, homeServicesOther, homeTestimonials, homePublications, homeNews,
    homePartners,
]);

/**
 * Header section
 */

let contactCard = (header, descriptor) => {
    let output = createContainer('div', {
        padding: '0 20px'
    });
    let headerText = createText('div', header, {
        color: '#093eb6',
        fontWeight: 'bold',
        marginBottom: '20px',
        fontSize: '15px',
        fontFamily: 'Arial',
    });
    let headerDescriptor = createText('div', descriptor, {
        color: '#76797f',
        fontSize: '15px',
        margin: '0 0 10px',
        fontFamily: 'Arial',
    });
    setChildren(output, [headerText, headerDescriptor]);
    return output;
}

let tallImg = (src) => {
    return createImage(src, {
        height: '100%',
        width: 'auto',
    });
}

let menuItem = (inner) => {
    let output = createText('li', inner, {
        fontSize: '15px',
        padding: '20px 25px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: '#61656f',
    });
    return output;
}

let createHeader = (header) => {
    logoTopInfo = createContainer('div', {
        width: '1170px',
        maxWidth: '100%',
        height: '60px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        padding: '25px 0',
    });
    let contact = createContainer('div', {
        display: 'flex',
    });
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
    let navbar = createContainer('nav', {
        backgroundColor: '#f4f5f8',
        display: 'flex',
    });
    let menu = createContainer('div', {
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
    let backgroundImage = createImage(sliderBackgroundImage, {
        width: '100%',
        height: 'auto',
        filter: 'brightness(60%)',
    });
    let overlay = createContainer('div', {
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
    let bigText = createText('h2', 'Slider Header', {
        fontSize: '50px',
        margin: '0 0 30px',
    });
    let smallText = createText('p', 'slider description', {
        fontSize: '20px',
        margin: '0 0 40px',
    });
    let button = createButton('Know More', buttonDefault);
    setChildren(overlay, [bigText, smallText, button]);
    setChildren(section, [backgroundImage, overlay]);
}

createHomeSlider(homeSlider);

/**
 * Create footer
 */

let prefooterBlock = (color, title, description) => {
    let output = createContainer('div', {
        backgroundColor: color,
        fontFamily: 'Arial',
        font: '14px',
        padding: '20px 50px',
        whiteSpace: 'nowrap',
        flex: 1,
    });
    let titleDiv = createText('h4', title);
    let descDiv = createText('p', description);
    setChildren(output, [titleDiv, descDiv]);
    return output;
};

let createFooter = (footer) => {
    Object.assign(footer.style, {
        backgroundColor: '#03153e'
    });
    let prefooter = createContainer('div', {
        transform: 'translate(0, -50%)',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: 1.4,
    });
    let prefooterWrapper = createContainer('div', centered, {
        display: 'inline-flex',
        flexWrap: 'wrap',
    });
    let prefooterLeft = prefooterBlock('#ffda43', 'HEAD OFFICE', 
        'PO Box 16122, Collins Street West <br/>Victoria 8007 Australia');
    let prefooterMid = prefooterBlock('#ffd426', 'CALL US',
        'SUPPORT 1800 425 4646 <br/>OFFICE: +1 (253) 2587 220');
    let prefooterRight = prefooterBlock('#ffd012', 'EMAIL US',
        'hello@offshoreindustry.com <br/>sales@offshoreindustry.com');
    setChildren(prefooterWrapper, [prefooterLeft, prefooterMid, prefooterRight]);
    setChildren(prefooter, [prefooterWrapper]);
    let infoBar = createContainer('div', {
        color: 'rgba(255, 255, 255, 0.5)',
        font: '16px',
        fontFamily: 'Arial',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        justifyContent: 'center',
    });
    let infoBarContentWrapper = createContainer('div', centered, {
        display: 'inline-flex',
        flexWrap: 'wrap',
    });
    let about = createContainer('div', {
        maxWidth: '360px',
        margin: '25px',
    });
    let footerLogoImg = createImage(footerLogo);
    let footerAbout = createText('p', 'Collaboratively deliver partnerships progressive alignments. Assertively premier supply chains before emerging solutions. Monetize high-payoff action items before wireless internal or organic sources exceptional action items.', {
        lineHeight: 1.68,
    });
    setChildren(about, [footerLogoImg, footerAbout]);
    let links = createContainer('div', {margin: '25px'});
    setChildren(links, [
        createText('h2', 'QUICK LINKS', {color: '#ffffff'}),
        createText('p', 'Careers'),
        createText('p', 'Contact'),
        createText('p', 'Market Info'),
        createText('p', 'Technology'),
        createText('p', 'Latest News'),
    ]);
    let services = createContainer('div', {margin: '25px'});
    setChildren(services, [
        createText('h2', 'OUR SERVICES', {color: '#ffffff'}),
        createText('p', 'Chemical & Commercial Fuels'),
        createText('p', 'Aviation Fuels & Marine Fuels'),
        createText('p', 'Lubricants Services'),
        createText('p', 'Liquified Petrolium Gas'),
        createText('p', 'Shell Sulphur, Trading & Supply'),
    ]);
    let newsletter = createContainer('div', {
        margin: '25px',
        maxWidth: '360px',
    });
    let subscribeButton = createButton('SUBSCRIBE NOW!', buttonDefault, {
        width: 'auto',
    });
    setChildren(newsletter, [
        createText('h2', 'NEWSLETTER', {color: '#fff'}),
        createText('p', 'Subscribe to our newsletters to receive latest news and updates.'),
        createText('p', 'Enter your email', {backgroundColor: '#fff', padding: '10px', color: '#777'}),
        subscribeButton
    ]);
    setChildren(infoBarContentWrapper, [about, links, services, newsletter]);
    setChildren(infoBar, [infoBarContentWrapper]);

    let copyright = createContainer('div', {
        backgroundColor: '#020e28',
        padding: '35px 0',
        display: 'flex',
        color: '#8d8d8d',
        fontFamily: 'Arial',
    });
    let copyrightWrapper = createContainer('div', {
        width: '1170px',
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 15px',
        display: 'flex',
    });
    let copyrightLeft = createText('div', 
        'Copyright \u00a9 2016 Offshore Industries. All rights reserved.')
    let copyrightRight = createText('div', 'Terms of Use \t Privacy Policy');
    setChildren(copyrightWrapper, [copyrightLeft, expandingDiv(), copyrightRight]);
    setChildren(copyright, [copyrightWrapper]);
    setChildren(footer, [prefooter, infoBar, copyright]);
};

createFooter(footer);
