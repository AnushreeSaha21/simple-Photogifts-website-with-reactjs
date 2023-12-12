import React from 'react'

function Banner() {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="banner-image">
                        <div>
                            <span className="inside-banner-image">
                                <span className="inside"></span>


                                <img
                                    alt="" sizes="(max-width: 767px) 100vw,
              (min-width: 768px && max-width: 992px) 100vw,
               (min-width: 993px) 100vw"
                                    srcSet="https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=640 640w, https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=750 750w, https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=828 828w, https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=1080 1080w, https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=1200 1200w, https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=1920 1920w"
                                    src="https://printo-s3.mobimedia.ai/site/20231106_163755699672_d36c2a_Diwali_Festive_Banner_CP_Desktop_Banner_1.png?quality=70&format=webp&w=1920"
                                    className="banner-img"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
