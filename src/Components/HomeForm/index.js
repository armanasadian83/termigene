import { useState } from "react";
import {useForm} from "react-hook-form";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const HomeForm = () => {

    const {register ,formState:{errors}, handleSubmit, reset} = useForm();
    const [isSubmitted, setisSubmitted] = useState(false);

    const onSubmit = (data) =>{
        console.log(data);
        reset(); 

        setisSubmitted(true);
        
    }

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
        <section className="form-section mt-5 py-5">
            <div className="container">          
            {
            isSubmitted === false ? (
                <form className="home-form my-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center form-inputs-section">
                            <div className="row">
                                <div className="col-12 col-md-6 ">
                                    <label htmlFor="name">نام و نام خانوادگی<span className="me-2 input-required-star">*</span></label><br />
                                    <input tabIndex="1" {...register("name", {required:true, pattern: /^[^a-zA-Z0-9]+$/i ,maxLength: 35  })} className="" />
                                    <div className="input-validation-text">
                                        <span className="">{errors.name?.type === "required" && "نام و نام خانوادگی خود را وارد کنید!"}</span>
                                        <span className="">{errors.name?.type === "pattern" && "این فیلد را فقط به فارسی وارد کنید!"}</span>  
                                        <span className="">{errors.name?.type === "maxLength" && "نام و نام خانوادگی نباید بیشتر از 35 کاراکتر باشد!"}</span>                           
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 special-margin">
                                    <label htmlFor="coname">نام شرکت<span className="me-2 input-required-star">*</span></label><br />
                                    <input tabIndex="2" name="coname" {...register("coname", {required:true, maxLength: 35})} placeholder="" className="" />
                                    <div className="input-validation-text">
                                        <span className="">{errors.coname?.type === "required" && "نام شرکت خود را وارد کنید!"}</span>
                                        <span className="">{errors.coname?.type === "maxLength" && "نام شرکت نباید بیشتر از 35 کاراکتر باشد!"}</span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <label htmlFor="phone">شماره تماس<span className="me-2 input-required-star">*</span></label><br />
                                    <input tabIndex="3" name="phone" {...register("phone", {required:true, pattern: /^09+[0-9]+$/i, maxLength: 11  })} placeholder="" className="" />
                                    <div className="input-validation-text">
                                        <span className="">{errors.phone?.type === "required" && "شماره تماس خود را وارد کنید!"}</span>
                                        <span className="">{errors.phone?.type === "pattern" && "شماره تماس باید با 09 آغاز شود!"}</span> 
                                        <span className="">{errors.phone?.type === "maxLength" && "یک شماره تلفن معتبر وارد کنید!"}</span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <label htmlFor="email">آدرس ایمیل<span className="me-2 input-required-star"></span></label><br />
                                    <input tabIndex="4" name="email" {...register("email", {pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/i,})} placeholder="example@gmail.com" />
                                    <div className="input-validation-text">
                                        <span className="">{errors.email?.type === "pattern" && "فرمت آدرس ایمیل صحیح نیست!"}</span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-4">
                                    <label htmlFor="dropdown">حوزه فعالیت</label><br />
                                    <Select
                                        {...register("dropdown")}
                                        labelId="demo-simple-select-label"
                                        id="dropdown"
                                        value={age}
                                        onChange={handleChange}
                                        sx={{
                                            backgroundColor: "#000",         // background
                                            color: "#fff",
                                            height: '45px',
                                            width: "100%",
                                            '& .MuiOutlinedInput-notchedOutline': {
                                              border: "2px solid #fff",     
                                              borderRadius: "18px"       // border color
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                              borderColor: "#fff",            // border hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                              borderColor: "#fff",            // border on focus
                                            },
                                            '& .MuiSelect-icon': {
                                              color: "#fff",                     // arrow icon color
                                            }
                                        }}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    '& .MuiMenuItem-root': {
                                                    fontFamily: 'fugen-font',
                                                    fontSize: '16px',
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        <MenuItem value="">انتخاب کنید</MenuItem>
                                        <MenuItem value="کسب و کار آنلاین">کسب و کار آنلاین</MenuItem>
                                        <MenuItem value="آموزش">آموزش</MenuItem>
                                        <MenuItem value="خدمات">خدمات</MenuItem>
                                    </Select>
                                </div>
                                <div className="col-12 mt-5">
                                   <label htmlFor="info">توضیحات بیشتر</label><br />
                                   <textarea {...register("info", {maxLength: 400})} tabIndex="6" name="info" rows="4" cols="70" placeholder=""></textarea>
                                   <div className="input-validation-text">
                                        <span className="">{errors.info?.type === "maxLength" && "توضیحات نباید بیشتر از 400 کاراکتر باشد!"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="btnWrapper">
                                <button tabIndex="6" className="btn btn-lg" type="submit">ثبت درخواست</button>
                            </div>
                        </div>
                    </div>
                </form> ) : (
                    <div className="submitted-section">
                        <div className="row text-center">
                            <div className="col-12 mt-5">
                                <h1>درخواست شما با موفقیت ثبت شد.</h1>
                                <h4>به زودی با شما تماس خواهیم گرفت.</h4>
                                <button onClick={() => setisSubmitted(false)}>ثبت درخواست جدید</button>
                            </div>
                        </div>
                    </div>
                )
            }

            </div>
        </section>
        </>
    );
}
 
export default HomeForm;