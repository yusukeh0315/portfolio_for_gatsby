import React, { useState } from 'react';
import { Link } from "gatsby"

import { ImgixGatsbyImage } from "@imgix/gatsby"

const Card = ({ node }) => {

    var url, inner_class_name, top_image;

    if (node.image01 && node.image02 && node.image03 && node.image04) {
        inner_class_name = "c-modal__inner";
        top_image = node.image01;
    } else {
        inner_class_name = "c-modal__inner c-modal__inner--single-page";
        top_image = node.thumbnail;
    }

    if (node.site_url){
        url = node.site_url;
    }

    const [ srcUrl, setSrcUrl ] = useState(top_image);

    const changeMainImage = (imgUrl) => {
        setSrcUrl(imgUrl);
    }

    return (

        <div className={inner_class_name}>
            <div className="c-modal__images">
            <a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href={url}>
                <ImgixGatsbyImage
                    src={srcUrl.url}
                    imgixParams={{ aut: ["format", "compress"]}}
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

                { node.image01 &&
                    <li className="c-modal__thumb-wrapper">
                        <img
                            src={node.image01.url}
                            imgixParams={{ aut: ["format", "compress"]}}
                            layout="constrained"
                            width={740}
                            sourceWidth={node.image01.width}
                            sourceHeight={node.image01.height}
                            style={{ height: "100%" }}
                            className="c-modal__thumb"
                            alt="サムネイル"
                            onKeyDown={() => changeMainImage(node.image01)}
                            onClick={() => changeMainImage(node.image01)}
                            />
                    </li>
                }

                { node.image02 &&
                    <li className="c-modal__thumb-wrapper">
                    <img
                        src={node.image02.url}
                        imgixParams={{ aut: ["format", "compress"]}}
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
                        imgixParams={{ aut: ["format", "compress"]}}
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
                        imgixParams={{ aut: ["format", "compress"]}}
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
                    <Link className="c-card-works__skill" to={`/skills/${skill.categorySlug}`}>{skill.category} </Link>
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
