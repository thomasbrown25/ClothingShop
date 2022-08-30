import { useSelector } from 'react-redux';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

import { selectCurrentUser } from '../../store/user/user.selector';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('running useeffect');
        if (currentUser) navigate('/');
    }, [currentUser]);

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
