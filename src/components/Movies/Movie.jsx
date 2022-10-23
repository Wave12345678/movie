import React from "react"
export default function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;

    return (
        <div key={imdbID} className="card">
            <div className="card-img">
                <img src={Poster} alt="" />
            </div>
            <div className="card-year">
                {Year}
            </div>
            <div className="list__card-title">
                {Title}
            </div>
            <div className="card-text">
                {Type}
            </div>

        </div>
    )
}
