import Image from 'next/image';
import { FC } from 'react';
import { IItem } from '@app/_models';
import Link from 'next/link';

interface IProjectItemProps {
  item: IItem;
  isReversed: boolean;
}

export const ProjectItem: FC<IProjectItemProps> = ({ item, isReversed }) => {
  const isExternal = item.link.startsWith('http');

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? 'md:flex-row-reverse' : ''
      } gap-10 md:gap-16 overflow-hidden`}
    >
      <div className="w-full">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col align-middle m-auto">
        <h2 className="text-sm font-semibold text-primary pb-5">
          {item.category}
        </h2>
        <h3 className="text-2xl font-bold text-black pb-3">{item.title}</h3>
        <p className="text-lg font-inter text-text_color mb-12">
          {item.description}
        </p>
        <Link
          href={item.link}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          <Image
            src="/assets/project/send.png"
            alt="arrow"
            width={64}
            height={64}
            className="w-[54px] h-[54px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
