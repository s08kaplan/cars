import { Check } from 'lucide-react';

const SuccessModal = () => {
  return (
    <div
      id="success-popover"
      popover="auto"
      className="m-auto rounded-lg bg-slate-800 p-6 text-green-500 backdrop:bg-black/50"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Check className="h-16 w-16 rounded-full border border-white p-1 text-green-500" />
        <span>Successfully Sent</span>
      </div>
    </div>
  );
};

export default SuccessModal;