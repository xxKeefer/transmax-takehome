import React, {useState} from 'react';
import {FiChevronRight} from 'react-icons/fi';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Collapse = ({children, title}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      className={`collapse ${
        open ? 'collapse-open' : 'collapse-close'
      } border border-base-100 bg-base-200 rounded-none`}
    >
      <div
        className="font-medium text-sm uppercase px-4 py-2 flex justify-between "
        role="button"
        onClick={() => setOpen(!open)}
      >
        <span className="opacity-80">{title}</span>
        <span
          className={`flex justify-center items-center opacity-60 transition ease-in-out delay-150 ${
            open ? 'rotate-90' : ''
          } `}
        >
          <FiChevronRight size={20} />
        </span>
      </div>
      <div className="collapse-content p-0">{children}</div>
    </div>
  );
};
