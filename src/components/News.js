import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import NoImage from './no-image-icon-23485.png';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResult, settotalResult] = useState(0)


    const updateNews = async () => {
        props.setProgress(20)
        setloading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        let data = await fetch(url);
        props.setProgress(50)
        let ParsedData = await data.json();
        props.setProgress(70)
        setarticles(ParsedData.articles)
        setloading(false)
        settotalResult(ParsedData.totalResults)
        props.setProgress(100)

    }

    useEffect(() => {
        updateNews()
    }, [])


    const fetchMoreData = async () => {
        props.setProgress(20)
        setpage(page + 1)
        setloading(true)
        props.setProgress(40)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
        props.setProgress(60)
        let data = await fetch(url);
        let ParsedData = await data.json();
        props.setProgress(80)
        setarticles(articles.concat(ParsedData.articles))
        setloading(false)
        settotalResult(ParsedData.articles.length)
        props.setProgress(100)
    };


    return (

        <div className="container" >
            <h1>Latest News</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={<Spinner />}
            >
                <div className="row m-3">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : NoImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                        </div>
                    })}

                </div>
            </InfiniteScroll >
        </div >



    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    apiKey: ""
}

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
    apiKey: propTypes.string
}

export default News