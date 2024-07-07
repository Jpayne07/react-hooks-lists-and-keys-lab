import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linkList = links.map((link) => {
    let newLink = `#${link}`
    return(
      
      <a href = {newLink} key = {link}>{link}</a>
    )
  })

  return <nav>{linkList}</nav>;
}

export default NavBar;
