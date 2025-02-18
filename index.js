

/**
 * Get the HTML element where everything is rendered. Assumed to be at a div
 * with ID root for now.
 */
let root = document.getElementById('div1');

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
    fontSize: '16px',
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

let vSpace = (height) => {
    let output = createContainer('div', {
        height: height,
        width: '100%',
    });
    return output;
}

let centered = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

let miniTitle = {
    backgroundColor: '#ffda44',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
}

let descriptionStyle = {
    color: '#677078',
    lineHeight: '1.68',
}

let flexWrapContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

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
    let backgroundColor = sectionCounter & 1 ? '#f4f5f8' : '';
    let output = createContainer('section', {
        minHeight: '15dvh',
        backgroundColor: backgroundColor,
        fontFamily: 'Arial',
    });
    return output;
}

let [homeSlider, homeCompany, homeCeo, homeServices, homeStats, homeServicesOther, homeTestimonials, homePublications, homeNews, homePartners] = Array.from({length: 10}, (_, i) => {return makeSection()});


setChildren(main, [
    homeSlider, homeCompany, homeCeo, homeServices, 
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
        fontSize: '13px',
        padding: '20px 20px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: '#61656f',
    });
    return output;
}

let createHeader = (header) => {
    let logoTopInfo = createContainer('div', centered, {
        width: '1170px',
        maxWidth: '100%',
        height: '60px',
        display: 'flex',
        padding: '25px 0',
        alignItems: 'center',
    });
    let contact = createContainer('div', {
        display: 'flex',
        height: '60px',
    });
    let call = contactCard('CALL US', '1800 555 5555');
    let email = contactCard('EMAIL US', 'info@deepwaterenergy.com');
    let market = contactCard('MARKET', '256.78 (+4.26)');
    email.style.borderLeft = '1px solid #e9ecf2';
    email.style.borderRight = '1px solid #e9ecf2';
    setChildren(contact, [
        call, email, market, hSpace('20px'), tallImg(fb), hSpace('20px'),
        tallImg(twitter), hSpace('20px'), tallImg(linkedin)
    ]);
    let logoImg = tallImg(logoImgSrc);
    let barsImg = createImage(bars, {
        width: '44px',
        height: '34px',
    });
    setChildren(logoTopInfo, [
        logoImg, expandingDiv(), contact, barsImg
    ]);
    let navbar = createContainer('nav', {
        backgroundColor: '#f4f5f8',
        display: 'flex',
    });
    let menu = createContainer('div', {
        display: 'flex',
        listStyleType: 'none',
    });
    let altMenu = createText('div', '\u{1f4de} <b>Call Us</b>&nbsp;&nbsp;&nbsp; SUPPORT: 1800 555 5555&nbsp;&nbsp;&nbsp; OFFICE:+1 (281) 555 5555', descriptionStyle, {
        width: '100%',
        backgroundColor: '#f4f5f8',
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: '20px',
        fontSize: '14px',
    });
    setChildren(menu, [
        menuItem('HOME'), menuItem('ABOUT'), menuItem('PRODUCT & SERVICES'), 
        menuItem('TECHNOLOGY'), menuItem('NEWS & MEDIA'), menuItem('INVESTORS'),
        menuItem('PUBLICATIONS'), menuItem('SUSTAINABILITY'), 
        menuItem('CAREERS'), menuItem('CONTACT'),
    ]);
    setChildren(navbar, [expandingDiv(), menu, expandingDiv()]);
    setChildren(header, [logoTopInfo, navbar, altMenu]);
    let checkWidth = () => {
        contact.style.display = 'flex';
        barsImg.style.display = 'none';
        navbar.style.display = 'flex';
        altMenu.style.display = 'none';
        containerWidth = logoTopInfo.offsetWidth;
        logoWidth = logoImg.offsetWidth;
        contactWidth = contact.offsetWidth;
        if(contactWidth + logoWidth >= containerWidth) {
            contact.style.display = 'none';
            barsImg.style.display = 'block';
            navbar.style.display = 'none';
            altMenu.style.display = 'block';
        }
    };
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
    checkWidth();
}
createHeader(header);

/**
 * Home slider section
 */
