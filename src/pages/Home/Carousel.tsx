import React from 'react'
import '../../assets/scss/components/_carousel.scss'



type Props = {
  title?: string
}


export default function Carousel({ }: Props) {
  const logo = require("../../assets/img/Logo.png");
  const html = require("../../assets/img/html2.png");
  const css = require("../../assets/img/css.png")
  const js = require("../../assets/img/js.webp")
  const frontend = require("../../assets/img/webdesign4.jpg");
  const frontend2 = require("../../assets/img/webdesign5.jpg")
  return (
    <div className='carousel_main'>
      <div id="carouselExampleControls" className="carousel_slide carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner carousel_1">
          <div className="carousel-item active carousel_2">
            <img src={frontend} className="d-block w-100" alt="..." />
            <div className='carousel_content'>
              <h2 className='display-5'>Đào tạo chuyên môn về tư duy lập trình, Frontend, Backend</h2>
              <div className="carousel_button">
                <button className='btn btn-primary mx-2 button_1'>Tìm hiểu thêm</button>
                <button className='btn btn-success button_2'>Tham gia ngay</button>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel_2">
            <img src={frontend2} className="d-block w-100" alt="..." />
            <div className='carousel_content'>
              <h2 className='display-5'>Đào tạo chuyên môn về tư duy lập trình, Frontend, Backend</h2>
              <div className="carousel_button">
                <button className='btn btn-primary mx-2 button_1'>Tìm hiểu thêm</button>
                <button className='btn btn-success button_2'>Tham gia ngay</button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


  )
}