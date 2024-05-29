import React, { useState } from 'react';

//import modal video
import ModalVideo from 'react-modal-video'; 
import '../modalVideo.scss';

//import icons
import { BsPlayCircleFill } from 'react-icons/bs';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-[#534686]/30 py-6'>
      <div className="container">
        <div>
          <h3>Awesome experiences with virtual reality world</h3>
          {/* modal video */}
          <ModalVideo
            channel='youtube'
            autoplay
            isOpen={isOpen}
            videoId='NOk_M1Ib5F0'
            onClose={() => setIsOpen(false)}
          />
        </div>
        {/* video */}
        <div className='bg-videoBg bg-no-repeat bg-cover
        w-[270px] h-[180px] flex items-center justify-center'>
          <div onClick ={() => setIsOpen(!isOpen)} className='cursor-pointer'>
            <BsPlayCircleFill className='text-4x1 text-white/80 hover:text-white hover:scale-110 transition' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
