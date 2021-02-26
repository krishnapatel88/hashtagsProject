let ba=()=>
{
    $(".masterbutton").click((e)=>
    { 
           var elm1=e.target;
         //   console.log(elm1.getAttribute("id"));
           var name=elm1.getAttribute("id");
       //    console.log(name);
           var elm2=$(`#${name}`).next();
        //   console.log(elm2.children().attr("id"));

           if(window.getSelection) {
             
             var selection = window.getSelection();
             var range = document.createRange();
             range.selectNodeContents(elm2[0]);
             selection.removeAllRanges();
             selection.addRange(range);
             document.execCommand("Copy");

           }
    });

         const params = new URLSearchParams(window.location.search);
     //     console.log(params.get('myid'));
         $(".change0").html(`#${params.get('myid')}`);
         let name=params.get('myid');
         let data1=$(`#${name}2`).text();
         let data2=$(`#${name}3`).text();
         console.log(data1);
         console.log(data2);
        
         if(data1.length > 0 && data2.length>0)
         {
          $("#text1").html(data1);
          $("#text2").html(data2);
          $(`#hastag_container`).removeClass("hide");
          $(".my-notfound").removeClass("hide");
         }
         else
         {
             $(`.my-pa`).removeClass("hide");
             $(".not-found").html("THIS HASHTAG IS NOT FOUND IN OUR SERVER")
         }
      
         $(".get-result").click(()=>
         {
                let name1=document.getElementById("tag-typer");
                let name=name1.value;
                alert(`${name}`);

                string_name=name;
                console.log(string_name);
                location.replace(`index.html?myid=${string_name}`);  
         });

};
window.onload=ba;