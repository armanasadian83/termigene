import { Button } from "@mui/material";
import SideNavbar from "../Components/Navbar/navbar";
import webisteImg from './../Images/android.png';
import androidImg from './../Images/android2.png';
import iosImg from './../Images/ios.png';
import seoImg from './../Images/seo.png';

const Service = () => {
    return (
        <>
        <SideNavbar />

        <div className="servicePage">
            <div className="container">
                <div className="row serviceSection py-4 d-flex align-items-center">

                    <div className="col-12 col-md-6 py-2">
                        <h4>طراحی و توسعه وبسایت</h4>
                        <p>
                            ما در زمینه طراحی و توسعه وب‌سایت‌های اختصاصی (برنامه نویسی) و وردپرسی فعالیت می‌کنیم. هدف ما ارائه راهکارهایی نوآورانه و حرفه‌ای برای حضور مؤثر کسب‌وکار شما در فضای دیجیتال است. از طراحی تجربه کاربری تا پیاده‌سازی فنی، تمامی مراحل با دقت و بهره‌گیری از جدیدترین فناوری‌ها انجام می‌شود.
                        </p>
                        <Button>بیشتر بدانید</Button>
                    </div>
                    <div className="col-12 col-md-6 py-2">
                        <img src={webisteImg} />
                    </div>

                    <div className="col-12 col-md-6 py-2">
                        <h4>طراحی و توسعه اپلیکیشن IOS</h4>
                        <p>
                            اگر به دنبال اپلیکیشنی زیبا، سریع و کاربرپسند برای کاربران اپل هستید، تیم ما آماده است آن را برای شما بسازد. ما با استفاده از جدیدترین فناوری‌ها و زبان‌های برنامه‌نویسی Swift و Objective-C، اپلیکیشن‌هایی طراحی می‌کنیم که تجربه‌ای روان و حرفه‌ای را برای کاربران iPhone و iPad فراهم می‌کنند. از ایده تا انتشار در App Store، همراه شما هستیم.
                        </p>
                        <Button>بیشتر بدانید</Button>
                    </div>
                    <div className="col-12 col-md-6 py-2">
                        <img src={androidImg} />
                    </div>

                    <div className="col-12 col-md-6 py-2">
                        <h4>طراحی و توسعه اپلیکیشن اندروید</h4>
                        <p>
                            ما در زمینه طراحی و توسعه اپلیکیشن‌های اندروید برای تلفن‌ها و تبلت‌ها فعالیت می‌کنیم. تیم ما با استفاده از زبان‌های برنامه‌نویسی Kotlin و Java اپلیکیشن‌هایی کارآمد، امن و سازگار با جدیدترین نسخه‌های Android ایجاد می‌کند. از طراحی تجربه کاربری تا تست و انتشار در Google Play، تمامی مراحل با دقت و کیفیت بالا انجام می‌شود.
                        </p>
                        <Button>بیشتر بدانید</Button>
                    </div>
                    <div className="col-12 col-md-6 py-2">
                        <img src={iosImg} />
                    </div>

                    <div className="col-12 col-md-6 py-2">
                        <h4>خدمات سئو</h4>
                        <p>
                            خدمات سئوی ما با هدف افزایش دیده‌شدن وب‌سایت شما در نتایج جستجوی گوگل انجام می‌شود. با بهینه‌سازی ساختار فنی سایت، تولید محتوای هدفمند و استفاده از استراتژی‌های پیشرفته لینک‌سازی، به رشد ارگانیک ترافیک و بهبود رتبه وب‌سایت شما کمک می‌کنیم. هدف ما ایجاد حضوری پایدار و مؤثر در فضای آنلاین است.
                        </p>
                        <Button>بیشتر بدانید</Button>
                    </div>
                    <div className="col-12 col-md-6 py-2">
                        <img src={seoImg} />
                    </div>

                </div>

            </div>
        </div>
        </>
    );
}
 
export default Service;