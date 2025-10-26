import {twMerge} from "tailwind-merge"

export const Input = (props) => {
  const { className, ...rest } = props;
  const defaultClasses = `border outline-none border-gray-300  rounded p-2 placeholder-gray-400 
text-gray-600`;
  const overrideClasses = twMerge(defaultClasses, className);
  return <input {...rest} className={overrideClasses} />;
};
