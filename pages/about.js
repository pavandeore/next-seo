import React from 'react';
// import Head from 'next/head'
import Meta from '../components/Meta';

const about = () => {
    return (
        <div>
            <Meta title="This custom about title" keywords="about kewyworsd" description="this is abonut description" />
            {/* <Head>
                <title>This is individual | About title</title>
            </Head> */}
            <h1>about </h1>
        </div>
    );
};

export default about;