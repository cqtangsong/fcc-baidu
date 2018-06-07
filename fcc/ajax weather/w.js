    $(function(){
 $('#search').click(function(){
      var city=$('#city').val()||'北京';
      $citycode=urlencode(city);
      $.ajax({
        url:'https://v.juhe.cn/weather/index?format=2&cityname='+$citycode+'&key=e8450c84917fc35509fcec5773b5582c',
        data:{location:city},
        dataType:'jsonp',
        type:'get',
        success:	function(data){
            var sk=data.result.sk;
           var  today=data.result.today;
            var fu=data.result.future;
            $('#1').html("<p>"+today.city+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+today.date_y+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+today.week+"</p>");
            $('#2').html("<p>"+today.weather+"</p>"+"<p>"+today.temperature+"</p>"+"<p>"+today.wind+"</p>"+"<p>湿度："+sk.humidity+"</p>"+"<p>穿衣指数："+today.dressing_index+"</p>"+"<p>紫外线强度："+today.uv_index+"</p>"+"</p>"+"<p>旅游指数："+today.travel_index+"</p>"+"<p>晨练指数："+today.exercise_index+"</p>");
          $('#3').empty();
     for(var i=1;i<7;i++){
              $('#3').append("<div class='s'><p>"+fu[i].week +"</p>"+"<p>"+fu[i].temperature +"</p>"+"<p>"+fu[i].weather +"</p>"+"<p>"+fu[i].wind +"</p></div>")  
            }
        }
      })
 });
function urlencode (str) { 
str = (str + '').toString(); 
return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28'). 
replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+'); 
} 
})