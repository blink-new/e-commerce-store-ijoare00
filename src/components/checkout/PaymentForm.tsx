import { useForm } from 'react-hook-form';
import { PaymentDetails } from '../../types/checkout';

interface PaymentFormProps {
  onSubmit: (data: PaymentDetails) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentDetails>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
            Name on card
          </label>
          <input
            type="text"
            id="nameOnCard"
            {...register('nameOnCard', { required: 'Name on card is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.nameOnCard && (
            <p className="mt-1 text-sm text-red-600">{errors.nameOnCard.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card number
          </label>
          <input
            type="text"
            id="cardNumber"
            {...register('cardNumber', {
              required: 'Card number is required',
              pattern: {
                value: /^[0-9]{16}$/,
                message: 'Please enter a valid card number',
              },
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.cardNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry date
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              {...register('expiryDate', {
                required: 'Expiry date is required',
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                  message: 'Please enter a valid expiry date (MM/YY)',
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.expiryDate && (
              <p className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              {...register('cvv', {
                required: 'CVV is required',
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: 'Please enter a valid CVV',
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
            {errors.cvv && (
              <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-gray-800"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  );
}