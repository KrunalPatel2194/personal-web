const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'/>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">9 Years working</span>
            </div>
            <div className="about__box">
            {/* <i class='bx bx-award about__icon'/> */}
            <i class='bx bx-briefcase-alt about__icon'/>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">23+ Projects</span>
            </div>
            <div className="about__box">
            {/* <i class='bx bx-award about__icon'/> */}
            <i class='bx bx-support about__icon'/>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">23+ Projects</span>
            </div>
            {/* <div className="about__box">
                <h3 className="about__title"></h3>
                <span className="about__subtitle"></span>
            </div> */}
        </div>
    )
}

export default Info;