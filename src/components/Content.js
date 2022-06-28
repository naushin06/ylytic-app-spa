const Content = () => {

    return (
        <>
            <section id="tip">
                <div className="tips">
                    <div id="THEAD" className="tip-header">
                        <h5>YOUR YLYTIC'S TIP</h5>
                    </div>
                    <div id="tbody" className="tip-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iste pariatur esse maxime? Praesentium tempora quibusdam, eius sint inventore dolores, tenetur ab officia modi eveniet alias ea id cumque autem!</p>
                    </div>
                </div>
            </section>
            <section id="tipe" className="sec-3">
                <div className="container-fluid">
                    <div className="row">
                        <div id="CLE" className="col-12 col-lg-12">
                            <h3>  <img width="25" height="25" src='/assets/images/video-camera.png' alt="" /> ENGAGMENT RATE</h3>
                        </div>
                        <div className="row">
                            <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                                <h1>163.3</h1>
                                <span id="g"><strong>243.1%</strong></span>
                                <h6>vs Previous day</h6>

                            </div>
                            <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                                <img className="right-align" width="100" height="100" src='/assets/images/meter.png' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section >
                <div id="bl" className="wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div id="watch" className="col-6 col-lg-6 col-md-6 col-sm-6">
                                <div id="wh" className="watch-head">
                                    <h3 id="w">  <img width="25" height="25" src='/assets/images/watch.png' alt="" />
                                        WATCH TIME
                                    </h3>
                                </div>
                                <div id="wwh" className="watch-body">
                                    <h2>27m</h2>
                                    <span id="g"> <strong>237.5%</strong></span>
                                    <p>vs Previous Day</p>
                                </div>

                            </div>
                            <div id="AVD" className="col-6 col-lg-6 col-md-6 col-sm-6">
                                <div id="ah" className="AVD-head">
                                    <h3 id="w">  <img width="25" height="25" src='/assets/images/watch.png' alt="" />
                                        AVD                                    </h3>
                                </div>
                                <div id="AAVD" className="AVD-body">
                                    <h2>22s </h2>
                                 0   <span id="g"> <strong>43.5%</strong></span>
                                    <p>vs Previous Day</p>
                                </div>
                                <p>*Average View Duration</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content; 