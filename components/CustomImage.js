import Image from 'next/image';

export const CustomImage = (props) => {
  return (
    <div className="shadow-lg border-1 border-red-500 p-6 rounded-md bg-white">
      <Image {...props} alt={props.src} />
    </div>
  );
};