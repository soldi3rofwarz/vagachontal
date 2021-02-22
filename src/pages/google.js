import React from 'react';
import {Layout} from './../elements/theme/components/layout';
import GoogleLogin from '../components/login/google/Google'

export  const GooglePage = () => {
    return (
        <Layout>
            <GoogleLogin/>
        </Layout>
    );
};