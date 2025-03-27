import { Check } from 'lucide-react';
import { useCheckoutStore } from '../../store/checkout';

const steps = [
  { id: 1, name: 'Shipping' },
  { id: 2, name: 'Payment' },
  { id: 3, name: 'Review' },
];

export function CheckoutSteps() {
  const currentStep = useCheckoutStore((state) => state.step);

  return (
    <nav aria-label="Progress" className="mb-12">
      <ol className="flex items-center justify-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}
          >
            <div className="flex items-center">
              <div
                className={`${
                  step.id <= currentStep
                    ? 'border-primary bg-primary'
                    : 'border-gray-300 bg-white'
                } w-8 h-8 rounded-full border-2 flex items-center justify-center`}
              >
                {step.id < currentStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span
                    className={`${
                      step.id <= currentStep ? 'text-white' : 'text-gray-500'
                    } text-sm font-medium`}
                  >
                    {step.id}
                  </span>
                )}
              </div>
              <span className="ml-4 text-sm font-medium text-gray-900">
                {step.name}
              </span>
            </div>
            {stepIdx !== steps.length - 1 && (
              <div
                className={`hidden sm:block absolute top-4 left-full h-0.5 w-16 ${
                  step.id < currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}