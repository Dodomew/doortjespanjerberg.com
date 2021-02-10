// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { useEffect, useState } from 'react';
import { prismicGetSingle } from '../../ApiHelpers/prismicGetSingle';
import { PrismicDocument } from '../../types/PrismicDocumentType';
import { PrismicImageProps } from '../../types/PrismicImageProps';
import { PrismicLinkProps } from '../../types/PrismicLinkProps';
import { PrismicTextProps } from '../../types/PrismicTextProps';

type SocialProps = {
    social_icon: PrismicImageProps;
    social_title: PrismicTextProps;
    social_link: PrismicLinkProps;
}

interface ContactPageProps {
    title: PrismicTextProps;
    text: PrismicTextProps;
    social: [SocialProps]
}


const Socials = (data: ContactPageProps) => {
    const socialsList = data.social.map((item, index) => {
        return (
            <li className="socials-item" key={item.social_title[0].text + index}>
                <a href={item.social_link.url} target={item.social_link.target} className="socials-item__wrapper">
                    <img src={item.social_icon.url} alt={item.social_icon.alt} className="socials-item__media" />
                </a>
            </li>
        )
    });

    return <ul className="socials">{socialsList}</ul>
}

const ContactPage = () => {
    const [contactPageData, setContactPageData] = useState<ContactPageProps>();

    const fetchData = async () => {
        const prismicData: PrismicDocument = await prismicGetSingle({ id: "contact", options: {} });
        setContactPageData(prismicData.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!contactPageData) {
        return null;
    }

    return (
        <div className="contact">
            <div className="cms-content">
                <div className="cms-paragraph">
                    <h4>{contactPageData.title[0].text}</h4>
                    {contactPageData.text[0].text}
                </div>
            </div>
            <Socials {...contactPageData} />
        </div>
    )
}

export default ContactPage;