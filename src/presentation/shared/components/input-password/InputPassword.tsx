import React, { useState } from 'react';

interface InputPasswordProps {
  placeholder: string
}

export const InputPassword: React.FC<InputPasswordProps> = ({ placeholder }) => {

  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

  return (
    <div className="form__field-password">
      <input 
        className="form__input" 
        type={`${ isPasswordShown ? 'text' : 'password'}`} 
        placeholder={ placeholder } 
      />
      {
        isPasswordShown 
        ? (<i onClick={ () => setIsPasswordShown(false) } className="form__icon bx bx-low-vision"></i>) 
        : (<i onClick={ () => setIsPasswordShown(true) } className="form__icon bx bx-show"></i>)
      }
    </div>
  );
};
