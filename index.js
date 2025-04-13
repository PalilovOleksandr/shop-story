import"./assets/styles-BK7AYJoX.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const a={categoriesList:document.querySelector("ul.categories"),productsList:document.querySelector("ul.products")},l=async()=>{const{data:t}=await e("https://dummyjson.com/products/category-list");return t},g=async()=>{const s="https://dummyjson.com/products?limit=12&skip=0",{data:c}=await e(`${s}`);return c.products},m=async t=>{const{data:s}=await e(`https://dummyjson.com/products/category/${t}`);return s.products},_=(t,s)=>{const c=t.map(o=>`<li class="categories__item">
  <button class="categories__btn" type="button">${o}</button>
</li>
`).join("");s.categoriesList.innerHTML=c},i=(t,s)=>{const c=t.map(({id:o,thumbnail:r,title:n,brand:p,category:u,price:d})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${r}" alt="${n}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${p}</span></p>
    <p class="products__category">Category: ${u}</p>
    <p class="products__price">Price: ${d}</p>
 </li>
`).join("");s.productsList.innerHTML=c},y=async t=>{const s=t.target.innerText,c=await m(s);i(c,a)},$=async()=>{try{const c=["All",...(await l()).map(r=>r)];_(c,a),a.categoriesList.addEventListener("click",y);const o=await g();i(o,a)}catch(t){console.log(t)}};$();
//# sourceMappingURL=index.js.map
