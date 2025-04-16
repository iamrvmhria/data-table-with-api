import React from 'react'

function Home() {
    const text = `  Hello ,
        Welcome to the My site. 
        We are using fetch method to get & post data from placeholder site .`
  return (
  <>
        <pre className='container' style={{margin:'5rem'}}>
   {text}
        </pre>
  </>
  )
}

export default Home
