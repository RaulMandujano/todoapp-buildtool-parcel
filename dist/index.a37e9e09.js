window.addEventListener("load",(()=>{const e=document.querySelector("#new-tasks"),t=document.querySelector("#new-task-form"),n=document.querySelector("#new-task-input");t.addEventListener("submit",(t=>{t.preventDefault();const d=n.value,a=document.createElement("div");a.classList.add("task");const s=document.createElement("div");s.classList.add("content"),a.appendChild(s);const c=document.createElement("input");c.classList.add("text"),c.type="text",c.value=d,c.setAttribute("randon","randon"),s.appendChild(c);const i=document.createElement("div");i.classList.add("actions");const o=document.createElement("button");o.classList.add("done"),o.innerText="✓";const r=document.createElement("button");r.classList.add("edit"),r.innerText="Edit";const l=document.createElement("button");l.classList.add("delete"),l.innerText="Delete",i.appendChild(o),i.appendChild(r),i.appendChild(l),a.appendChild(i),e.appendChild(a),n.value="",r.addEventListener("click",(e=>{"edit"==r.innerText.toLowerCase()?(r.innerText="Save",c.removeAttribute("randon"),c.focus()):(r.innerText="Edit",c.setAttribute("randon","randon"))})),l.addEventListener("click",(t=>{e.removeChild(a)})),o.addEventListener("click")}))}));
//# sourceMappingURL=index.a37e9e09.js.map
