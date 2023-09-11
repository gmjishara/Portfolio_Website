import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function TextArea({placeholder}) {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: 'Poppins',sans-serif;
    min-height:120px;
    font-size: 1.05rem;
    opacity: 0.7;
    line-height: 1.5;
    padding: 12px;
    border-radius: 10px 10px 0 10px;
    color: ${grey[900]};
    background: '#ffffff';
    border: 1px solid ${grey[300] };
    box-shadow: 0px 2px 2px ${grey[50]};

    &:hover {
      border-color: ${grey[900]};
    }

    &:focus {
      border-color: ${blue[100]};
      box-shadow: 0 0 0 2px ${blue[500]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return (
    <StyledTextarea
      maxRows={10}
      placeholder={placeholder}
    />
  );
}