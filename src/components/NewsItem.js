import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="card" style={{ margin: "5px" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ zIndex: "1", left: "50%" }}>
                    {source}
                </span>
                <h5 className="card-title">{title ? title : ""}</h5>
                <p className="card-text">{description ? description : ""}</p>
                <p className="card-text"><small className="text-body-secondary">uploaded by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-primary">Explore</a>
            </div>
        </div>)

}

export default NewsItem