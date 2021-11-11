
var dictionary = {
    'subti': {
        'es': '& estoy codificando ;)',
        'en': "& I'm coding right now ;)",
        'fr': '& je code en ce moment ;)',
    },
	'greet': {
		'es': 'Ocupa las teclas para desplazarte !',
		'en': 'You can use the keys to move around !',
		'fr': 'Utilise le clavier pour te deplacer !'
	},
	'greeting' : {
		'es': 'QPX! S0Y /-\\|\\||)|2[-.',
		'en': 'H3LL0! 1\'M 4NDR3',
		'fr': 'SLT! J\'SU1S 4NDR3'
	}
};
var langs = ['fr', 'en', 'es'];

var cquery = langs.indexOf(window.location.search.replace(/^#/, ' ').replace(/^[^=]*\=/, "").replace(/=.*$/, ""));
if (cquery == 1 || cquery == 2)
	var current_lang_index = cquery;
else
	var current_lang_index = 0;

var current_lang = langs[current_lang_index];

window.change_lang = function(nb) {
    current_lang_index = nb;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
		if (key == 'greeting')
			$("[data-text]").attr('data-text', dictionary[key][current_lang]);
    });
}

/*-------------------------------------------------*/

const W = window.innerWidth;
const H = window.innerHeight

function updateAnimationTiming() {
	const animationDuration = 5 + Math.random() * 10;
	const animationDelay = 7.5;

  window.requestAnimationFrame(() => {
    document.documentElement.style.setProperty('--animationDuration', animationDuration + 's');
    document.documentElement.style.setProperty('--animationDelay', animationDelay + 's');
  });

  const timeout = (animationDuration + animationDelay) * 1000 - 100;

  setTimeout(updateAnimationTiming, timeout);
}

updateAnimationTiming();

var mouseLamp = function (e) {
	window.requestAnimationFrame(() => {
		const X = e.clientX;
		const Y = e.clientY;

		document.documentElement.style.setProperty('--cursorX', X + 'px');
		document.documentElement.style.setProperty('--cursorY', Y + 'px');
	});
};

document.addEventListener('mousemove', mouseLamp);
