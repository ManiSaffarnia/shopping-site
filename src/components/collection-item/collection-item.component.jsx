import React from "react";
import { convertNumberToPersian } from "../../utils/util";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="col-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="col-item-footer">
        <span className="col-item-name">{name}</span>
        <span className="col-item-price">
          {convertNumberToPersian(price)} هزارتومن
        </span>
      </div>
    </div>
  );
};

export default CollectionItem;
