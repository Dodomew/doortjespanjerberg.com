import React from 'react';
import { Elements } from 'prismic-reactjs';
import { linkResolver } from '../prismic-configuration';

// -- Function to add unique key to props
const propsWithUniqueKey = function (props: {}, key: string) {
    return Object.assign(props || {}, { key });
};

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
export const htmlSerializer = function (type: string, element: { url: string; alt: string; data: { target: string; url: string; }; }, content: any, children: {} | null | undefined, key: any) {

    var props = {};
    switch (type) {

        // Add a class to paragraph elements
        case Elements.paragraph:
            //do a br element if <p> has nothing in it
            if (children) {
                const cmsContentChildren = Object.values(children);
                const contentIsEmpty = cmsContentChildren.includes(null);
                if (contentIsEmpty) {
                    return React.createElement('br', propsWithUniqueKey(props, key));
                }
            }

            props = { className: 'cms-p' };
            return React.createElement('p', propsWithUniqueKey(props, key), children);
        case Elements.heading4:
            props = { className: 'cms-h4' };
            return React.createElement('h4', propsWithUniqueKey(props, key), children);
        case Elements.list:
            props = { className: 'cms-ul' };
            return React.createElement('ul', propsWithUniqueKey(props, key), children);
        // Don't wrap images in a <p> tag
        case Elements.image:
            props = { src: element.url, alt: element.alt || '', className: 'cms-media' };
            return React.createElement('img', propsWithUniqueKey(props, key));

        // Add a class to hyperlinks
        case Elements.hyperlink:
            const targetAttr = element.data.target ? { target: element.data.target } : {};
            const relAttr = element.data.target ? { rel: 'noreferrer noopener' } : {};
            props = Object.assign({
                className: 'cms-link',
                href: element.data.url || linkResolver(element.data)
            }, targetAttr, relAttr);
            return React.createElement('a', propsWithUniqueKey(props, key), children);

        // Return null to stick with the default behavior
        default:
            return null;
    }
};