import React from "react"
import Fade from "react-reveal/Fade"

const FirstView = () => {
  return (
    <section className="l-fv">
      <div className="l-fv__inner">
        <div className="p-fv__title-wrapper">
          <h1 className="p-fv__title">
            <Fade top cascade duration={1000}>
              <span className="js_typing">Via IT to solve your problems</span>
            </Fade>
          </h1>
        </div>
        <p className="p-fv__text">
          <Fade top cascade duration={1200} delay={500}>
            ITを活用した様々なソリューションを提供します。
          </Fade>
          <Fade top cascade duration={1200} delay={1500}>
            Webサイトのデザイン、制作や業務効率化はおまかせください。
          </Fade>
        </p>
      </div>
    </section>
  )
}

export default FirstView
