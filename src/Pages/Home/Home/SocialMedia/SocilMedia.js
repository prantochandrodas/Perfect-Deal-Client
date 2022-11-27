import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocilMedia = () => {
    return (
      <div className='my-20'>
        <h2 className='text-4xl text-center my-5 font-bold'>Social Media</h2>
          <div className='lg:flex justify-center items-center '>
            <div className='lg:ml-5 flex flex-col lg-mt-0 mt-5 items-center'>
                <FontAwesomeIcon icon={faFacebook} className="fa-3x"></FontAwesomeIcon>
                <h3>FaceBook</h3>
            </div>
            <div className='lg:ml-5 flex flex-col lg-mt-0 mt-5 items-center'>
                <FontAwesomeIcon className='fa-3x' icon={faYoutube}></FontAwesomeIcon>
                <h3>Youtube</h3>
            </div>
            <div className='lg:ml-5 flex flex-col lg-mt-0 mt-5 items-center'>
                <FontAwesomeIcon className='fa-3x' icon={faInstagram}></FontAwesomeIcon>
                <h3>Instragram</h3>
            </div>
            <div className='lg:ml-5 flex flex-col lg-mt-0 mt-5 items-center'>
                <FontAwesomeIcon className='fa-3x' icon={faTwitter}></FontAwesomeIcon>
                <h3>Twitter</h3>
            </div>
            <div className='lg:ml-5 flex flex-col lg-mt-0 mt-5 items-center'>
                <FontAwesomeIcon className='fa-3x' icon={faLinkedinIn}></FontAwesomeIcon>
                <h3>LinkeDin</h3>
            </div>
        </div>
      </div>
    );
};

export default SocilMedia;