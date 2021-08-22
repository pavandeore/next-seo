import React from 'react';
import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name="keywords" content={keywords} />
            
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    );
};
Meta.defaultProps = {
    title: 'WebDev Default',
    keywords: 'Default keyword',
    description: 'Default Subserption'
}

export default Meta;