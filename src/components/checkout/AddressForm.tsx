import { useForm } from 'react-hook-form';
import { ShippingAddress } from '../../types/checkout';

interface AddressFormProps {
  type: 'shipping' | 'billing';
  onSubmit: (data: ShippingAddress) => void;
  defaultValues?: ShippingAddress;
}

export function AddressForm({ type, onSubmit, defaultValues }: AddressFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddress>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${type}-firstName`} className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            type="text"
            id={`${type}-firstName`}
            {...register('firstName', { required: 'First name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${type}-lastName`} className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            type="text"
            id={`${type}-lastName`}
            {...register('lastName', { required: 'Last name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${type}-address`} className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id={`${type}-address`}
            {...register('address', { required: 'Address is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${type}-apartment`} className="block text-sm font-medium text-gray-700">
            Apartment, suite, etc.
          </label>
          <input
            type="text"
            id={`${type}-apartment`}
            {...register('apartment')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor={`${type}-city`} className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id={`${type}-city`}
            {...register('city', { required: 'City is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${type}-state`} className="block text-sm font-medium text-gray-700">
            State / Province
          </label>
          <input
            type="text"
            id={`${type}-state`}
            {...register('state', { required: 'State is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.state && (
            <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${type}-zipCode`} className="block text-sm font-medium text-gray-700">
            ZIP / Postal code
          </label>
          <input
            type="text"
            id={`${type}-zipCode`}
            {...register('zipCode', { required: 'ZIP code is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.zipCode && (
            <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${type}-phone`} className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id={`${type}-phone`}
            {...register('phone', { required: 'Phone is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
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