document.addEventListener("click",function(t){var e=document.querySelector(".wall"),i=document.querySelector(".spider");if(e===t.target){var l=t.clientX,n=t.clientY,c=e.getBoundingClientRect();i.style.left=l-c.x-e.clientLeft-i.width/2+"px",l<=c.left+e.clientLeft+i.width/2&&(i.style.left=0),l>=c.right-e.clientLeft-i.width/2&&(i.style.left=c.width-2*e.clientLeft-i.width+"px"),i.style.top=n-c.y-e.clientTop-i.width/2+"px",n<=c.top+e.clientTop+i.width/2&&(i.style.top=0),n>=c.bottom-e.clientTop-i.width/2&&(i.style.top=c.width-2*e.clientTop-i.width+"px")}});
//# sourceMappingURL=index.3665a94e.js.map
