import React from 'react';
import _ from 'lodash';

import {classNames, Link, withPrefix, toStyleObj} from '../utils';
import Picture from './Picture';

export default class Header extends React.Component {
    render() {
        let page = _.get(this.props, 'page', null);
        let site = _.get(this.props, 'site', null);
        let white_header = _.get(page, 'frontmatter.white_header', null) || false;
        return (
            <header className="header">
                <nav className={classNames('nav', {'nav--light': white_header, 'nav--dark': white_header !== true})}>
                    <div className="nav__logo" data-dark={_.get(site, 'siteMetadata.logo_dark', null)}>
                        <Link to={withPrefix('/')}>
                            {(white_header || (_.get(page, 'frontmatter.template', null) === 'product')) ? (
                                <Picture {...this.props} image={_.get(site, 'siteMetadata.logo_light', null)} cssClass={'nav__logo-image'} alt={'Site logo'} />
                            ) : 
                                <Picture {...this.props} image={_.get(site, 'siteMetadata.logo_dark', null)} cssClass={'nav__logo-image'} alt={'Site logo'} />
                            }
                        </Link>
                    </div>
                    <ul className="nav__menu">
                        {_.map(_.get(site, 'siteMetadata.main_menu', null), (item, item_idx) => {
                            let section = _.get(page, 'frontmatter.section', null) || _.get(page, 'frontmatter.title', null);
                            let isActive = (_.get(item, 'title', null) === section) ? (true) : false;
                            return (<React.Fragment key={item_idx + '.1'}>
                                <li key={item_idx} className="nav__menu-item">
                                    <Link to={withPrefix(_.get(item, 'url', null))} className={classNames('nav__menu-item-link', {'nav__menu-item-link--active': isActive})}>
                                        {_.get(item, 'title', null)}
                                    </Link>
                                </li>
                            </React.Fragment>)
                        })}
                    </ul>
                    <div className="nav__right">
                        
                        <button className="hamburger button button--transparent">
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hamburger__icon-path" fillRule="evenodd" clipRule="evenodd" d="M0 1.00049C0 0.448204 0.447715 0.000488281 1 0.000488281H23C23.5523 0.000488281 24 0.448204 24 1.00049C24 1.55277 23.5523 2.00049 23 2.00049H1C0.447716 2.00049 0 1.55277 0 1.00049ZM0 8.00049C0 7.4482 0.447715 7.00049 1 7.00049H13C13.5523 7.00049 14 7.4482 14 8.00049C14 8.55277 13.5523 9.00049 13 9.00049H1C0.447716 9.00049 0 8.55277 0 8.00049ZM1 14.0005C0.447715 14.0005 0 14.4482 0 15.0005C0 15.5528 0.447715 16.0005 1 16.0005H16C16.5523 16.0005 17 15.5528 17 15.0005C17 14.4482 16.5523 14.0005 16 14.0005H1Z" fill="white"/>
                            </svg>                            
                        </button>
                        <div className="hamburger__content hamburger__content--closed" style={toStyleObj('background-image: url(' + withPrefix(_.get(site, 'siteMetadata.hamburger_background_image', null)) + ')')}>
                            <div className="hamburger__options">
                                
                                <div className="">
                                    <span className="snipcart-items-count" /> Coming soon <span className="snipcart-total-price" />                        </div>
                                </div>
                            
                            <ul className="hamburger__nav">
                                {_.map(_.get(site, 'siteMetadata.main_menu', null), (item, item_idx) => {
                                    let section = _.get(page, 'frontmatter.section', null) || _.get(page, 'frontmatter.title', null);
                                    let isActive = (_.get(item, 'title', null) === section) ? (true) : false;
                                    return (<React.Fragment key={item_idx + '.1'}>
                                        <li key={item_idx} className="hamburger__nav-item">
                                            <Link to={withPrefix(_.get(item, 'url', null))} className={classNames('hamburger__nav-link', {'hamburger__nav-link--active': isActive})}>
                                                {_.get(item, 'title', null)}
                                            </Link>
                                        </li>
                                    </React.Fragment>)
                                })}
                            </ul>
                        </div>                
                    </div>
                </nav>
            </header>
        );
    }
}
