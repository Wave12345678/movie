import './mainPage.css'
import imdb from '../../img/imdb.png'
import tomato from '../../img/tomatoIcon.png'
import strangerThings from '../../img/StrangerThings.png'
import batman from '../../img/batman.png'
import spider from '../../img/spider.png'
import dunkirk from '../../img/dunkirk.png'
import left_arrow from '../../img/left-slide.png'
import right_arrow from '../../img/right-slide.png'


export default function featured() {
    return (
        <div>
            <div className="list__top">
                <h1 className="lists__title">
                    Featured Movie
                </h1>
                <p className="see-more">See more</p>
            </div>


            <div className="list__slide">
                <div className="left-arrow">
                    <img src={left_arrow} alt="" />
                </div>

                <div className="list__cards">

                    <div className="list__card">
                        <img src={strangerThings} alt="" />
                        <p className="movie-year">USA, 2016 - Current</p>
                        <div className="list__card-title">Stranger Things</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">86.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">97%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Adventure, Horror</p>
                    </div>

                    <div className="list__card list__card-position">
                        <img src={batman} alt="" />
                        <p className="movie-year">USA, 2005</p>
                        <div className="list__card-title">Batman Begins</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">82.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">70%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Adventure</p>
                    </div>

                    <div className="list__card list__card-position">
                        <img src={spider} alt="" />
                        <p className="movie-year">USA, 2018</p>
                        <div className="list__card-title">Spider-Man : Into The Spider Verse</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">84.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">87%</p>
                            </div>
                        </div>
                        <p className="list__category">Animation, Action, Adventure</p>
                    </div>

                    <div className="list__card list__card-position">
                        <img src={dunkirk} alt="" />
                        <p className="movie-year">USA, 2017</p>
                        <div className="list__card-title">Dunkirk</div>
                        <div className="list__ranking">
                            <div className="list-imdb">
                                <img src={imdb} alt="" />
                                <p className="list-imdb__text">78.0 / 100</p>
                            </div>
                            <div className="tomato-ranking">
                                <img src={tomato} alt="" />
                                <p className="tomato-ranking__text">94%</p>
                            </div>
                        </div>
                        <p className="list__category">Action, Drama, History</p>
                    </div>

                </div>

                <div className="right-arrow">
                    <img src={right_arrow} alt="" />
                </div>

            </div>

        </div>
    )
}
