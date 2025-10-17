import Image from 'next/image';
import darkScrollImage from '../../../../public/images/scroll-dark.svg';
import LightScrollImage from '../../../../public/images/scroll.svg';



interface MoveUpProps {
  darkMode: boolean;
}

const MoveUp: React.FC<MoveUpProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex flex-row mr-10 justify-end pb-20'>
      <div onClick={scrollToTop} className='cursor-pointer'> 
        <Image 
          src={darkMode ? darkScrollImage : LightScrollImage} 
          width={50} 
          height={50} 
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default MoveUp;
