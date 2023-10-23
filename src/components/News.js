import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import NoImage from './no-image-icon-23485.png';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    articles = [];

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string
    }



    constructor() {
        super();
        console.log("From News App");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResult: 0
        }

    }

    async updateNews() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=175f8398b44a4e5990913b315a4f9f54&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        console.log(ParsedData);
        this.setState(
            {
                articles: ParsedData.articles,
                loading: false,
                totalResult: ParsedData.articles.length
            })
    }


    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: (this.state.page + 1), })
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=175f8398b44a4e5990913b315a4f9f54&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState(
            {
                articles: this.state.articles.concat(ParsedData.articles),
                loading: false,
                totalResult: ParsedData.articles.length
            })

    };

    // handleprevBtn = async () => {
    //     console.log("prev");
    //     this.setState({
    //         page: (this.state.page - 1),
    //     })
    //     this.updateNews()

    // }

    // handleNextBtn = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
    //         console.log("next");
    //         this.setState({
    //             page: (this.state.page + 1)
    //         })
    //         this.updateNews()
    //     }

    // }
    render() {
        return (
            <>
                <div className="container">
                    <h1>Latest News</h1>
                    {/* {this.state.loading && <Spinner />} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.totalResult}
                        loader={<Spinner />}
                    >
                        <div className="row m-3">
                            {this.state.articles.map((element) => {
                                // console.log(element.url)
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : NoImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </InfiniteScroll>
                </div>


            </>
        )
    }
}

export default News