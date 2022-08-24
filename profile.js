import React from "react";

const Profile = () => (
  <section className="l-about">
    <div className="l-about__inner">
      <div className="p-section__title-wrapper">
        <h2 className="p-section__title js_typing">About</h2>
      </div>
      {/* /.section__title-wrapper*/}
      <div className="p-career">
        <p className="p-profile__name">HASEGAWA</p>
        <p className="p-career__text">
          工業高等専門学校にて電子制御工学、大学・修士にて経営情報工学を学んだのち、大手電気機器メーカーにてSEとして従事。コーディングから、サーバ、ネットワーク、プロジェクトマネジメントまで幅広く担当。2022年に退社し、ITエンジニアとしてフリーランスに転向。
        </p>
      </div>
      {/* /.career*/}
      <div className="p-profile">
        <table className="p-profile-table">
          <tr>
            <td className="p-profile-table__1col">所在地：</td>
            <td className="p-profile-table__2col">千葉県</td>
          </tr>
          <tr>
            <td className="p-profile-table__1col">事業内容：</td>
            <td className="p-profile-table__2col">
              Webデザイン、HTML・CSSコーディング、WordPress導入、PythonやPower
              Automate Desktop、Ui Pathなどによる業務支援、効率化など
            </td>
          </tr>
        </table>
      </div>
      {/* /.profile*/}
      {/* /.about_inner*/}
    </div>
  </section>
)

export default Profile
