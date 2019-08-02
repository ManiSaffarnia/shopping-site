import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  state = {
    section: [
      {
        title: "کلاه",
        subtitle: "خرید کنید",
        img: "/images/hats.png",
        id: 1,
        linkUrl: "shop/hats"
      },
      {
        title: "پالتو",
        subtitle: "خرید کنید",
        img: "/images/jackets.png",
        id: 2,
        linkUrl: "shop/jackets"
      },
      {
        title: "کتانی",
        subtitle: "خرید کنید",
        img: "/images/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers"
      },
      {
        title: "زنانه",
        subtitle: "خرید کنید",
        img: "/images/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens"
      },
      {
        title: "مردانه",
        subtitle: "خرید کنید",
        img: "/images/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens"
      }
    ]
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(item => (
          <MenuItem {...item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Directory;
