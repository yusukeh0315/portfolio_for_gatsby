import React from "react"

const Service = () => {
  const services = [
    {
      jaName: "デザイン",
      enName: "Design",
      svg: (
        <svg
          className="c-card-service__icon"
          aria-hidden="true"
          data-prefix="fas"
          data-icon="pen-fancy"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M79.18 282.94a32.005 32.005 0 0 0-20.24 20.24L0 480l4.69 4.69 92.89-92.89c-.66-2.56-1.57-5.03-1.57-7.8 0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32c-2.77 0-5.24-.91-7.8-1.57l-92.89 92.89L32 512l176.82-58.94a31.983 31.983 0 0 0 20.24-20.24l33.07-84.07-98.88-98.88-84.07 33.07zM369.25 28.32L186.14 227.81l97.85 97.85 199.49-183.11C568.4 67.48 443.73-55.94 369.25 28.32z"
          />
        </svg>
      ),
      desc: "目的を達成するための効果的で要望に合ったデザインを提供します。また、作る人の立場を考えた、開発のしやすい、メンテナンスのしやすい、設計が可能です。",
    },
    {
      jaName: "Web制作",
      enName: "Web Coding",
      svg: (
        <svg
          className="c-card-service__icon"
          aria-hidden="true"
          data-prefix="fas"
          data-icon="laptop-code"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
          />
        </svg>
      ),
      desc: "デザインの意図を理解し、動きや効果を適切に使用したWebサイトを提供します。更新頻度の多さ、管理のしやすさ、拡張性など、ニーズに合う技術を選定、実装した開発が可能です。",
    },
    {
      jaName: "業務効率化",
      enName: "Business efficiency",
      svg: (
        <svg
          className="c-card-service__icon"
          aria-hidden="true"
          data-prefix="fas"
          data-icon="robot"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"
          />
        </svg>
      ),
      desc: "ファイル操作、大量の情報の取得、操作、メール配信など、日々の決まったルーティーン、マンパワーが必要とされる業務を自動化することで、コストの削減、利益拡大へとつなげるソリューションを提供します。",
    },
  ]

  return (
    <section className="l-service">
      <div className="l-service__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title js_typing">Service</h2>
        </div>
        <div className="p-cards-service p-cards-service--col3">
          {services.map(service => {
            return (
              <div className="p-cards-service__item c-card-service">
                <h3 className="c-card-service__title">{service.jaName}</h3>
                <h4 className="c-card-service__sub-title">{service.enName}</h4>
                <figure className="c-card-service__icon-wrapper">
                  {service.svg}
                </figure>
                <div className="card__body">
                  <p className="c-card-service__text">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Service
