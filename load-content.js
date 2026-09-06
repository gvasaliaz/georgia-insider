(async function(){
  try{
    var res=await fetch('/content.json?v='+Date.now());
    if(!res.ok)return;
    var C=await res.json();
    var wa=(C.contact&&C.contact.wa)||'995591700505';
    var phone=(C.contact&&C.contact.phone)||'';
    var tg=(C.contact&&C.contact.tg)||'';
    var tgu=(C.contact&&C.contact.tg_url)||'';
    var em=(C.contact&&C.contact.email)||'';

    // Contact
    var s=function(id,v){var e=document.getElementById(id);if(e&&v)e.textContent=v;};
    var h=function(id,v){var e=document.getElementById(id);if(e&&v)e.innerHTML=v;};
    var a=function(id,v){var e=document.getElementById(id);if(e&&v)e.href=v;};
    s('disp-phone',phone);
    s('disp-tg',tg);
    s('disp-email',em);
    a('cta-wa','https://wa.me/'+wa);
    a('hero-wa','https://wa.me/'+wa);
    a('cta-tg','https://t.me/'+tgu);
    a('cta-em','mailto:'+em);

    // Site name
    if(C.site_name){
      var parts=C.site_name.trim().split(' ');
      var logo=parts[0]+(parts.slice(1).join(' ')?'<span>'+parts.slice(1).join(' ')+'</span>':'');
      h('nav-logo',logo);h('footer-logo',logo);
      document.title=C.site_name+' \u2014 Relocation Concierge & Business Setup in Tbilisi';
    }

    // Hero
    if(C.hero){
      h('h-eyebrow-en',C.hero.eyebrow_en);h('h-eyebrow-ru',C.hero.eyebrow_ru);
      h('h-h1-en',C.hero.h1_en);h('h-h1-ru',C.hero.h1_ru);
      h('h-sub-en',C.hero.sub_en);h('h-sub-ru',C.hero.sub_ru);
    }

    // Services
    if(C.services&&C.services.length){
      var sp=document.getElementById('stat-price');
      if(sp)sp.textContent=C.services[0].price_en||C.services[0].price||'$120';
      var sc=document.getElementById('services-cards');
      if(sc){
        sc.innerHTML='';
        C.services.forEach(function(sv){
          var pen=sv.price_en||sv.price||'Custom quote';
          var pru=sv.price_ru||sv.price||'\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443';
          var ien=(sv.inc_en||[]).map(function(i){return'<li>'+i+'</li>';}).join('');
          var iru=(sv.inc_ru||[]).map(function(i){return'<li>'+i+'</li>';}).join('');
          sc.innerHTML+='<div class="card'+(sv.featured?' star':'')+'">'+
            (sv.badge_en?'<div class="badge en">'+sv.badge_en+'</div><div class="badge ru">'+sv.badge_ru+'</div>':'')+
            '<div class="c-ico">'+(sv.icon||'\u2b50')+'</div>'+
            '<div class="c-name en">'+sv.name_en+'</div><div class="c-name ru">'+sv.name_ru+'</div>'+
            '<div class="c-price en">'+pen+'</div><div class="c-price ru">'+pru+'</div>'+
            '<p class="c-desc en">'+sv.desc_en+'</p><p class="c-desc ru">'+sv.desc_ru+'</p>'+
            '<ul class="c-inc en">'+ien+'</ul><ul class="c-inc ru">'+iru+'</ul>'+
            '<a href="https://wa.me/'+wa+'" class="btn-block en">'+(sv.btn_en||'Contact Us')+'</a>'+
            '<a href="https://wa.me/'+wa+'" class="btn-block ru">'+(sv.btn_ru||'\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c')+'</a>'+
            '</div>';
        });
      }
    }

    // About
    if(C.about){
      var ab=C.about;
      var ag=document.getElementById('about-grid');
      if(ag){
        ag.innerHTML=
          '<div class="about-card">'+
          '<div class="a-role en">'+(ab.zura_role_en||'')+'</div><div class="a-role ru">'+(ab.zura_role_ru||'')+'</div>'+
          '<div class="a-name">'+(ab.zura_name||'Zura Gvasalia')+'</div>'+
          '<div class="a-title en">'+(ab.zura_title_en||'')+'</div><div class="a-title ru">'+(ab.zura_title_ru||'')+'</div>'+
          '<p class="a-bio en">'+(ab.zura_bio_en||'')+'</p><p class="a-bio ru">'+(ab.zura_bio_ru||'')+'</p>'+
          '<div class="tags"><span class="tag">\ud83c\uddec\ud83c\uddea Georgian</span><span class="tag">\ud83c\uddec\ud83c\udde7 English C1</span><span class="tag">\ud83c\uddf7\ud83c\uddfa Russian C1</span><span class="tag en">B2B Trade</span><span class="tag ru">B2B-\u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044f</span></div>'+
          '</div>'+
          '<div class="about-card">'+
          '<div class="a-role en">'+(ab.lawyer_role_en||'')+'</div><div class="a-role ru">'+(ab.lawyer_role_ru||'')+'</div>'+
          '<div class="a-name">'+(ab.lawyer_name||'')+'</div>'+
          '<div class="a-title en">'+(ab.lawyer_title_en||'')+'</div><div class="a-title ru">'+(ab.lawyer_title_ru||'')+'</div>'+
          '<p class="a-bio en">'+(ab.lawyer_bio_en||'')+'</p><p class="a-bio ru">'+(ab.lawyer_bio_ru||'')+'</p>'+
          '<div class="tags"><span class="tag en">Corporate Law</span><span class="tag ru">\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u043e</span><span class="tag en">Company Registration</span><span class="tag ru">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f</span><span class="tag">\ud83c\uddec\ud83c\uddea Georgian</span><span class="tag">\ud83c\uddec\ud83c\udde7 English C1</span><span class="tag">\ud83c\uddf7\ud83c\uddfa Russian C2</span></div>'+
          '</div>';
      }
    }

    // FAQ
    if(C.faq&&C.faq.length){
      var fl=document.getElementById('faq-list');
      if(fl){
        fl.innerHTML='';
        C.faq.forEach(function(f){
          fl.innerHTML+='<div class="faq-item">'+
            '<button class="faq-q" onclick="toggleFaq(this)">'+
            '<span class="en">'+f.q_en+'</span><span class="ru">'+f.q_ru+'</span>'+
            '<span class="faq-arrow">\u25be</span></button>'+
            '<div class="faq-a en">'+f.a_en+'</div>'+
            '<div class="faq-a ru">'+f.a_ru+'</div>'+
            '</div>';
        });
      }
    }

  }catch(e){console.log('CMS loader error:',e);}
})();
