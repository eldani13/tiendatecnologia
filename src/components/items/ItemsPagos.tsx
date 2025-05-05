interface CheckoutStepsProps {
    currentStep: 1 | 2 | 3;
  }
  
  export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
    const steps = [
      { number: 1, label: "Address" },
      { number: 2, label: "Shipping" },
      { number: 3, label: "Payment" },
    ];
  
    return (
      <div className="flex justify-center mb-10 space-x-20 text-sm">
        {steps.map((step) => {
          const isActive = step.number === currentStep;
  
          return (
            <div
              key={step.number}
              className={`flex items-center space-x-2 ${
                isActive ? "font-medium text-black" : "text-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${
                  isActive
                    ? "bg-black text-white"
                    : "border border-gray-300"
                }`}
              >
                {step.number}
              </div>
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>
    );
  }
  