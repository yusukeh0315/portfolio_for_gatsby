import React, { useState } from 'react';
import { Link } from "gatsby"

import { ImgixGatsbyImage } from "@imgix/gatsby"

const Card = ({ node }) => {

    var url, inner_class_name, first_image;

    if (node.image02 && node.image03 && node.image04) {
        inner_class_name = "c-modal__inner";
        first_image = node.image01;
    } else {
        inner_class_name = "c-modal__inner c-modal__inner--single-page";
        first_image = null;
    }

    if (node.site_url){
        url = node.site_url;
    }

    const [ srcUrl, setSrcUrl ] = useState(node.image01);

    const changeMainImage = (imgUrl) => {
        setSrcUrl(imgUrl);
    }

    return (

        <div className={inner_class_name}>
            <div className="c-modal__images">
            <a className="c-modal__img-wrapper u-effect-fadein" target="_blank" rel="noopener noreferrer" href={url}>
                <ImgixGatsbyImage
                    src={srcUrl.url}
                    imgixParams={{ auto: ["format", "compress"]}}
                    layout="constrained"
                    width={740}
                    sourceWidth={srcUrl.width}
                    sourceHeight={srcUrl.height}
                    style={{ height: "100%" }}
                    className="c-modal__img"
                    id="bigimg"
                    alt="写真：実績"
                />
            </a>
            <ul className="c-modal__thumbs-list">

                { first_image &&
                    <li className="c-modal__thumb-wrapper">
                        <img
                            src={first_image.url}
                            imgixParams={{ auto: ["format", "compress"]}}
                            layout="constrained"
                            width={740}
                            sourceWidth={first_image.width}
                            sourceHeight={first_image.height}
                            style={{ height: "100%" }}
                            className="c-modal__thumb"
                            alt="サムネイル"
                            onKeyDown={() => changeMainImage(first_image)}
                            onClick={() => changeMainImage(first_image)}
                            />
                    </li>
                }

                { node.image02 &&
                    <li className="c-modal__thumb-wrapper">
                    <img
                        src={node.image02.url}
                        imgixParams={{ auto: ["format", "compress"]}}
                        layout="constrained"
                        width={740}
                        sourceWidth={node.image02.width}
                        sourceHeight={node.image02.height}
                        style={{ height: "100%" }}
                        className="c-modal__thumb"
                        alt="サムネイル"
                        onKeyDown={() => changeMainImage(node.image02)}
                        onClick={() => changeMainImage(node.image02)}
                        />
                    </li>
                }

                { node.image03 &&
                    <li className="c-modal__thumb-wrapper">
                    <img
                        src={node.image03.url}
                        imgixParams={{ auto: ["format", "compress"]}}
                        layout="constrained"
                        width={740}
                        sourceWidth={node.image03.width}
                        sourceHeight={node.image03.height}
                        style={{ height: "100%" }}
                        className="c-modal__thumb"
                        alt="サムネイル"
                        onKeyDown={() => changeMainImage(node.image03)}
                        onClick={() => changeMainImage(node.image03)}
                        />
                    </li>
                }

                { node.image04 &&
                    <li className="c-modal__thumb-wrapper">
                    <img
                        src={node.image04.url}
                        imgixParams={{ auto: ["format", "compress"]}}
                        layout="constrained"
                        width={740}
                        sourceWidth={node.image04.width}
                        sourceHeight={node.image04.height}
                        style={{ height: "100%" }}
                        className="c-modal__thumb"
                        alt="サムネイル"
                        onKeyDown={() => changeMainImage(node.image04)}
                        onClick={() => changeMainImage(node.image04)}
                        />
                    </li>
                }

            </ul>
            </div>

            <div className="c-modal__body">
            <h3 className="c-modal__title">{node.title}</h3>
            <p className="c-modal__item">使用言語など：

                {node.skills.map( skill => (
                    <Link className="c-skill-lable" to={`/skills/${skill.categorySlug}`}>{skill.category} </Link>
                // <span>{skill.category} </span>
                ))}

            </p>
            <p className="c-modal__item">実装期間： {node.period}</p>
            <p className="c-modal__text">
                <div dangerouslySetInnerHTML={{ __html:
                    node.content
                }} />
            </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
            </div>
        </div>

    )
}

export default Card;
