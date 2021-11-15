import React from 'react'

const NewsItem = (props) =>  {
        let {title,description,imageUrl,newsUrl,author, date} = props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={imageUrl!=null?imageUrl:"https://images.hindustantimes.com/auto/img/2021/11/07/600x338/Honda_ZR-V_compact_SUV_1_1636253922969_1636253934349.jpeg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="card-footer">
                            <small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small>
                        </div>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
