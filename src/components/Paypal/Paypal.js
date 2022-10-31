import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ButtonWrapper from './ButtonWrapper';

// This values are the props in the UI

const currency = 'USD';

// Custom component to wrap the PayPalButtons and handle currency changes

export default function Paypal() {
  return (
    <div style={{ maxWidth: '750px', minHeight: '200px' }}>
      <PayPalScriptProvider
        options={{
          'client-id': 'test',
          components: 'buttons',
          currency: 'USD',
        }}
      >
        <ButtonWrapper currency={currency} showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}
