import './mainPage.css'
import left_arrow from '../../img/left-slide.png'
import right_arrow from '../../img/right-slide.png'
import keanu from '../../img/keanu.png'
import ryan from '../../img/ryan.png'
import timoti from '../../img/timothee.png'
import chloe from '../../img/chloe.png'



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

                    <div className="cast">
                        <img src={keanu} alt="" />
                        <p className="cast-name">Keanu Reeves</p>
                    </div>

                    <div className="cast">
                        <img src={ryan} alt="" />
                        <p className="cast-name">Ryan Reynolds</p>
                    </div>

                    <div className="cast">
                        <img src={timoti} alt="" />
                        <p className="cast-name">Timothée Chalamet</p>
                    </div>

                    <div className="cast">
                        <img src={chloe} alt="" />
                        <p className="cast-name">Chloë Grace Moretz</p>
                    </div>


                </div>

                <div className="right-arrow-ex">
                    <img src={right_arrow} alt="" />
                </div>

            </div>

        </div>
    )
}
