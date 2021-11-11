$("#nav-placeholder").html(`
<div id="mySidenav" class="sidenav">
<div style="color:#33ff00;top:0px;left:5px;position:absolute;font-size:1.5em;">
	user@pc
	<p id="actual" style=color:#33ff00;float:right;margin-left:5px;></p>
	<p style="color:red;float:right;margin-left:15px;">/</p>
</div>

  <a class="fil hyper selected" href=index.html?lan=`+current_lang+` style="margin-top:35px;">Accueil</a>

  <a class="fil hyper" href="https://github.com/andreiglesias" target="_blank">Github <i class="fa fa-github"></i></a>

  <a class="fil accordion">Corewar</a>
  	<div class="panel">
		<h2> Corewar </h2>
		<a class="selectpan" href="https://github.com/AndreIglesias/Corewar/blob/master/README.md" target="_blank">README</a>
		<a href="https://github.com/AndreIglesias/Corewar" target="_blank">Code</a>
		<a href="https://github.com/AndreIglesias/Corewar/blob/master/docs/corewar.gif" target="_blank">Preview</a>
	</div>
<a class="fil accordion">Tkplot</a>
  	<div class="panel">
		<h2> Tkplot </h2>
		<a class="selectpan" href="https://github.com/AndreIglesias/Tkplot/blob/master/README.md" target="_blank">README</a>
		<a href="https://github.com/AndreIglesias/Tkplot" target="_blank">Code</a>
		<a href="https://github.com/AndreIglesias/Tkplot/blob/master/Images/graph1.png" target="_blank">Preview</a>
	 </div>
<a class="fil accordion">Lem-in</a>
  	<div class="panel">
		<h2> Lem-in </h2>
		<a class="selectpan" href="https://github.com/AndreIglesias/Lem-in/blob/master/README.md" target="_blank">README</a>
		<a href="https://github.com/AndreIglesias/Lem-in" target="_blank">Code</a>
		<a href="https://github.com/AndreIglesias/Lem-in/blob/master/lemin.gif" target="_blank">Preview</a>
	</div>
<a class="fil accordion">Push-Swap</a>
  	<div class="panel">
		<h2> Push-Swap </h2>
		<a class="selectpan" href="https://github.com/AndreIglesias/push_swap/blob/master/README.md" target="_blank">README</a>
		<a href="https://github.com/AndreIglesias/push_swap" target="_blank">Code</a>
		<a href="https://github.com/AndreIglesias/push_swap/blob/master/push-swap.gif" target="_blank">Preview</a>
	</div>
<a class="fil accordion">Infinity-Cycles</a>
  	<div class="panel">
		<h2> Infinity-Cycles </h2>
		<a class="selectpan" href="https://github.com/AndreIglesias/Infinity-Cycles/blob/master/README.md" target="_blank">README</a>
		<a href="https://github.com/AndreIglesias/Infinity-Cycles" target="_blank">Code</a>
		<a href="https://github.com/AndreIglesias/Infinity-Cycles/blob/master/manual.jpg" target="_blank">Preview</a>
	</div>

</div>

<div class="container" id="bars" style="margin-top: 3%; margin-left: 3%;">
  <ul class="languagepicker roundborders large">
	<li id="lfr" onclick="change_lang(0)"><a href="?lan=fr"><img src="img/fr.png"/>Français</a></li>
	<li id="len" onclick="change_lang(1)"><a href="?lan=en"><img src="img/en.png"/>English</a></li>
	<li id="les" onclick="change_lang(2)"><a href="?lan=es"><img src="img/es.png"/>Español</a></li>
  </ul>
  <a class="barrs" onclick="openNav(this)">
	<i class="fa fa-terminal fa-3x" aria-hidden="true" style="color:green;"></i>
  </a>
</div>
			<div class="key icon up">
			  <span><i class="fa fa-arrow-up"></i></span>
			</div>
			<div class="key icon lf">
			  <span><i class="fa fa-arrow-left"></i></span>
			</div>
			<div class="key icon dw">
			  <span><i class="fa fa-arrow-down"></i></span>
			</div>
			<div class="key icon rg">
			  <span><i class="fa fa-arrow-right"></i></span>
			</div>
`);

//----------------arrows----------------------

function bindkey(x)
{
	if(x)
	{
		$( ".up" ).click(function() {
			var e = jQuery.Event("keydown");
			e.which = 38;
			$(document).trigger(e);
		});
		$( ".lf" ).click(function() {
			var e = jQuery.Event("keydown");
			e.which = 37;
			$(document).trigger(e);
		});
		$( ".rg" ).click(function() {
			var e = jQuery.Event("keydown");
			e.which = 39;
			$(document).trigger(e);
		});
		$( ".dw" ).click(function() {
			var e = jQuery.Event("keydown");
			e.which = 40;
			$(document).trigger(e);
		});
	}
	else
	{
		$(".up").unbind("click");
		$(".lf").unbind("click");
		$(".rg").unbind("click");
		$(".dw").unbind("click");
	}
}

