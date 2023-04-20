import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import icon1 from '../assets/Footer/Facebook_icon.svg.png';
import icon2 from '../assets/Footer/github.webp';
import icon3 from '../assets/Footer/linkedin.png';

const Footer = () => {
    const footerNavs = [
        {
            label: "Usefull Links",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Content'
                },
                {
                    href: 'javascript:void()',
                    name: 'How it Works'
                },
                {
                    href: 'javascript:void()',
                    name: 'Create'
                },
                {
                    href: 'javascript:void()',
                    name: 'Explore'
                },
                {
                    href: 'javascript:void()',
                    name: 'Terms & Services'
                },
            ],
        },
        {
            label: "Community",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Help Center'
                },
                {
                    href: 'javascript:void()',
                    name: 'Partners'
                },
                {
                    href: 'javascript:void()',
                    name: 'Suggestions'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Newsletters'
                },
            ],
        },
        {
            label: "Partner",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Our Partner'
                },
                {
                    href: 'javascript:void()',
                    name: 'Become a Partner'
                }
            ]
        }]
    return (
        <div>
            <footer className="footer-bg px-4 py-5 max-w-screen-xl mx-auto md:px-8">
                <div className="gap-6 justify-between md:flex">
                    <div className="flex-1">
                        <div className="max-w-xs">
                            <div className='flex items-center mb-[20px]'>
                                <img src={logo} alt="" className='w-[80px]' />
                              
                            </div>
                            <div>
                                <p className='text-color'>A new way to make the Shopping easy, reliable and secure.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex-1 mt-10 space-y-6  justify-between sm:flex md:space-y-0 md:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <ul
                                    className="space-y-4"
                                    key={idx}
                                >
                                    <h4 className="text-white font-medium">
                                        {item.label}
                                    </h4>
                                    {
                                        item.items.map(((el, idx) => (
                                            <li key={idx} className='text-color'>
                                                {el.name}
                                            </li>
                                        )))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-8 py-6 footer-border items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0 text-color">
                        Copyright ©  2023 PerfectDeal. All Rights Reserved.
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center space-x-4">
                            <li className="pl-2 flex items-center justify-center">
                                <img src={icon1} className='w-10' alt="" />


                            </li>

                            <li className="pl-2 flex items-center justify-center">
                                <img src={icon2} className='w-10' alt="" />
                            </li>

                            <li className="pl-2 flex items-center justify-center">
                                <img src={icon3} className='w-10' alt="" />
                            </li>


                        </ul>
                    </div>
                </div>
                <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
            </footer>
        </div>
    );
};

export default Footer;