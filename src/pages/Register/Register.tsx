import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../redux/configStore'
import '../../assets/scss/pages/_register.scss'
type Props = {}

export default function Register({ }: Props) {
  // const [gender, setGender] = useState(true);

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      title: "",
      review: ""
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .required("Số điện thoại không được để trống !")
        .min(10, "Số điện thoại phải đủ 10 số "),
      name: Yup.string().required("Tên không được để trống "),
      title: Yup.string().required("Tài khoản không được để trống "),
      review: Yup.string().required("Mã nhóm không được để trống "),
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng!"),
      password: Yup.string()
        .required("Password không được bỏ trống !")
        .min(3, "password từ 3 - 32 ký tự!")
        .max(32, "password từ 3 đến 32 ký tự!"),
      // .matches(/cybersoft/,'Password phải có cybersoft')
    }),
    onSubmit: (values) => {
      const payload = {
        taiKhoan: values.title,
        matKhau: values.password,
        hoTen: values.name,
        soDT: values.phone,
        email: values.email,
        maNhom: values.review
      }
      const action = signupApi(payload);
      dispatch(action)
    }
  });
  const register1 = require('../../assets/img/register/register1.jpg');
  const register2 = require('../../assets/img/register/register2.jpg')
  return (
    <div className="container">
      <div className="register">

        <form className="row" onSubmit={formik.handleSubmit}>
          {/* Bên trái  */}
          <div className="col-md-6 col-sm-12 mx-auto">
            <p>Tài Khoản</p>
            <input
              id="title"
              className="input_validation"
              type="text"
              placeholder="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {formik.errors.title ? (
                <p className="text text-danger">{formik.errors.title}</p>
              ) : (
                ""
              )}
            </div>
            <p>Email</p>
            <input
              name="email"
              className="input_validation"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {formik.errors.email ? (
                <p className="text text-danger">{formik.errors.email}</p>
              ) : (
                ""
              )}
            </div>

            <p>Mật khẩu</p>
            <input
              name="password"
              className="input_validation"
              type="password"
              placeholder="PassWord"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {formik.errors.password ? (
                <p className="text text-danger">{formik.errors.password}</p>
              ) : (
                ""
              )}
            </div>

            <p>Nhập lại mật khẩu</p>
            <input
              name="passwordConfirmed"
              className="input_validation"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {formik.errors.password ? (
                <p className="text text-danger">{formik.errors.password}</p>
              ) : (
                ""
              )}
            </div>

            {/* Bên phải  */}
            <div className="register_right">
              <p>Tên</p>
              <input
                id="name"
                className="input_validation"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>
                {formik.errors.name ? (
                  <p className="text text-danger">{formik.errors.name}</p>
                ) : (
                  ""
                )}
              </div>

              <p>Số điện thoại</p>
              <input
                id="phone"
                className="input_validation"
                placeholder="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>
                {formik.errors.phone ? (
                  <p className="text text-danger">{formik.errors.phone}</p>
                ) : (
                  ""
                )}
              </div>

              <p>Mã nhóm</p>
              <input
                id="review"
                className="input_validation"
                type="text"
                placeholder="review"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>
                {formik.errors.review ? (
                  <p className="text text-danger">{formik.errors.review}</p>
                ) : (
                  ""
                )}
              </div>

              <button type='submit' className="Submit_register me-auto">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 img_register_bottom ">
            <img src={register1} alt="" className="img_left" />
          </div>

          {/* <div className="img_register_bottom">
                <div className="row">
                  <div className="col-6">
                  <img src={register1} alt="" className="img_left"/>
                  </div>
                  <div className="col-6">
                  <img src={register2} alt=""  className="img_right"/>
                  </div>
                </div>
               </div> */}


        </form>
      </div>
    </div>


  );
}