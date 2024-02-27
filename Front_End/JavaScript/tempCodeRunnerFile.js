  var name="global";
          function outer(){
            var outerVar=10;
            var name="outer";
            function innner(){
                var name="inner";
                console.log(name);
            }
          }