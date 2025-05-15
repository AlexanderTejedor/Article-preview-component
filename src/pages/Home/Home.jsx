import bgImg from '../../assets/img/drawers.jpg'
import avatarImg from '../../assets/img/avatar-michelle.jpg'
import shareIcon from '../../assets/img/icon-share.svg'

const Home = () => {
    return (
        <main className='h-screen flex items-center justify-center bg-light-grayish-blue'>
            <section className='bg-white max-w-83 rounded-xl'>
                <figure className='h-51 overflow-hidden relative rounded-t-xl mb-9'>
                    <img className='absolute -top-4' src={ bgImg } alt="A set of wooden drawers with decorative items on top" />
                </figure>
                <section className='px-10'>
                    <div>
                        <h3 className='text-very-dark-grayish-blue font-semibold text-base mb-3'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
                        <p className='text-[13px] mb-7 text-desaturated-dark-blue'>Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='flex gap-3 justify-center items-center'>
                            <img className='size-10 rounded-full' src={avatarImg} alt="Portrait of Michelle, the author of the article" />
                            <div>
                                <p className='text-xs text-very-dark-grayish-blue font-semibold mb-1'>Michelle Appleton</p>
                                <p className='text-xs text-grayish-blue'>28 Jun 2020</p>
                            </div>
                        </div>
                        <img className='bg-light-grayish-blue p-3 rounded-full' src={shareIcon} alt="Share Icon" />
                    </div>
                </section>
            </section>
        </main>
    )
}

export { Home }