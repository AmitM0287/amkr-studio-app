import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    cls: string;
}

const Image = (props: ImageProps) => {
    return (
        <div className={props.cls}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
};

export default Image;
