import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default Input;
