function display()
{
	var table=document.querySelector("#table").value;
	var size=document.querySelector("#size").value;
	var sort=document.querySelector("#sort").value;
	var option=document.querySelector("#option").value;
	
	var display_box=document.querySelector(".display");
		//alert(table);
		//alert(size);
		
		//alert(sort);
		switch(sort)
		{
			case "asc":
					var str="";
					alert(sort);
						 
					for(i=1;i<size;i++)
					{
						if(option=='e')
						{
						if(i%2==0)	
							str+="<br/>"+table+"*"+i+"="+(table*i);
						
						}
						if(option=='o')
						{
						if(i%2!=0)	
							str+="<br/>"+table+"*"+i+"="+(table*i);
						
						}
					}
					display_box.innerHTML=str;
					break;
			case "desc":
					var str=""; 
					for(i=size;i>0;i--)
					{
						if(option=='e')
						{
						if(i%2==0)	
							str+="<br/>"+table+"*"+i+"="+(table*i);
						
						}
						if(option=='o')
						{
						if(i%2!=0)	
							str+="<br/>"+table+"*"+i+"="+(table*i);
						
						}
					}
					display_box.innerHTML=str;
					break;
		}
}