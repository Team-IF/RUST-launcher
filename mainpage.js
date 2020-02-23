function loadPage(){
    //var cook = loadToken()
    var cook = ["Neko_P","29b36732-d567-49cc-bee1-ca4729ea258b"];
    $("#nickname").text(cook[0]);
    //$("#profileimg").attr("src","https://crafatar.com/avatars/"+cook[1]+"?default=MHF_Steve&overlay")
}

addLoadEvent(loadPage);
