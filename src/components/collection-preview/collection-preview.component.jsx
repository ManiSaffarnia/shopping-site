import React from "react";

/**Components */
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
