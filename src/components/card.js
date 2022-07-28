import React, { useState } from 'react';
import { Link } from "gatsby"

import { ImgixGatsbyImage } from "@imgix/gatsby"

const Card = ({ node }) => {

    let url, inner_class_name, first_image, is_single_page;

    if (node.image02 && node.image03 && node.image04) {
        inner_class_name = "c-modal__inner";
        first_image = node.image01;
        is_single_page = false
    } else {
        inner_class_name = "c-modal__inner c-modal__inner--single-page";
        first_image = null;
        is_single_page = true
    }

    if (node.site_url){
        url = node.site_url;
    }

    const [ srcUrl, setSrcUrl ] = useState(node.image01);

    const changeMainImage = (imgUrl) => {
        setSrcUrl(imgUrl);
    }

    const thumbnailImages = [first_image, node.image02, node.image03, node.image04, ]

    return (

        <div className={inner_class_name}>
            <div className="c-modal__images">
            <a className="c-modal__img-wrapper u-effect-fadein" target="_blank" rel="noopener noreferrer" href={url}>
                <ImgixGatsbyImage
                    src={srcUrl.url}
                    imgixParams={{ auto: ["format", "compress"]}}
                    layout="fixed"
                    width={740}
                    sourceWidth={srcUrl.width}
                    sourceHeight={srcUrl.height}
                    style={{ height: "100%" }}
                    className="c-modal__img"
                    alt="MainImage"
                />
            </a>
            <ul className="c-modal__thumbs-list">

                { !is_single_page &&
                    thumbnailImages.map((image) => {
                        return (
                            <button
                                className="c-modal__thumb-wrapper"
                                onKeyDown={() => changeMainImage(image)}
                                onClick={() => changeMainImage(image)}
                            >
                                <ImgixGatsbyImage
                                    src={image.url}
                                    imgixParams={{ auto: ["format", "compress"]}}
                                    layout="constrained"
                                    width={740}
                                    sourceWidth={image.width}
                                    sourceHeight={image.height}
                                    style={{ height: "100%" }}
                                    className="c-modal__thumb"
                                    alt="Thumbnail"

                                    />
                            </button>
                        )
                    })
                }
            </ul>
            </div>

            <div className="c-modal__body">
            <h3 className="c-modal__title">{node.title}</h3>
            <p className="c-modal__item">使用言語など：

                {node.skills.map( skill => (
                    <Link className="c-skill-lable" to={`/skills/${skill.categorySlug}`}>{skill.category} </Link>
                ))}

            </p>
            <p className="c-modal__item">実装期間： {node.period}</p>
            <p className="c-modal__text">
                <div dangerouslySetInnerHTML={{ __html:
                    node.content
                }} />
            </p>
            </div>
        </div>

    )
}

export default Card;
