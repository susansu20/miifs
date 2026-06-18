/* Mii Foodservice — shared interactions + icon sprite */
(function () {
  // ---- Inject monochrome SVG icon sprite (corporate line icons) ----
  var sprite = ''
    + '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">'
    + '<defs><style>.i path,.i circle,.i line,.i polyline,.i polygon,.i ellipse,.i rect{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}</style></defs>'
    + sym('cup','<path d="M6 8h9v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V8Z"/><path d="M15 9h2a2 2 0 0 1 0 4h-2"/><path d="M9 3v2M12 3v2"/>')
    + sym('knife','<path d="M4 19 14 9"/><path d="M14 9l4-4a3 3 0 0 1 0 4l-6 6Z"/><path d="M4 19l1.5 1.5"/>')
    + sym('flame','<path d="M12 3c2.5 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.8 1-3 2-4 .2 1.6 1 2.4 1.6 2.6C12 8 12 5.5 12 3Z"/>')
    + sym('droplet','<path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z"/>')
    + sym('snow','<path d="M12 2v20M3 12h18M5 5l14 14M19 5 5 19"/>')
    + sym('tag','<path d="M3 12l8.5-8.5 8.5 8.5-8.5 8.5L3 12Z"/><circle cx="8" cy="8" r="1.3"/>')
    + sym('ruler','<path d="M3 17 17 3l4 4L7 21 3 17Z"/><path d="M8 8l2 2M11 5l2 2M5 11l2 2"/>')
    + sym('folder','<path d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>')
    + sym('wrench','<path d="M15.5 6.5a3.5 3.5 0 0 1-4.6 4.4L5 17l2 2 6.1-6a3.5 3.5 0 0 0 4.4-4.6l-2.1 2.1-2-2 2.1-2Z"/>')
    + sym('gear','<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>')
    + sym('bolt','<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>')
    + sym('layers','<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5"/>')
    + sym('link','<path d="M10.5 13.5a3.5 3.5 0 0 1 0-5l2-2a3.5 3.5 0 0 1 5 5l-1 1"/><path d="M13.5 10.5a3.5 3.5 0 0 1 0 5l-2 2a3.5 3.5 0 0 1-5-5l1-1"/>')
    + sym('utensils','<path d="M7 3v6M9.5 3v6M8.2 9v12"/><path d="M16 3c-1.5 1.5-1.5 5.5 0 7v11"/>')
    + sym('bag','<path d="M6 8h12l-1 11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>')
    + sym('building','<path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16"/><path d="M15 10h3a1 1 0 0 1 1 1v10"/><path d="M8 8h0M11 8h0M8 12h0M11 12h0M8 16h0M11 16h0"/><path d="M3 21h18"/>')
    + sym('award','<circle cx="12" cy="9" r="5"/><path d="M9 13.5 7.5 21 12 18.5 16.5 21 15 13.5"/>')
    + sym('doc','<path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 16.5h6"/>')
    + sym('cake','<path d="M4 21h16M5 21v-7h14v7"/><path d="M5 14.5a2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 3.5 0"/><path d="M12 4v4"/>')
    + sym('search','<circle cx="11" cy="11" r="6"/><path d="m20 20-3.5-3.5"/>')
    + sym('compass','<circle cx="12" cy="12" r="9"/><path d="m16 8-3 7-5 3 3-7 5-3Z"/>')
    + sym('chart','<path d="M4 20h16"/><path d="M6 20v-6M12 20V7M18 20v-9"/>')
    + sym('people','<circle cx="8" cy="9" r="2.2"/><circle cx="16" cy="9" r="2.2"/><path d="M4 19a4 4 0 0 1 8 0"/><path d="M12 19a4 4 0 0 1 8 0"/>')
    + sym('box','<path d="M12 3l8 4v10l-8 4-8-4V7l8-4Z"/><path d="M4 7l8 4 8-4M12 11v10"/>')
    + sym('trend','<path d="M4 16l5-5 3 3 7-7"/><path d="M15 7h5v5"/>')
    + sym('chat','<path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>')
    + sym('mail','<rect x="3" y="6" width="18" height="12" rx="1"/><path d="m3 7 9 6 9-6"/>')
    + sym('pin','<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/>')
    + sym('clock','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')
    + sym('truck','<path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>')
    + sym('cycle','<path d="M4.5 11a7.5 7.5 0 0 1 12.8-4.3L20 9"/><path d="M20 4v5h-5"/><path d="M19.5 13a7.5 7.5 0 0 1-12.8 4.3L4 15"/><path d="M4 20v-5h5"/>')
    + sym('wa','<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path d="M8.8 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3 0 .6.3.5.8 1.2 1.6 1.7.6.4.9.4 1.1.3l.6-.6c.2-.2.4-.1.5-.1l1.4.7c.2.1.3.2.3.4 0 .5-.4 1.3-1 1.5-.7.2-1.5.2-3.4-.8-2.2-1.1-3.5-3.4-3.6-3.6-.1-.2-.8-1.2-.8-2.2 0-1 .5-1.4.7-1.5Z"/>')
    + sym('linkedin','<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10v6M8 7v0M12 16v-4a2 2 0 0 1 4 0v4M12 11v5"/>')
    + sym('facebook','<path d="M14 8h2.5M14 8a2 2 0 0 1 2-2h1V3.5h-2A4 4 0 0 0 11 7.5V10H9v3h2v8h3v-8h2.2l.6-3H14V8Z"/>')
    + sym('instagram','<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><path d="M17 7h0"/>')
    + sym('youtube','<rect x="3" y="6" width="18" height="12" rx="3"/><path d="m10 9 5 3-5 3V9Z"/>')
    + sym('cart','<path d="M3 4h2l2.2 11a1 1 0 0 0 1 .8h8a1 1 0 0 0 1-.8L20 7H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>')
    + '</svg>';
  function sym(id, body){ return '<symbol id="i-'+id+'" viewBox="0 0 24 24" class="i">'+body+'</symbol>'; }
  var holder = document.createElement('div');
  holder.innerHTML = sprite;
  document.body.insertBefore(holder.firstChild, document.body.firstChild);

  // ---- Mobile nav toggle ----
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-nav-toggle]')) { document.body.classList.toggle('mobile-open'); }
  });

  // ---- Scroll reveal ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // ---- Product filtering (checkbox groups, WooCommerce-style) ----
  var checks = document.querySelectorAll('.filter-check input[type="checkbox"]');
  function applyFilters(){
    var groups={};
    checks.forEach(function(c){ if(c.checked){ (groups[c.dataset.group]=groups[c.dataset.group]||[]).push(c.value); } });
    var keys=Object.keys(groups), shown=0;
    document.querySelectorAll('[data-cat]').forEach(function(card){
      var toks=card.getAttribute('data-cat').split(' ');
      var ok=keys.every(function(g){ return groups[g].some(function(v){ return toks.indexOf(v)>-1; }); });
      card.style.display=ok?'':'none'; if(ok)shown++;
    });
    var c=document.querySelector('[data-result-count]'); if(c) c.textContent=shown;
  }
  if(checks.length){ checks.forEach(function(c){ c.addEventListener('change', applyFilters); }); }

  // ---- Show more / less filter lists ----
  document.querySelectorAll('[data-showmore]').forEach(function(btn){
    var list=document.getElementById(btn.getAttribute('data-showmore'));
    if(!list) return; list.classList.add('collapsed');
    btn.addEventListener('click', function(){ var c=list.classList.toggle('collapsed'); btn.textContent=c?'Show more':'Show less'; });
  });

  // ---- Product gallery thumbnail swap ----
  document.querySelectorAll('[data-thumb]').forEach(function (th) {
    th.addEventListener('click', function () {
      var main = document.querySelector('[data-main-img]');
      if (main) main.textContent = th.getAttribute('data-thumb');
      document.querySelectorAll('[data-thumb]').forEach(function (x) { x.classList.remove('active'); });
      th.classList.add('active');
    });
  });

  // ---- RFQ "Quote List" cart (WooCommerce-style, no payment) ----
  function rfqGet(){ try { return JSON.parse(localStorage.getItem('miiRFQ')||'[]'); } catch(e){ return []; } }
  function rfqSet(a){ localStorage.setItem('miiRFQ', JSON.stringify(a)); rfqCount(); }
  function rfqCount(){ var n=rfqGet().length; document.querySelectorAll('[data-cart-count]').forEach(function(b){ b.textContent=n; b.style.display = n? 'grid':'none'; }); }
  function toast(msg){ var t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); requestAnimationFrame(function(){ t.classList.add('show'); }); setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); },300); }, 1800); }
  document.addEventListener('click', function(e){
    var add=e.target.closest('[data-add-rfq]');
    if(add){ e.preventDefault();
      var card=add.closest('.prod-card'); var qi=card?card.querySelector('.qty-input'):null;
      var qty=qi?Math.max(1,parseInt(qi.value,10)||1):1;
      var a=rfqGet(); var name=add.getAttribute('data-add-rfq');
      var ex=a.filter(function(it){ return it.name===name; })[0];
      if(ex){ ex.qty=(ex.qty||1)+qty; } else { a.push({name:name, img:add.getAttribute('data-img')||'', qty:qty}); }
      rfqSet(a); renderCart(); toast('Added to your quote list \u2713'); }
    var rm=e.target.closest('[data-rfq-remove]');
    if(rm){ e.preventDefault(); var i=+rm.getAttribute('data-rfq-remove'); var b=rfqGet(); b.splice(i,1); rfqSet(b); renderCart(); }
  });
  document.addEventListener('change', function(e){
    var q=e.target.closest('[data-rfq-qty]');
    if(q){ var i=+q.getAttribute('data-rfq-qty'); var a=rfqGet(); if(a[i]){ a[i].qty=Math.max(1, parseInt(q.value,10)||1); q.value=a[i].qty; rfqSet(a); } }
  });
  function renderCart(){
    var wrap=document.querySelector('[data-cart-list]'); if(!wrap) return;
    var a=rfqGet();
    if(!a.length){ wrap.innerHTML='<div class="cart-empty"><p>Your quote list is empty.</p><a class="btn btn-primary" href="products.html">Browse products</a></div>'; return; }
    var rows=a.map(function(it,i){
      return '<tr>'
        + '<td class="qt-x"><span class="rm" data-rfq-remove="'+i+'" title="Remove">&times;</span></td>'
        + '<td class="qt-img">'+(it.img?'<img src="'+it.img+'" alt="">':'')+'</td>'
        + '<td class="qt-name"><a href="product.html">'+it.name+'</a></td>'
        + '<td class="qt-qty"><input type="number" min="1" value="'+(it.qty||1)+'" data-rfq-qty="'+i+'"></td>'
        + '</tr>';
    }).join('');
    wrap.innerHTML='<table class="quote-table"><thead><tr><th></th><th></th><th>Product</th><th>Quantity</th></tr></thead><tbody>'+rows+'</tbody></table>';
  }
  // ---- Collapsible filter groups (mobile) ----
  document.querySelectorAll('.filter-collapsible > h4').forEach(function(h){
    h.addEventListener('click', function(){ h.parentElement.classList.toggle('open'); });
  });

  // ---- Services tabbed detail ----
  document.querySelectorAll('.svc-tab').forEach(function(t){
    t.addEventListener('click', function(){
      var id=t.getAttribute('data-tab');
      document.querySelectorAll('.svc-tab').forEach(function(x){ x.classList.remove('active'); });
      document.querySelectorAll('.svc-panel').forEach(function(x){ x.classList.remove('active'); });
      t.classList.add('active');
      var p=document.getElementById(id); if(p) p.classList.add('active');
    });
  });

  rfqCount(); renderCart();
})();
