
var i,text1,text2,textLength,t,ele;

function beginTyping()
{
i=0;
ele=document.getElementById("typing");
text1=ele.innerText;
textLength=text1.length;
ele.innerText="";
text2="";
t=window.setInterval("type()",100);
}

function type()
{
text2=text2+text1.substring(i,i+1);
ele.innerText=text2;
i=i+1;
if (i==textLength)
  {
  clearInterval(t);
  }
}