$("span").hover(

function(e) {
    $(this).addClass("hover");
},

function(e) {
    $(this).removeClass("hover");
});

$("span").click(

	function(e) {
		$(this).addClass("click");
		var self = this;
		setTimeout(function(){$(self).removeClass("click");}, 100);
	}
)


function arroutside() {
	$(document).keydown(function(e) {
		e = e || window.event;
		switch(e.which || e.keyCode) {
		case 37:
			var keydw = $(".lf span");
			break;
		case 38:
			var keydw = $(".up span");
			break;
		case 39:
			var keydw = $(".rg span");
			break;
		case 40:
			var keydw = $(".dw span");
			break;
		default: return;
		}
		keydw.mouseenter();
		keydw.click();
		setTimeout(function(){keydw.removeClass("click");
							  keydw.mouseleave();}, 100);
	});
}

arroutside();


// --------------------accordion --------------------------------
function closeAcc()
{
	var acc = $(".accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		var panel = acc[i].nextElementSibling;
		panel.style.display = "none";
	}
}


var acc = $(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		var panel = this.nextElementSibling;
		if (panel.style.display === "block")
			panel.style.display = "none";
		else
		{
			closeAcc();
			panel.style.display = "block";
		}
	});
}

//--------------nav--------------------

var selected = "selected";
function openNav(x) {
	$("#mySidenav").css({"width":"70%",
						 "height":"45%",
						 "border": "1px solid gray"});
	$("#main").css({"filter":"grayscale(100%) blur(3px)"});
	/*$('body,html').css('overflow-x','hidden');*/
	$( ".overlay" ).addClass('overlay-open');
	$("#actual").text($(".selected")[0].innerHTML);
	document.removeEventListener('mousemove', mouseLamp);
	$(".fil").css("width","40%");

	$(document).unbind('keydown');
	bindkey(1);
	$(document).keydown(function(e) {
		var ff =  $(".selected")[0].nextElementSibling.getElementsByTagName("*");
		if (selected == "selected")
		{
			var all = $(".fil");
			var selct = $("." + selected)[0];
		}
		else
		{
			var all = ff;
			var selct = $(".selected")[0].nextElementSibling.getElementsByClassName(selected)[0];
		}
		for (var i = 0, max = all.length; i < max; i++)
		{
			if (all[i].innerHTML == selct.innerHTML)
				break;
		}
		if (selected == "selected")
			closeAcc();
		e = e || window.event;
		switch(e.which || e.keyCode) {
		case 13:
			selct.click();
			return;
		case 37:
			if (selected != "selected")
			{
				$(".fil").css("width", "40%");
				selected = "selected";
			}
			break;
		case 38:
			all[i].classList.remove(selected);
			if (i == 0)
				all[all.length-1].classList.add(selected);
			else
				all[i-1].classList.add(selected);
			if (selected == "selected" && $(".selected:not(.hyper)"))
				$(".selected")[0].nextElementSibling.style.display = "block";
			break;

		case 39:
			if (selected == "selected" && $(".selected").hasClass("hyper"))
				$("." + selected)[0].click();
			else
			{
				$(".fil").css("width", "20%");
				$(".selected")[0].nextElementSibling.style.display = "block";
				selected = "selectpan";
			}
			break;

		case 40:
			all[i].classList.remove(selected);
			if (i >= all.length - 1)
				all[0].classList.add(selected);
			else
				all[i+1].classList.add(selected);
			if (selected == "selected" && $(".selected:not(.hyper)"))
				$(".selected")[0].nextElementSibling.style.display = "block";
			break;

        default: return;
		}
		if (selected == "selected")
			selct = $(".selected")[0];
		else
			selct = selct = $(".selected")[0].nextElementSibling.getElementsByClassName(selected)[0];
		if (selct)
			$("#actual").text(selct.innerHTML);
		e.preventDefault();
	});
	var x = document.getElementById("snackbar");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}


function closeNav(x) {
	$("#mySidenav").css({"width":"70%",
						 "height":"0",
						 "border": "0"});
	$("#main").css({"filter":"grayscale(0%)"});
	/*$('body,html').css('overflow-x','auto');*/
	$( ".overlay" ).removeClass( 'overlay-open' );
	document.addEventListener('mousemove', mouseLamp);
	var e = jQuery.Event("keydown");
	e.which = 37;
	$(".sidenav").trigger(e);
	$(document).unbind('keydown');
	arroutside();
	bindkey(0);
	closeAcc();
}