let createHomeSlider = (section) => {
    Object.assign(section.style, {
        position: 'relative',
        width: '100%',
        height: '65dvh',
        maxHeight: '1100px',
        overflow: 'hidden',
    });
    let backgroundImage = createImage(sliderImgSrc, {
        filter: 'brightness(70%) sepia(25%)',
        width: 'max(100%, 900px)',
        height: 'auto',
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translate(0%, -50%)',
    });
    let overlay = createContainer('div', {
        position: 'absolute',
        top: '50%',
        left: '0%',
        width: '100%',
        transform: 'translate(0%, -50%)',
        display: 'flex',
        color: 'white',
        flexDirection: 'column',
        fontFamily: 'Arial',
        padding: '15%',
    });
    let bigText = createText('h2', 'Targeting High Impact Exploration For The Offshore Industry', {
        fontSize: '40px',
        margin: '0 0 30px',
        maxWidth: '600px',
        width: '70%',
    });
    let smallText = createText('p', 'Advanced analysis, risk assessment, and efficient resource allocation to maximize the chances of successful exploration and development.', {
        fontSize: '18px',
        margin: '0 0 40px',
        maxWidth: '600px',
        width: '70%',
    });
    let button = createButton('LEARN MORE', buttonDefault, {
        width: '150px',
    });
    setChildren(overlay, [bigText, smallText, button]);
    setChildren(section, [backgroundImage, overlay]);
}

createHomeSlider(homeSlider);

/**
 * Create home company section
 */

