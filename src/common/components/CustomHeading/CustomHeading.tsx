import React, { FC } from 'react';
import './customHeading.css'

interface CustomHeadingProps {
  text: string;
  textColor?: string;
  svg?: string;
  fontWeight?: string;
  fontSize?: string;
}

const CustomHeading: FC<CustomHeadingProps> = ({ text, textColor, svg, fontWeight, fontSize }) => {
  const style = {
    color: textColor || 'black', // Default to black if textColor prop is not provided
    fontWeight: fontWeight || 'normal', // Default to normal if fontWeight prop is not provided
    fontSize: fontSize || '1.3em',
    margin: '2px 0',
    padding: 0,
  };

  return (
    <div className='custom-heading'>
      <div style={style}>{text}</div>
      {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
    </div>
  );
};

export default CustomHeading;