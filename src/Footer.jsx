import React from 'react';
const Footer=()=>{
    const date=new Date().getFullYear();
    return(
        <>
        <footer className='w-100 bg-light text-center F-page'>
            <p className='Ne-stack'>@ {date}  Ne-sTack Technology</p>
        </footer>
        </>
    );
}
export default Footer;
