let a=()=>
{
          let string_name="krishna";
           $(".carry_table tbody tr td").click((e)=>
           {
                var elm1=e.target;
                let tag_name=elm1.tagName;
               //  console.log(elm1.getAttribute("id"));
                if(tag_name === "A")
                {
                    string_name=elm1.getAttribute("id")+"";
                   // console.log(string_name);
                    location.replace(`index.html?myid=${string_name}`);      
                }
                
           });

};
window.onload=a;

