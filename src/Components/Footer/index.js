
const Footer = ({path}) => {
    const getFooterStyle = () => {
        switch (path) {
            case "/":
                return { background: "#000" };
            default:
                return { background: "#fff" };
        }
    };
    return (
        <>
        <section className="footer-section-all" style={{ ...getFooterStyle()}}>
            <div className="footer-section">
                <div className="fugen-branding ">
                    <div className="d-flex">
                        <div className="mt-5">
                            <h4>فیوژن</h4>
                        </div>
                        <div className="me-auto mt-5">
                            <h5>Fugen</h5>
                        </div>
                    </div>
                </div>

                <div className="container btnsBox">
                    <div className="row text-center mt-1">
                        <div className="col-4">
                            <h4>خدمات</h4>
                            <ul>
                                <li>طراحی</li>
                                <li>وبسایت</li>
                                <li>اپلیکیشن</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <h4>خدمات</h4>
                                <ul>
                                    <li>طراحی</li>
                                    <li>وبسایت</li>
                                    <li>اپلیکیشن</li>
                                </ul>
                        </div>

                        <div className="col-4">
                            <h4>خدمات</h4>
                                <ul>
                                    <li>طراحی</li>
                                    <li>وبسایت</li>
                                    <li>اپلیکیشن</li>
                                </ul>
                        </div>
                    </div>

                    <div className="footer-rights text-center">
                        <p>فیوژن 2025</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Footer;