import { useState } from 'react'
import bgImg from '../../assets/img/drawers.jpg'
import avatarImg from '../../assets/img/avatar-michelle.jpg'
import shareIcon from '../../assets/img/icon-share.svg'
import facebookIcon from '../../assets/img/icon-facebook.svg'
import twitterIcon from '../../assets/img/icon-twitter.svg'
import pinterestIcon from '../../assets/img/icon-pinterest.svg'

const Home = () => {
    const [shared, setShared] = useState(false);

    const handleClick = () => {
        setShared(!shared);
    }

    return (
        <main className='h-screen flex items-center justify-center bg-light-grayish-blue'>
            <section className='bg-white max-w-83 rounded-xl lg:flex lg:max-h-65 lg:max-w-160'>
                <figure className='h-51 overflow-hidden relative rounded-t-xl mb-9 lg:overflow-visible lg:mb-0 lg:h-65 lg:w-150 lg:rounded-l-lg'>
                    <img className='absolute -top-4 lg:relative  lg:top-0 lg:h-full lg:size-150 lg:object-cover lg:rounded-l-lg' src={ bgImg } alt="A set of wooden drawers with decorative items on top" />
                </figure>
                <section className='lg:relative'>
                    <div className='px-10 lg:pt-7'>
                        <h3 className='text-very-dark-grayish-blue font-semibold text-base mb-3 lg:text-lg'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
                        <p className='text-[13px] text-desaturated-dark-blue lg:text-xs'>Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                    </div>
                    <div className={`flex justify-between items-center mb-6 px-10 mt-7 lg:mt-6 ${shared ? 'hidden lg:flex' : ''}`}>
                        <div className='flex gap-3 justify-center items-center'>
                            <img className='size-10 rounded-full' src={avatarImg} alt="Portrait of Michelle, the author of the article" />
                            <div>
                                <p className='text-xs text-very-dark-grayish-blue font-semibold mb-1'>Michelle Appleton</p>
                                <p className='text-xs text-grayish-blue'>28 Jun 2020</p>
                            </div>
                        </div>
                        <img className='bg-light-grayish-blue p-3 rounded-full cursor-pointer' src={shareIcon} alt="Share Icon" onClick={handleClick}/>
                    </div>
                    <div className={`${shared ? 'bg-very-dark-grayish-blue px-10 py-4 flex justify-between items-center rounded-b-lg mt-4 lg:absolute lg:top-26 lg:left-53 lg:w-63 lg:rounded-lg' : 'hidden'}`}>
                        <div className='flex gap-4'>
                            <p className='text-grayish-blue text-sm tracking-[4.5px]'>SHARE</p>
                            <div className='flex gap-4'>
                                <img src={facebookIcon} alt="Facebook Icon" />
                                <img src={twitterIcon} alt="Twitter Icon" />
                                <img src={pinterestIcon} alt="Pinterest Icon" />
                            </div>
                            <div className={`${ shared ? 'triangle lg:bg-very-dark-grayish-blue w-10 relative top-8 right-18' : 'hidden' }`}></div>
                        </div>
                        <div className={`bg-desaturated-dark-blue rounded-full w-9 h-9 flex items-center justify-center ${shared ? 'lg:hidden' : ''}`}>
                            <i className={`ri-share-forward-fill text-white text-xl ${shared ? 'lg:hidden' : ''}`}></i>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export { Home }