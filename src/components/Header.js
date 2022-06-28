const Header = () => {

    return (
        <>
            <section id="first">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                            <img width="50" height="50" src="/assets/images/download.jpg" alt="" />
                        </div>
                        <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                            <h1> YLYTACI'S DAILY ENGAGMENT </h1>
                        </div>
                        <div id="calendar" className="col-4 col-lg-4 col-md-4 col-sm-4">
                            <img width="50" height="50" src="/assets/images/calendar.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header; 