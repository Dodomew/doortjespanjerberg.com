import React, { useEffect, useState } from 'react';
import { prismicGetSingle } from '../../ApiHelpers/prismicGetSingle';
import { PrismicDocument } from '../../types/PrismicDocumentType';
import { PrismicImageProps } from '../../types/PrismicImageProps';
import { PrismicLinkProps } from '../../types/PrismicLinkProps';
import { PrismicTextProps } from '../../types/PrismicTextProps';

interface ContactPageProps {
    title: PrismicTextProps;
    text: PrismicTextProps;
    social: [SocialProps]
}

type SocialProps = {
    social_icon: PrismicImageProps;
    social_title: PrismicTextProps;
    social_link: PrismicLinkProps;
}

const Socials = (data: ContactPageProps) => {
    const socialsList = data.social.map((item, index) => {
        return (
            <li className="socials-item">
                <a href={item.social_link.url} target={item.social_link.target} className="socials-item__wrapper">
                    <img src={item.social_icon.url} alt="" className="socials-item__media" />
                </a>
            </li>
        )
    });

    return <ul className="socials">{socialsList}</ul>
}

const ContactPage = () => {
    const [contactPageData, setContactPageData] = useState<ContactPageProps>();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const prismicData: PrismicDocument = await prismicGetSingle({ id: "contact", options: {} });
        setContactPageData(prismicData.data);
        console.log(prismicData)
    };

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