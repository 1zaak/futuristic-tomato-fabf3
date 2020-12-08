import React from 'react';
import _ from 'lodash';

import {toStyleObj, withPrefix, markdownify, Link} from '../utils';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="hero" {...(_.get(section, 'background_image', null) ? ({style: toStyleObj('background-image: url(' + withPrefix(_.get(section, 'background_image', null)) + ')')}) : null)}  data-id={_.get(section, 'section_id', null)}>
                <div className="hero__title">{markdownify(_.get(section, 'content', null))}</div>
                {_.map(_.get(section, 'actions', null), (action, action_idx) => (
                    <Link key={action_idx} to={withPrefix(_.get(action, 'url', null))} className="link hero__link">
                      {_.get(action, 'title', null)}
                      {_.get(action, 'arrow', null) && (<svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z" fill="#88DD9B"/></svg>)}
                    </Link>
                ))}
            </section>
        );
    }
}
