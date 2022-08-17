import React from "react";

const Profile = () => (
  <section className="l-about">
    <div className="l-about__inner">
      <div className="p-section__title-wrapper">
        <h2 className="p-section__title js_typing">About</h2>
      </div>
      {/* /.section__title-wrapper*/}
      <div className="p-career">
        <p className="p-career__text">
          高専で電子制御工学、大学で経営情報工学を学んだのち、大手メーカーにてSEとして従事。コーディングや、インフラ、プロジェクトマネジメントまで幅広く担当。
          2022年に退社し、ITエンジニアとしてフリーランスに転向。
        </p>
      </div>
      {/* /.career*/}
      <div className="p-profile">
        <p className="p-profile__name">HASEGAWA</p>
        <p className="p-profile__address">所在地： 千葉県</p>
        <p className="p-profile__business_dsc">
          事業内容：
          Webデザイン、HTML・CSSコーディング、WordPress導入、PythonやPower
          Automate Desktop、Ui Pathなどによる業務支援、効率化など
        </p>
      </div>
      {/* /.profile*/}
      {/* /.about_inner*/}
    </div>
  </section>
)

export default Profile
