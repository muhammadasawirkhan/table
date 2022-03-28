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
						str+=options(option,table,i);
					}
					display_box.innerHTML=str;
					break;
			case "desc":
					var str=""; 
					for(i=size;i>0;i--)
					{
						str+=options(option,table,i);	
					}
					display_box.innerHTML=str;
					break;
		}
}
function options(option,table,i)
{
	var str="";
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
return str;
}