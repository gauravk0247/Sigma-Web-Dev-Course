import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
       <Script>
        {`alert("Welcome to contact page");`}
      </Script>
      This is my contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - connect with the world",
  description: "This is page where you contact facebook and we can connect with the world using facebook",
};