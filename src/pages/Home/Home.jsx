import bgImg from '../../assets/img/drawers.jpg'
import avatarImg from '../../assets/img/avatar-michelle.jpg'
import shareIcon from '../../assets/img/icon-share.svg'

const Home = () => {
    return (
        <main>
            <section>
                <figure>
                    <img src={ bgImg } alt="A set of wooden drawers with decorative items on top" />
                </figure>
                <section>
                    <div>
                        <h3>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
                        <p>Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                    </div>
                    <div>
                        <img src={avatarImg} alt="Portrait of Michelle, the author of the article" />
                        <div>
                            <p>Michelle Appleton</p>
                            <p>28 Jun 2020|</p>
                        </div>
                        <img src={shareIcon} alt="Share Icon" />
                    </div>
                </section>
            </section>
        </main>
    )
}

export { Home }