import React  from 'react';
import { Link } from "gatsby"

import { ImgixGatsbyImage } from "@imgix/gatsby"
import { motion } from "framer-motion"

const WorksPanel = ({ data, handleOpenModal, is_home=false }) => {
    return (

        <div className="p-cards-works p-cards-works--col3">
            {data.allMicrocmsWorks.edges.map(({ node }, index) => (

            <div className="p-cards-works__item card-works" key={node.id}>
                <motion.a onClick={() => handleOpenModal(index)} className="c-card-works__link js-modal__open" href data-target="modal01">
                <figure className="c-card-works__img-wrapper">
                    <ImgixGatsbyImage
                    src={node.thumbnail.url}
                    imgixParams={{ auto: ["format", "compress"]}}
                    layout="constrained"
                    width={319}
                    sourceWidth={node.thumbnail.width}
                    sourceHeight={node.thumbnail.height}
                    style={{ height: "100%" }}
                    className="c-card-works__img"
                    alt="Achievement"
                    />
                </figure>
                </motion.a>

                { !is_home &&
                    <div className="c-card-works__body">
                        <p className="c-card-works__title">{node.title} </p>

                        <p className="c-card-works__text">
                            {node.skills.map( skill => (
                            <Link className="c-skill-lable" to={`/skills/${skill.categorySlug}`}>{skill.category} </Link>
                            ))}
                        </p>

                    </div>
                }

            </div>

            ))}

        </div>
    )
}

export default WorksPanel;

