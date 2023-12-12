import React, { useEffect } from 'react'
import './Styling.css';

function Navbar() {

    useEffect(() => {
        const subContents = document.querySelectorAll('.sub-contents');

        subContents.forEach(subContent => {
            const navLink = subContent.previousElementSibling.querySelector('.nav-item .nav-link');


            subContent.addEventListener('mouseover', function () {
                navLink.classList.add('highlighted');
            });

            subContent.addEventListener('mouseout', function () {
                navLink.classList.remove('highlighted');
            });

        });
    }, []);

    const sections = [
        {
            title: 'Case Bound Diaries',
            links: [
                'Camel Tan Diary',
                'Denim Blue Flap Diary',
                'Plum Purple Diary',
                'Rustic Sand Diary',
                'Blissful Beige Tri-Fold DiaryPopular',
                'New Arrivals',

            ],
        },

        {
            title: 'Bound Diaries',
            links: [
                'Camel Diary',
                'Blue Flap Diary',
                'Plum Purple Diary',
                'Rustic Sand Diary',
                'Beige Tri-Fold DiaryPopular',
                'New Arrivals',

            ],
        },
        {
            title: 'Case Bound Diaries',
            links: [
                'Camel Tan Diary',
                'Denim Blue Flap Diary',
                'Plum Purple Diary',
                'Rustic Sand Diary',
                'Blissful Beige Tri-Fold DiaryPopular',
                'New Arrivals',

            ],
        },

        {
            title: 'Bound Diaries',
            links: [
                'Camel Diary',
                'Blue Flap Diary',
                'Plum Purple Diary',
                'Rustic Sand Diary',
                'Beige Tri-Fold DiaryPopular',
                'New Arrivals',

            ],
        }
    ];

    return (
        <>

            <div className="top-curve">
                <div className="aboveNav">
                    <div className="insideAboveNav">
                        <div className="leftside">
                            <a className="nav-link" href="Signup.html">Get Perks</a>
                            <a className="nav-link" href="Signup.html">Story Contest</a>
                        </div>
                        <div className="rightside">
                            <a className="nav-link" href="Signup.html">Store</a>
                            <a className="nav-link" href="Signup.html">Sample Kit</a>
                            <a className="nav-link" href="/">Business Solutions</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbr-above">
                <div className="navbr">
                    <div className="navbr-content">
                        <div className="leftside">

                            <a className="logo" href="/">COMPANY LOGO</a>

                            <div className="search" role="button">
                                <div className="search-box"><input className="input-design" type="text" aria-label="Search"
                                    placeholder="Search" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-search"
                                        viewBox="0 -5 20 20">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="rightside">
                            <div className="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold"
                                    className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                </svg>

                                <span>
                                    <a href="/" className="nav-text">
                                        Help Center
                                    </a>
                                </span>

                            </div>



                            <div className="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-person-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>

                                <span>
                                    <a href="/Login" className="nav-text">
                                        Login/Signup
                                    </a>
                                </span>

                            </div>

                            <div className="nav-icon-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gold" className="bi bi-cart3"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-curve">
                <div className="belowNav">
                    <div className="insideBelowNav">

                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link dropdown-toggle" href="/categories/calendars-and-diaries">Calendars &
                                    Diaries</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">

                                    {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>



                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link dropdown-toggle " href="/categories/same-day-products">Same Day Delivery</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link dropdown-toggle" href="/categories/stationery">Stationery</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link dropdown-toggle" href="/categories/corporate-gifting">Corporate Gifts &
                                    Rewards</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link" href="/categories/drinkwares">Drinkware</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link" href="/categories/packaging-materials">Labels &
                                    Packaging</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link " href="/categories/t-shirts">Apparel</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link " href="/categories/signages-and-banners">Signages</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link " href="/categories/marketing">Marketing & Promo</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="nav-item dropdown ">
                            <li>
                                <a className="nav-link" href="/categories/photo-gifts">Photo Gifts</a>
                            </li>
                            <div className="sub-contents">
                                <div className="row">
                                {sections.map((section, index) => (
                                        <div key={index} className="col">
                                            <strong>{section.title}</strong>
                                            <hr />
                                            <div className="list-group">
                                                {section.links.map((link, linkIndex) => (
                                                    <a key={linkIndex} className="color-change footer-icon-text" href="/">
                                                        {link}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="breadcrumb">
                <span><a href="/">Home </a></span>

            </div>

        </>
    )
}

export default Navbar
