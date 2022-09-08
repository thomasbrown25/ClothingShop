import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    margin-top: 30px;
    height: 300px;
    padding: 40px;
    border-radius: 5px;
    display: flex;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        to right,
        rgb(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
    );
`;

export const FormContainer = styled.form`
    height: 500px;
    min-width: 500px;
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`;
