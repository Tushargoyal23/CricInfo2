import React from 'react'
import './photos.css'
export default function photos(props) {
    // console.log(props);
    return (
        <>
            {/* <div className='container' id='photosinfo'>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {(props.data && props.data[0].urlToImage) ? props.data[0].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." id='photos' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[0].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[0].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {(props.data && props.data[1].urlToImage) ? props.data[1].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." id='photos' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[1].title : "Todays Headlines"}</h3>
                            <p>{(props.data && props.data[1].decription)? props.data[1].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <img src={(props.data && props.data[2].urlToImage ) ? props.data[2].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." id='photos' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[2].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[2].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={(props.data && props.data[3].urlToImage) ? props.data[3].urlToImage : "https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." id='photos'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[3].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[3].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://source.unsplash.com/random/300×300/?cricket"} className="d-block w-100" alt="..." id='photos'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{"Todays Headlines"}</h3>
                            <p>{"Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div> */}
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={(props.data && props.data[3].urlToImage) ? props.data[3].urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUKbIQdNppAazz5OFQ4AOGzD5iVszNKT5jw&s"} class="d-block w-100" alt="..."  id="sportsimg"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[3].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[3].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuICt0aue6t1acu-bOGi7_ejbKZ16oMSKAg&s" class="d-block w-100" alt="..." id="sportsimg"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[1].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[1].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3J6hZ8c_96zMgGrNI0f0c1yP23stnrPulg&s" class="d-block w-100" alt="..." id="sportsimg"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>{props.data ? props.data[2].title : "Todays Headlines"}</h3>
                            <p>{props.data ? props.data[2].decription : "Cricket News: Given the responsibility to defend 15 runs in the final over of the match against Mumbai Indians at the Wankhede Stadium on Saturday, the Punjab Kings"}</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
