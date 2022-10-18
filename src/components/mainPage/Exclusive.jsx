import './mainPage.css'
import left_arrow from '../../img/left-slide.png'
import right_arrow from '../../img/right-slide.png'
import lamb from '../../img/Lamb.png'
import suicide from '../../img/suicide.png'
import house from '../../img/house.png'



export default function featured() {
    return (
        <div>
            <div className="list__top">
                <h1 className="lists__title">
                    Exclusive Videos
                </h1>
                <p className="see-more">See more</p>
            </div>


            <div className="list__slide">
                <div className="left-arrow-ex">
                    <img src={left_arrow} alt="" />
                </div>

                <div className="list__cards">

                    <div className="exclusive">
                        <img src={lamb} alt="" />
                        <p className="exclusive__text">Lamb (2021) Trailer</p>
                    </div>
                    <div className="exclusive">
                        <img src={suicide} alt="" />
                        <p className="exclusive__text">The Suicide Squad : John Cena Interview</p>

                    </div>
                    <div className="exclusive">
                        <img src={house} alt="" />
                        <p className="exclusive__text">Will there be a new era of horror movie?</p>

                    </div>


                </div>

                <div className="right-arrow-ex">
                    <img src={right_arrow} alt="" />
                </div>

            </div>

        </div>
    )
}
