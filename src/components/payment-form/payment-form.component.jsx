import { async } from '@firebase/util';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FormContainer, PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        // if there's no stripe or element instance then exit function
        if (!stripe || !elements) return;

        // create a stripe payment intent which lets stripe know that a payment is about to occur
        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ amount: 10000 })
            }
        ).then((res) => res.json());

        const client_secret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Current User'
                }
            }
        });

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('payment successful');
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                    Pay now
                </Button>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
