import React from 'react';
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='header'>
        <a href='/'>
          Back
        </a>
      </div>
      <Component {...pageProps} />
      <style jsx global>{`
      :root {
        --primary-color: rgba(255, 255, 255, 0.5);
        --secondary-color: #ff4081;
      }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
            background-color: rgb(35, 39, 47);
        }
        * {
          box-sizing: border-box;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);

        }

        .header{
          width: 100%;
          height: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          padding-left: 100px;
          color: var(--primary-color);
        }
        
        .header a {
          color: var(--primary-color);
          text-decoration: none;
        }
        
        .header a:hover,
        .header a:focus,
        .header a:active {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}