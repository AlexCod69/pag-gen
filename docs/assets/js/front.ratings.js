var ss_l18n = {"enable_movies":"1","enable_tvshows":"1","enable_seasons":"1","enable_episodes":"1","require_login":"","nonce":"6b7222b63e","url":""};

!function(t){t(document).ready(function(){function a(a,s){var n=t(this).data("id"),r=t(this).data("type"),e=t(this).parent();t.ajax({type:"POST",dataType:"json",context:e,data:"action=starstruck_action&nonce="+ss_l18n.nonce+"&score="+a+"&id="+n+"&type="+r,url:ss_l18n.url,error:function(t,a,s){1==ss_l18n.enable_debug&&(console.log(arguments),alert("Error: "+s+" - "+a+" - "+t.status))},success:function(a){1==ss_l18n.enable_debug&&console.log(a),t(".rating-count",this).html(a.votes).fadeIn("slow"),t(".rating-value",this).html(a.avg).fadeIn("slow"),t(".dt_rating_vgs",this).html(a.avg).fadeIn("slow"),t(".rating-yours",this).html(a.user_vote).fadeIn("slow"),t(".rating-text",this).html(a.vote_text).fadeIn("slow")}}),t(this).fadeOut(function(){t(this).fadeIn()})}var s=ss_l18n.require_login?!0:!1,n=ss_l18n.enable_half_stars?!0:!1;if(t(".starstruck-main").raty({starType:"i",score:function(){return t(this).data("rating")},readOnly:s,click:a,half:n,halfShow:n}),t(".starstruck-read-only").raty({starType:"i",score:function(){return t(this).data("rating")},readOnly:!0,half:n,halfShow:n}),"jquery"===ss_l18n.tax_output&&t(".starstruck-tax").length){var r=t(".starstruck-tax.wp_footer > div");t(ss_l18n.tax_selector).after(r),t(r).show()}t(".starstruck").length&&t("body").addClass("starstrucked")})}(jQuery);