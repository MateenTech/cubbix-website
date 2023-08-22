import Image, { StaticImageData } from 'next/image';

type ImageUI = {
  src: StaticImageData;
  alt: string;
  classes?: string;
}

export const CustomImage = ({ src, alt, classes }: ImageUI) => {
  return (
    <div className={`${classes} z-0`}>
      <Image src={src} alt={alt} className='w-full z-0'/>
    </div>
  )
};