let createHomeCompany = (section) => {
    section.style.padding = '80px 0';
    section.style.display = 'flex';
    let container = createContainer('div', centered, {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        gap: '30px',
        maxWidth: 'calc(100% - 30px)',
    });
    let description = createContainer('div', {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '400px',
        width: '30dvw',
        margin: '0px 15px',
    });
    let title = createText('h2', 'THE COMPANY', miniTitle, {
        width: '130px',
    });
    let p1 = createText('h4', 'Collaboratively develop comprehensive solutions through shared goals and objectives.', {
        color: 'blue',
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '1.4',
    });
    let p2 = createText('p', 'Deepwater Energy Partners is dedicated to building strong, collaborative relationships to deliver innovative and sustainable energy solutions. We focus on meeting customer needs by optimizing our supply chain and driving industry advancements.', descriptionStyle);
    let button = createButton('READ OUR MISSION', buttonDefault, {
        backgroundColor: '#093eb6',
        color: 'white',
        width: '200px',
    });
    setChildren(description, [title, p1, p2, button]);
    let illustration = tallImg(company);
    illustration.style.maxHeight = '370px';
    setChildren(container, [description, illustration]);
    setChildren(section, [container]);

    let checkWidth = () => {
        illustration.style.display = 'block';
        illustrationWidth = illustration.offsetWidth;
        descriptionWidth = description.offsetWidth;
        containerWidth = container.offsetWidth;
        if(illustrationWidth + descriptionWidth > containerWidth) {
            illustration.style.display = 'none';
        }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
}
createHomeCompany(homeCompany);

/**
 * Create home-ceo section
 */
let createHomeCEO = (section) => {
    section.style.display = 'flex';
    let container = createContainer('div', centered, {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: '60px',
        maxWidth: 'calc(100% - 30px)',
    });
    let ceoImg = createImage(ceoImgSrc, {
        width: '474px',
        height: 'auto',
        padding: '0px 15px',
    });
    let description = createContainer('div', {
        width: '30dvw',
        minWidth: '400px',
        padding: '35px 15px',
    });
    let title = createText('h2', 'OUR LEADERSHIP', miniTitle, {
        width: '145px',
    });
    let subtitle = createText('h4', 'A MESSAGE FROM OUR CEO', {
        fontSize: '20px', 
        color: '#093eb6',
        fontWeight: 'bold',
        lineHeight: '1.4',
    });
    let p1 = createText('p', 'At Deepwater Energy Partners, we are committed to being at the forefront of the offshore energy industry. Our focus is on developing innovative solutions that not only meet the world\'s growing energy demands but also prioritize sustainability and operational efficiency. By harnessing cutting-edge technology and fostering strong partnerships, we are dedicated to creating a cleaner, more resilient energy future. Our team of experts is passionate about pushing the boundaries of offshore exploration and production, while always upholding the highest standards of safety and environmental responsibility.', descriptionStyle);
    let signature = createImage(ceoSignature);
    let ceoName = createText('p', 'Gregory Walker, CEO');
    setChildren(description, [title, subtitle, p1, signature, ceoName]);
    setChildren(container, [ceoImg, description]);
    setChildren(section, [container]);

    let checkWidth = () => {
        ceoImg.style.display = 'block';
        imgWidth = ceoImg.offsetWidth;
        descriptionWidth = description.offsetWidth;
        containerWidth = container.offsetWidth;
        if(imgWidth + descriptionWidth > containerWidth) {
            ceoImg.style.display = 'none';
        }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
}
createHomeCEO(homeCeo);

/**
 * Home services section
 */

let serviceBlock = (imgSrc, title, description) => {
    let output = createContainer('div', {
        minWidth: '350px',
        width: '25dvw',
        display: 'flex',
        flexDirection: 'column',
    });
    let image = createImage(imgSrc);
    let titleDiv = createText('h4', title, {
        fontSize: '20px', 
        color: '#093eb6',
        fontWeight: 'bold',
        lineHeight: '1.4',
    });
    let descriptionDiv = createText('p', description, descriptionStyle);
    let button = createText('div', 'READ MORE', {
        color: '#ffd426',
        fontSize: '16px',
        padding: '20px 0px',
        fontWeight: 'bold',
    });
    setChildren(output, [image, titleDiv, descriptionDiv, button]);
    return output;
}

let makeHomeServices = (section) => {
    let container = createContainer('div', centered, {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        gap: '20px',
        maxWidth: 'calc(100% - 100px)',
    });
    let s1 = serviceBlock(service1ImgSrc, 'TECHNOLOGY & INNOVATION', 'Our experienced team drives offshore exploration and production through cutting-edge technology and data-driven solutions.');
    let s2 = serviceBlock(service2ImgSrc, 'OUR OPERATIONS', 'We deliver safe, efficient, and sustainable offshore energy solutions through innovative exploration, development, and production.');
    let s3 = serviceBlock(service3ImgSrc, 'SOCIAL RESPONSIBILITY', 'We are committed to operating responsibly, protecting the environment, and supporting the communities where we work.');
    setChildren(container, [s1, s2, s3]);
    setChildren(section, [container]);
    let checkWidth = () => {
        s2.style.display = 'flex';
        s3.style.display = 'flex';
        overflowWidth = s1.offsetWidth + s2.offsetWidth + s3.offsetWidth;
        containerWidth = container.offsetWidth;
        if(overflowWidth > containerWidth) {
            s2.style.display = 'none';
            s3.style.display = 'none';
        }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
}

makeHomeServices(homeServices);

/**
 * Create home stats
 */
let statBox = (img, number, caption) => {
    let output = createContainer('div', flexWrapContainer, {
        backgroundColor: '#f4f5f8',
        flex: '1',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: '20px 10px',
        justifyContent: 'center',
        minWidth: '200px',
    });
    let image = createImage(img, {
        width: 'auto',
        height: '40px',
    });
    let numberDiv = createText('div', number, {
        fontSize: '36px',
        color: '#093eb6',
        fontWeight: 'bold',
    });
    let captionDiv = createText('div', caption, descriptionStyle);
    let descriptionDiv = createContainer('div', {
        marginLeft: '10px',
        textAlign: 'center',
    });
    setChildren(descriptionDiv, [numberDiv, captionDiv]);
    setChildren(output, [image, descriptionDiv]);
    return output;
};

let makeStats = (section) => {
    section.style.backgroundColor = 'lightgray';
    section.style.minHeight = '1px';
    let offices = statBox(globe, '26', 'Offices Worldwide');
    let empl = statBox(friends, '10K', 'Satisfied Employees');
    let refineries = statBox(fire, '126', 'Refineries & Operations');
    let awards = statBox(badge, '35', 'Awards & Recognitions');
    let container = createContainer('div', {
        width: '100%',
        display: 'flex',
        gap: '1px',
        alignItems: 'center',
        flexWrap: 'wrap',
    });
    setChildren(container, [offices, empl, refineries, awards]);
    setChildren(section, [container]);
}
makeStats(homeStats);

/**
 * Create home services other section
 */
let serviceOtherBlock = (imgSrc, title, description) => {
    let output = createContainer('div', {
        display: 'flex',
        justifyContent: 'center',
        width: 'calc(33.3% - 60px)',
        height: '100px',
        padding: '0 30px',
    });
    let imageContainer = createContainer('div', {
        border: '2px solid #ffd426',
        height: '78px',
        width: '78px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: '0',
        marginRight: '20px',
        marginTop: '11px',
        marginBottom: '11px',
    });
    let image = createImage(imgSrc);
    let descriptionContainer = createContainer('div', {
        width: 'calc(100% - 78px)',
    });
    let titleDiv = createText('h4', title, {
        color: '#093eb6',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0 0 10px',
    });
    let descriptionDiv = createText('p', description, descriptionStyle);
    setChildren(imageContainer, [image]);
    setChildren(descriptionContainer, [titleDiv, descriptionDiv]);
    setChildren(output, [imageContainer, descriptionContainer]);

    let checkWidth = () => {
        descriptionContainer.style.display = 'block';
        if(descriptionContainer.offsetWidth < 160) {
            descriptionContainer.style.display = 'none';
        }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);

    return output;
};

let makeServicesOther = (section) => {
    section.style.padding = '80px 0';
    let container = createContainer('div', {
        margin: '0px 80px',
    });
    let title = createText('h2', 'SERVICES', {
        fontSize: '40px',
        color: '#093eb6',
        fontWeight: 'bold',
        textAlign: 'center',
    });
    let subtitle = createText('h4', 'Deepwater Energy Partners Delivers Comprehensive Offshore Energy Solutions', {
        fontSize: '20px',
        color: '#4c4f54',
        fontWeight: 'bold',
        lineHeight: '1.4',
        textAlign: 'center',
    });
    let row1 = createContainer('div', flexWrapContainer);
    let row2 = createContainer('div', flexWrapContainer, {
        margin: '80px 0',
    });
    let row3 = createContainer('div', flexWrapContainer);
    let s1 = serviceOtherBlock(serviceIcon1ImgSrc, 'SHELL CHEMICALS', 'High-performance additives that enhance drilling fluid properties.');
    let s2 = serviceOtherBlock(serviceIcon2ImgSrc, 'COMMERCIAL FUELS', 'Powering businesses with reliable, high-quality energy solutions.');
    let s3 = serviceOtherBlock(serviceIcon3ImgSrc, 'AVIATION FUELS', 'Delivering high performance and reliability for safe and efficient flight.');
    let s4 = serviceOtherBlock(serviceIcon4ImgSrc, 'LUBRICANTS', 'Optimize equipment performance and extend lifespan.');
    let s5 = serviceOtherBlock(serviceIcon5ImgSrc, 'MARINE FUELS', 'Propelling vessels efficiently and reliably.');
    let s6 = serviceOtherBlock(serviceIcon6ImgSrc, 'LIQUIFIED PETROLIUM GAS', 'A clean-burning, versatile energy source for homes and industries.');
    let s7 = serviceOtherBlock(serviceIcon7ImgSrc, 'SHELL SULPHUR', 'High-purity, versatile industrial mineral with diverse applications.');
    let s8 = serviceOtherBlock(serviceIcon8ImgSrc, 'SHELL TRADING', 'Optimizing global energy markets through strategic trading.');
    let s9 = serviceOtherBlock(serviceIcon9ImgSrc, 'SHELL FOR SUPPLIERS', 'Reliable ways for suppliers to contribue to our energy solutions.');
    setChildren(row1, [s1, s2, s3]);
    setChildren(row2, [s4, s5, s6]);
    setChildren(row3, [s7, s8, s9]);
    setChildren(container, [title, subtitle, vSpace('50px'), row1, row2, row3]);
    setChildren(section, [container]);
}
makeServicesOther(homeServicesOther);

/**
 * Create testimonials
 */
let quoteBox = (quote, person, description) => {
    let output = createContainer('div', {
        maxWidth: '400px',
        margin: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    });
    let quoteTextDiv = createText('div', quote, {
        opacity: 0,
    });
    let quoteTextTop = createText('div', quote, {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        padding: '30px',
    });
    let quoteContainer = createContainer('div', centered, {
        position: 'relative',
        fontSize: '20px', 
        fontFamily: 'Times New Roman',
        color: '#888',
        backgroundColor: 'white',
        padding: '30px',
        lineHeight: 1.68,
        maxWidth: '350px',
        flex: '1',
    });
    let triangleContainer = createContainer('div', {
        height: '25px',
        backgroundColor: 'transparent',
    });
    let triangle = createContainer('div', centered, {
        width: '0',
        height: '0',
        borderTop: '25px solid white',
        borderRight: '25px solid transparent',
        borderLeft: '25px solid transparent',
    });
    let bigQuoteMark = createText('div', '\u{201c}', {
        position: 'absolute',
        top: '-20px',
        left: '20px',
        fontSize: '100px',
        color: '#fff3cb',
        fontWeight: 'bold',
        zIndex: '0',
    });
    setChildren(triangleContainer, [triangle]);
    let nameDiv = createText('h4', person, {
        color: '#093eb6',
        fontSize: '18px',
        textAlign: 'center',
    });
    let descriptionDiv = createText('p', description, descriptionStyle, {
        textAlign: 'center',
    });
    setChildren(quoteContainer, [bigQuoteMark, quoteTextDiv, quoteTextTop]);
    setChildren(output, [quoteContainer, triangleContainer, nameDiv, descriptionDiv]);
    return output;
}

let createTestimonials = (section) => {
    section.style.padding = '80px 0';
    let titleDiv = createText('h2', 'DON\'T TAKE OUR WORD', centered, miniTitle, {
         width: '200px',
    });
    let subtitleDiv = createText('h2', 'CLIENT TESTIMONIALS', {
        fontSize: '40px',
        color: '#093eb6',
        fontWeight: 'bold',
        textAlign: 'center',
    });
    let quoteContainer = createContainer('div', {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflow: 'hidden',
    });
    let quote1 = quoteBox('Deepwater Energy Partners has been an invaluable asset. Their expertise in offshore exploration has been instrumental in identifying and developing profitable projects. Their commitment to safety and environmental responsibility is evident in their operations, and their collaborative approach has fostered a strong partnership.', 'James Sim', 'Marketing Lead, XYZ Chemicals');
    let quote2 = quoteBox('We were impressed with Deepwater Energy Partners\' ability to deliver results on time and within budget. Their innovative solutions and cutting-edge technology have significantly enhanced our offshore operations. Their team\'s deep industry knowledge and problem-solving skills have made them a trusted partner.', 'Christina Smith', 'Divisional Manager, Oilcorp Inc.');
    let quote3 = quoteBox('Deepwater Energy Partners has exeeded our expectations in every aspect of our project. Their focus on sustainability and their dedication to building long-term relationships with clients is commendable. Their team\'s expertise in navigating complex regulatory environments has been essential to the success of our venture', 'Simon Hernandez', 'Founder & CEO, Marine Engineering');
    setChildren(quoteContainer, [quote1, quote2, quote3]);
    setChildren(section, [titleDiv, subtitleDiv, quoteContainer]);

    let checkWidth = () => {
        quote2.style.display = 'flex';
        quote3.style.display = 'flex';
        let screenWidth = window.innerWidth;
        if(screenWidth < 967) {
            quote3.style.display = 'none';
        }
        if(screenWidth < 700) {
            quote2.style.display = 'none';
        }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
}
createTestimonials(homeTestimonials);

/**
 * Create publications
 */
let panelHeading = (title, symbol) => {
    let output = createContainer('div', {
        padding: '20px',
        paddingBottom: '10px',
        border: '1px solid rgba(244, 244, 244, 0.8)',
        display: 'flex',
        flexWrap: 'nowrap',
        alignContent: 'center',
    });
    let titleDiv = createText('div', title, {
        color: '#093eb6',
        fontWeight: 'bold',
        fontSize: '20px',
        margin: '0',
        padding: '0',
    });
    let symbolDiv = createText('div', symbol, {
        color: '#dadcdd',
        fontSize: '29px',
        fontWeight: 'bold',
    });
    setChildren(output, [titleDiv, expandingDiv(), symbolDiv]);
    return output;
}

let panelContent = (text) => {
    return createText('p', text, descriptionStyle, {
        padding: '20px',
        border: '1px solid rgba(244, 244, 244, 0.8)',
    });
}

let smallDownloadLink = (filename, size) => {
    let output = createContainer('div', {
        padding: '15px',
        color: '#093eb6',
        fontSize: '16px',
        display: 'flex',
        border: '1px solid #f4f5f8',
        marginBottom: '1px',
    });
    let filenameDiv = createText('div', filename);
    let sizeDiv = createText('div', size);
    setChildren(output, [filenameDiv, expandingDiv(), sizeDiv]);
    return output;
};

let createPublications = (section) => {
    section.style.padding = '80px 0';
    let container = createContainer('div', centered, {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1170px',
        gap: '50px',
    });
    let panels = createContainer('div', {
        flex: 1,
    });
    let h1 = panelHeading('Petrolium Engineering', '-');
    let h2 = panelHeading('International Trade', '+');
    let h3 = panelHeading('Chemicals and Refining', '+');
    let text1 = panelContent('Deepwater Energy Partners is committed to building a robust and collaborative ecosystem within the offshore energy industry. We prioritize the development of strategic alliances to share knowledge, resources, and best practices. By fostering a culture of innovation and shared goals, we aim to create a network of industry leaders capable of tackling complex challenges and driving sustainable growth. Our focus on cultivating professional communities extends beyond internal operations. We actively seek opportunities to engage with external stakeholders, including government agencies, academic institutions, and other industry players.');
    setChildren(panels, [h1, text1, h2, h3]);

    let publicationsContainer = createContainer('div', {
        flex: 1,
        border: '1px solid #f4f5f8',
    });
    let publicationsDiv = createText('h2', 'Publications', {
        backgroundColor: '#093eb6',
        color: 'white',
        padding: '25px',
        marginTop: '0',
    });
    let linksBox = createContainer('div', {
        padding: '10px 15px',
    });
    let bigDownloadLink = createContainer('div', {
        padding: '10px 10px 10px 15px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #f4f5f8',
    });
    let pdfSymbol = createImage(pdfImgSrc, {
        height: '40px',
        width: 'auto',
    });
    let downloadText = createText('div', '&nbsp;Download PDF', {
        color: '#093eb6',
        fontSize: '20px',
        fontWeight: 'bold',
    });
    let sizeText = createText('div', '1.5MB', {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#677078',
    });
    setChildren(bigDownloadLink, [pdfSymbol, downloadText, expandingDiv(), sizeText]);
    let otherDownloadsDiv = createText('div', 'Other Downloads', {
        fontSize: '14px',
        color: '#9ea6ae',
    });
    let annual = smallDownloadLink('Annual Report', '2.4 MB');
    let sustainability = smallDownloadLink('Sustainability Report', '150 KB');
    let statistical = smallDownloadLink('Statistical Report', '250 KB');
    let energy = smallDownloadLink('Energy Outlook', '1.8 MB');
    let chairman = smallDownloadLink('Chairman\'s Message', '550KB');
    setChildren(linksBox, [
        bigDownloadLink, 
        vSpace('20px'),
        otherDownloadsDiv,
        vSpace('25px'),
        annual,
        sustainability, 
        statistical,
        energy,
        chairman,
    ]);
    setChildren(publicationsContainer, [publicationsDiv, linksBox]);
    setChildren(container, [panels, publicationsContainer]);
    setChildren(section, [container]);

    let checkWidth = () => {
        publicationsContainer.style.display = 'block';
        let width = panels.offsetWidth;
        if(width < 350) {
            publicationsContainer.style.display = 'none';
        }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
}
createPublications(homePublications);

/**
 * Create news section
 */
let newsBlock = (imgSrc, month, day, title, author, department) => {
    let output = createContainer('div', {
        backgroundColor: 'white',
        flex: 1,
        maxWidth: '400px',
        position: 'relative',
    });
    let thumbnail = createImage(imgSrc, {
        width: '100%',
        aspectRatio: 1.5,
        overflow: 'hidden',
    });
    let dateBlock = createContainer('div', {
        color: 'white',
        backgroundColor: '#093eb6',
        width: '50px',
        position: 'absolute',
        top: '10px',
        right: '10px',
    });
    let monthDiv = createText('div', month, {
        margin: '5px',
        fontSize: '14px',
    });
    let dateDiv = createText('div', day, {
        margin: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
    });
    setChildren(dateBlock, [monthDiv, dateDiv]);
    let titleDiv = createText('div', title, {
        color: '#41454f',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '30px 15px',
    });
    let descriptionText = 'By <a style=\'color: rgb(9, 62, 182)\'>' + author + '</a> in ' + department;
    let descriptionDiv = createText('div', descriptionText, {
        color: '#aeb3b7',
        fontSize: '16px',
        margin: '30px 15px',
    });
    setChildren(output, [thumbnail, dateBlock, titleDiv, descriptionDiv]);
    return output;
}

let createNews = (section) => {
    section.style.padding = '80px 0';
    let container = createContainer('div', centered, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    });
    let title = createText('h2', 'NEWS AND MEDIA', miniTitle, {
        width: '150px',
    });
    let subtitle = createText('h2', 'LATEST FROM OUR BLOG', {
        color: '#093eb6',
        fontSize: '40px',
    });
    let newsBlockContainer = createContainer('div', {
        display: 'flex',
        gap: '30px',
        maxWidth: '1170px',
    });
    let news1 = newsBlock(news1ImgSrc, 'APR', '06', 'FUEL TRANSPORTATION AND RAILWAY RULES', 'Eduard Jones', 'Transportation');
    let news2 = newsBlock(news2ImgSrc, 'MAY', '24', 'FIELD TRAINING SESSIONS FOR NEW EMPLOYEES', 'Melinda Chavez', 'Careers');
    let news3 = newsBlock(news3ImgSrc, 'JUN', '17', 'A STUDY ON SUSTAINABILITY & ENVIRONMENTAL FACTORS', 'Jennifer Rose', 'Environment');
    setChildren(newsBlockContainer, [news1, news2, news3]);
    let readButton = createButton('READ THE BLOG', buttonDefault, {
        color: 'white',
        backgroundColor: '#093eb6',
        width: '140px',
    });
    setChildren(container, [title, subtitle, newsBlockContainer, vSpace('50px'), readButton]);
    setChildren(section, [container]);

    let checkWidth = () => {
        news1.style.display = 'block';
        news2.style.display = 'block';
        news3.style.display = 'block';
        let width = newsBlockContainer.offsetWidth;
        if(width < 980) news3.style.display = 'none';
        if(width < 650) news2.style.display = 'none';
    }
    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
    checkWidth();
}
createNews(homeNews);

/**
 * Create partners
 */

let partnerImageBlock = (imgSrc) => {
    let output = createContainer('div', {
        border: '1px solid #f4f5f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
        width: '160px',
        padding: '30px',
    });
    let image = createImage(imgSrc, {
        objectFit: 'contain',
    });
    setChildren(output, [image]);
    return output;
}

let createPartners = (section) => {
    section.style.padding = '80px 0';
    let container = createContainer('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }); 
    let titleDiv = createText('h2', 'OUR PARTNERS', {
        color: '#093eb6',
        fontSize: '40px',
        marginBottom: '50px',
    });
    let partnerContainer = createContainer('div', {
        display: 'flex',
        width: '1170px',
        maxWidth: '100%',
        gap: '20px',
        justifyContent: 'center',
    });
    let partner1 = partnerImageBlock(partner1ImgSrc);
    let partner2 = partnerImageBlock(partner2ImgSrc);
    let partner3 = partnerImageBlock(partner3ImgSrc);
    let partner4 = partnerImageBlock(partner4ImgSrc);
    setChildren(partnerContainer, [partner1, partner2, partner3, partner4]);
    setChildren(container, [titleDiv, partnerContainer, vSpace('80px')]);
    setChildren(section, [container]);

    let checkWidth = () => {
        partner1.style.display = 'block';
        partner2.style.display = 'block';
        partner3.style.display = 'block';
        partner4.style.display = 'block';
        let width = partnerContainer.offsetWidth;
        if(width < 950) partner4.style.display = 'none';
        if(width < 700) partner3.style.display = 'none';
    }

    window.addEventListener('resize', checkWidth);
    window.addEventListener('load', checkWidth);
    checkWidth();
}
createPartners(homePartners);

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
    let descDiv = createText('p', description, descriptionStyle);
    setChildren(output, [titleDiv, descDiv]);
    return output;
};

let createFooter = (footer) => {
    Object.assign(footer.style, {
        backgroundColor: '#03153e'
    });
    let prefooter = createContainer('div', {
        transform: 'translate(0, -73px)',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: 1.4,
    });
    let prefooterWrapper = createContainer('div', centered, {
        display: 'inline-flex',
        flexWrap: 'wrap',
    });
    let prefooterLeft = prefooterBlock('#ffda43', 'HEAD OFFICE', 
        'PO Box 16122, Collins Street West <br/>Houston, TX 77111 USA');
    let prefooterMid = prefooterBlock('#ffd426', 'CALL US',
        'SUPPORT 1800 555 5555 <br/>OFFICE: +1 (281) 555 5555');
    let prefooterRight = prefooterBlock('#ffd012', 'EMAIL US',
        'info@deepwaterenergy.com <br/>sales@deepwaterenergy.com');
    setChildren(prefooterWrapper, [prefooterLeft, prefooterMid, prefooterRight]);
    setChildren(prefooter, [prefooterWrapper]);
    let infoBar = createContainer('div', {
        color: 'rgba(255, 255, 255, 0.5)',
        font: '16px',
        fontFamily: 'Arial',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    });
    let about = createContainer('div', {
        maxWidth: '360px',
        margin: '25px',
    });
    let footerLogoImg = createImage(footerLogo, {
        width: '65%',
        height: 'auto',
    });
    let footerAbout = createText('p', 'Deepwater Energy Partners is committed to fostering strong, collaborative partnerships. We prioritize efficient supply chain management to support the development of innovative energy solutions.', {
        lineHeight: 1.68,
    });
    let footerSocials = createImage(socialsFooterImgSrc, {
        width: '70%',
        height: 'auto',
    });
    setChildren(about, [footerLogoImg, footerAbout, footerSocials]);
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
    let subscribeButton = createButton('SUBSCRIBE NOW', buttonDefault, {
        width: 'auto',
    });
    setChildren(newsletter, [
        createText('h2', 'SUBSCRIBE', {color: '#fff'}),
        createText('p', 'Subscribe to our newsletters to receive latest news and updates.'),
        createText('p', 'Enter your email', {backgroundColor: '#fff', padding: '10px', color: '#777'}),
        subscribeButton
    ]);

    let formatInfoBar = () => {
        //remove all children from infoBar, then re-render it
        while(infoBar.firstChild) {
            infoBar.removeChild(infoBar.lastChild);
        }
        let width = window.innerWidth;
        if(width > 980) {
            let infoBarContentWrapper = createContainer('div', centered, {
                display: 'inline-flex',
                flexWrap: 'wrap',
            });
            setChildren(infoBarContentWrapper, [
                about, links, services, newsletter
            ]);
            setChildren(infoBar, [infoBarContentWrapper]);
            return;
        }
        if(width > 760) {
            let row1 = createContainer('div', {
                display: 'flex',
                flexWrap: 'wrap',
            });
            let row2 = createContainer('div', {
                display: 'flex',
                flexWrap: 'wrap',
            });
            setChildren(row1, [about, links]);
            setChildren(row2, [services, newsletter]);
            setChildren(infoBar, [row1, row2]);
            return;
        }
        let row1 = createContainer('div', {
            display: 'flex',
            flexWrap: 'wrap',
        });
        setChildren(row1, [links, services]);
        setChildren(infoBar, [row1, about]);
    }

    formatInfoBar();
    window.addEventListener('resize', formatInfoBar);
    window.addEventListener('load', formatInfoBar);
    let copyright = createContainer('div', {
        backgroundColor: '#020e28',
        padding: '35px 0',
        display: 'flex',
        color: '#8d8d8d',
        fontFamily: 'Arial',
    });
    let copyrightWrapper = createContainer('div', centered, {
        width: '1170px',
        maxWidth: '100%',
        padding: '0 15px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '15px',
    });
    let copyrightLeft = createText('div', 
        'Copyright \u00a9 2024 Deepwater Energy Partners. All rights reserved.' , {
        flex: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
    })
    let copyrightRight = createText('div', 'Terms of Use \t Privacy Policy &nbsp; | &nbsp Design by Empire Creative', {
        flex: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
    });
    setChildren(copyrightWrapper, [copyrightLeft, copyrightRight]);
    setChildren(copyright, [copyrightWrapper]);
    setChildren(footer, [prefooter, infoBar, copyright]);
};

createFooter(footer);
