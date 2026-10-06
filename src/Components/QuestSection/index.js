import passageOneImage from "./../../Images/passage1.jpg";
import passageTwoImage from "./../../Images/passage2.jpg";
import passageThreeImage from "./../../Images/passage3.jpg";
import passageFourImage from "./../../Images/passage4.jpg";

const QuestSection = () => {
    return (
        <>
        <section className="quest-section">
            <div className="container mt-5">
                <div className="desktop-display">
                    <div className="row text-center">
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div className="desktop-quest-contentWrapper">
                                <h4>ما چه کاری انجام می دهیم؟</h4>
                                <p>فیوژن یک گروه طراحی و ساخت انواع پلتفرم های گوناگون، شامل وبسایت، اپلیکیشن و ... برای کسب و کار شما است. شما می توانید به بهترین شکل، پلتفرم دلخواه خود را جهت توسعه کسب و کار خود به کمک فیوژن ایجاد کنید.</p>
                                <button className="btn btn-outline-dark mt-0">دکمه اول</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={passageOneImage}/>
                        </div>

                        <div className="col-12 col-md-6">
                            <img src={passageTwoImage}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center mt-4">
                            <div className="desktop-quest-contentWrapper">
                                <h4>چرا به یک وبسایت نیاز دارید؟</h4>
                                <p>اولین قدم برای معرفی و توسعه محصول یا خدمات شما، ایجاد یک وب سایت است. با داشتن یک و مناسب برای شما، می توانید رشد قابل توجهی را تجربه کنید.</p>
                                <button className="btn btn-outline-dark mt-0">دکمه دوم</button>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex align-items-center mt-4">
                            <div className="desktop-quest-contentWrapper">
                                <h4>چرا به یک اپلیکیشن نیاز دارید؟</h4>
                                <p>داشتن یک کسب و کارهایی که نسبتا توسعه یافته هستند و خدمات یا محصولاتی دارند که مشتریان با آن ها به صورت پیوسته ارتباط دارند، ضروری است.</p>
                                <button className="btn btn-outline-dark mt-0">دکمه سوم</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={passageThreeImage}/>
                        </div>

                        <div className="col-12 col-md-6">
                            <img src={passageFourImage}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center mt-4">
                            <div className="desktop-quest-contentWrapper">
                                <h4>چرا فیوژن؟</h4>
                                <p>فیوژن تمامی خدمات لازم برای توسعه وبسایت و یا اپلیکیشن شما را با کیفیت بالا و قیمتی مناسب در اختیار شما قرار می دهد. برخی از خدمات ما:<br />- طراحی و ساخت وبسایت وردپرسی و سفارشی<br />- سئو و بازدید وبسایت<br />- پشتیبانی ۲۴ ساعته و...</p>
                                <button className="btn btn-outline-dark mt-0">دکمه چهارم</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* mobile display */}
                <div className="mobile-display">
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="col-12 px-2">
                                <img src={passageOneImage}/>
                            </div>
                            <div className="desktop-quest-contentWrapper mt-4">
                                <h4>ما چه کاری انجام می دهیم؟</h4>
                                <p className="px-3">فیوژن یک گروه طراحی و ساخت انواع پلتفرم های گوناگون، شامل وبسایت، اپلیکیشن و ... برای کسب و کار شما است. شما می توانید به بهترین شکل، پلتفرم دلخواه خود را جهت توسعه کسب و کار خود به کمک فیوژن ایجاد کنید.</p>
                                <button className="btn btn-outline-dark mt-0">دکمه اول</button>
                            </div>
                        </div>

                        <div className="col-12 mt-3 px-4">
                            <img src={passageTwoImage}/>
                        </div>
                        <div className="col-12">
                            <div className="desktop-quest-contentWrapper mt-4">
                                <h4>چرا به یک وبسایت نیاز دارید؟</h4>
                                <p className="px-3">اولین قدم برای معرفی و توسعه محصول یا خدمات شما، ایجاد یک وب سایت است. با داشتن یک و مناسب برای شما، می توانید رشد قابل توجهی را تجربه کنید.</p>
                                <button className="btn btn-outline-dark mt-0">دکمه دوم</button>
                            </div>
                        </div>

                        <div className="col-12 mt-3 px-4">
                            <img src={passageThreeImage}/>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="desktop-quest-contentWrapper">
                                <h4>چرا به یک اپلیکیشن نیاز دارید؟</h4>
                                <p className="px-3">داشتن یک کسب و کارهایی که نسبتا توسعه یافته هستند و خدمات یا محصولاتی دارند که مشتریان با آن ها به صورت پیوسته ارتباط دارند، ضروری است.</p>
                                <button className="btn btn-outline-dark mt-0">دکمه سوم</button>
                            </div>
                        </div>

                        <div className="col-12 mt-3 px-4">
                            <img src={passageFourImage}/>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="desktop-quest-contentWrapper">
                                <h4>چرا فیوژن؟</h4>
                                <p className="px-3">فیوژن تمامی خدمات لازم برای توسعه وبسایت و یا اپلیکیشن شما را با کیفیت بالا و قیمتی مناسب در اختیار شما قرار می دهد. برخی از خدمات ما:<br />- طراحی و ساخت وبسایت وردپرسی و سفارشی<br />- سئو و بازدید وبسایت<br />- پشتیبانی ۲۴ ساعته و...</p>
                                <button className="btn btn-outline-dark mt-0">دکمه چهارم</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default QuestSection;