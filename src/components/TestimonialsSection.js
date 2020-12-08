import React from 'react';
import _ from 'lodash';

import {withPrefix} from '../utils';

export default class TestimonialsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let testimonials = _.get(section, 'testimonials', null);
        return (
            <section className="content__row" data-id={_.get(section, 'section_id', null)}>
                <h2 className="content__row-title">Testimonials</h2>
                <div className="quotes">
                    {_.map(testimonials, (testimonial, testimonial_idx) => (<React.Fragment key={testimonial_idx + '.2'}>
                    <div key={testimonial_idx} className="quotes__item">
                        <img src={withPrefix('images/quotes.svg')} alt="quotation mark icon" className="quotes__icon"/>
                        <div className="quotes__text">{_.get(testimonial, 'text', null)}</div>
                        <div className="quotes__author">{_.get(testimonial, 'author.name', null)}<span className="quotes__location">, {_.get(testimonial, 'author.location', null)}</span></div>
                    </div>
                    <div key={testimonial_idx + '.1'} className="quotes__separator" />
                    </React.Fragment>))}
                </div>
            </section>
        );
    }
}
