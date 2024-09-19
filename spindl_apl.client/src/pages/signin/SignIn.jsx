import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/form/SignInForm';


const SignIn = () => {
    return (
        <div>
         <SignInForm />
        </div>
    );
};

export default SignIn;