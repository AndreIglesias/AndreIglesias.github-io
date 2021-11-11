if (current_lang_index == 1 || current_lang_index == 2)
{
	$("#l"+ current_lang).parent().prepend($("#l"+ current_lang));
}

$('a',$("#l"+ current_lang)).removeAttr("href");
translate();

var i = 0;
var speed = 35;

function typeWriter(txt, ID) {

  if (i < txt.length) {
    document.getElementById(ID).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, txt, ID);
  }
}
