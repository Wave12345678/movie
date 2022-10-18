import './mainPage.css'
import imdb from '../../img/imdb.png'
import tomato from '../../img/tomatoIcon.png'
import dune from '../../img/dune.png'
import noTime from '../../img/noTime.png'
import shang from '../../img/shang.png'
import dontBreathe from '../../img/dontbreathe.png'
import left_arrow from '../../img/left-slide.png'
import right_arrow from '../../img/right-slide.png'


export default function featured() {
    return (
        <div>
            <div className="list__top list-margin">
                <h1 className="lists__title">
                    New Arrival
                </h1>
                <p className="see-more">See more</p>
            </div>


            <div className="list__slide">
                <div className="left-arrow">
                    <img src={left_arrow} alt="" />
                </div>

                <div className="list__cards">

                    <div className="list__card">
                        <img src={dune} alt="" />
                        <p className="movie-year">USA, 2021</p>
                        <div className="list__card-title">Dune</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">84.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">75%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Adventure, Drama</p>
                    </div>

                    <div className="list__card list__card-position">
                        <img src={noTime} alt="" />
                        <p className="movie-year">USA, 2021</p>
                        <div className="list__card-title">No Time To Die</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">76.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">68%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Adventure, Thriller</p>
                    </div>

                    <div className="list__card list__card-position">
                        <img src={shang} alt="" />
                        <p className="movie-year">USA, 2018</p>
                        <div className="list__card-title">Shang-Chi and the Legend of the Ten Rings</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">79.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">71%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Adventure, Fantasy</p>
                    </div>

                    <div className="list__card list__card-position">
                        <img src={dontBreathe} alt="" />
                        <p className="movie-year">USA, 2021</p>
                        <div className="list__card-title">Don't Breathe 2</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">61.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">46%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Drama, Horror </p>
                    </div>

                </div>

                <div className="right-arrow">
                    <img src={right_arrow} alt="" />
                </div>

            </div>

        </div>
    )
}
