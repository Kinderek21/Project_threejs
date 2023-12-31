import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt , setPrompt, generatingImg,handleSumbit}) => {
  return (
    <div
    className="aipicker-container"
    >
      <textarea
      placeholder="Zapytaj AI.."
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="aipicker-textarea"
      />
      <div
      className="flex flex-wrap gap-3"
      >
        {generatingImg? (
          <CustomButton
            type="outline"
            title="AI"
            customStyles="text-xs"
          />
        ) :(
          <>
            <CustomButton 
            type="outline"
            title="AI Logo"
            handleClick={() => handleSumbit('logo')}
            customStyles="text-xs"
            />
            <CustomButton
            type="filled"
            title="AI Full"
            handleClick={() => handleSumbit('full')}
            customStyles="text-xs"
            />
          </>
        )
      
      } 
      </div>
    </div>
  )
}

export default AIPicker