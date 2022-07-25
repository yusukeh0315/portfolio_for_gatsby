import React, { useState } from 'react';
import { Link } from "gatsby"

const Card = ({ node }) => {

    var url, inner_class_name, top_image;

    if (node.image01 && node.image02 && node.image03 && node.image04) {
        inner_class_name = "c-modal__inner";
        top_image = node.image01.url;
    } else {
        inner_class_name = "c-modal__inner c-modal__inner--single-page";
        top_image = node.thumbnail.url;
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
            <a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href={url}><img className="c-modal__img" id="bigimg" alt="写真：実績" src={srcUrl} /></a>
            <ul className="c-modal__thumbs-list">

                { node.image01 &&
                <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image01.url} alt="サムネイル" data-image={node.image01.url} onKeyDown={() => changeMainImage(node.image01.url)} onClick={() => changeMainImage(node.image01.url)} /></li>
                }

                { node.image02 &&
                <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image02.url} alt="サムネイル" data-image={node.image02.url} onKeyDown={() => changeMainImage(node.image02.url)} onClick={() => changeMainImage(node.image02.url)} /></li>
                }

                { node.image03 &&
                <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image03.url} alt="サムネイル" data-image={node.image03.url} onKeyDown={() => changeMainImage(node.image03.url)} onClick={() => changeMainImage(node.image03.url)} /></li>
                }

                { node.image04 &&
                <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image04.url} alt="サムネイル" data-image={node.image04.url} onKeyDown={() => changeMainImage(node.image04.url)} onClick={() => changeMainImage(node.image04.url)} /></li>
                }

            </ul>
            </div>

            <div className="c-modal__body">
            <h3 className="c-modal__title">{node.title}</h3>
            <p className="c-modal__item">使用言語など：

                {node.skills.map( skill => (
                    <Link to={`/skills/${skill.categorySlug}`}>{skill.category} </Link>
                // <span>{skill.category} </span>
                ))}

            </p>
            <p className="c-modal__item">実装期間： {node.period}</p>
            <p className="c-modal__text">
                {node.desc}
            </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
            </div>
        </div>

    )
}

export default Card;
