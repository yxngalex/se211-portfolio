import React from "react";

export const scrollToTop = (ev) => {
    if (ev) ev.preventDefault();
    window.scroll({top: 0, left: 0, behavior: "smooth"});
}

export const scrollTo = (el) => {
    el.scrollIntoView({behavior:"smooth"});
}
