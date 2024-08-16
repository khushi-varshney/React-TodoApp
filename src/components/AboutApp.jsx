import React from 'react'



const AboutApp = () => {
  return (
    <div className='md:mx-60 md:my-36 animate-pulse outline-double bg-yellow-100 p-5 m-5 border-r-2 border-yellow-500'>
       <h3 className='font-mono m-1 p-1 text-lg font-bold '>This is a Todo Application built using React + Vite + Tailwind CSS. This app helps you in keeping the track of the task you need to do and the task you have already completed.</h3>
       <h3 className='font-mono m-1 p-1 text-lg font-bold '>This is not only a very useful app in day-to-day life but also helps the individual in keeping the days productive. Apart From that, Having a Responsive Design is what benefiting the people in accessing this app from their mobile phones as well.</h3>
       <h3 className='font-mono m-1 p-1 text-lg font-bold '>This app allows the user to delete the task they have already completed and edit thier tasks as well. More Interesting part is that, Even on Refereshing, this TodoApp does not lose your data.</h3>
       <h1 className='animate-bounce text-center text-pink-600 m-5 text-3xl p-5 font-serif underline'>&#9829; &nbsp; Enjoy Using This App &nbsp; &#9829;</h1>
    </div>
  )
}

export default AboutApp
