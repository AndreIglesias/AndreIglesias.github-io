function Num(x, pos) {
	this.x = x;
	this.pos = pos; //<rowsquare><row%3 by square><element [0-8]>
	this.posibl = [];
	this.vposibl = function(num) {
		return (this.posibl.filter(i => i === num).length);
	};
}

function solve()
{
    var myArr = document.forms.inputField;
    var myControls = myArr;
    var sudoku = [];
    for (var i = 0; i < myControls.length; i++)
	{
		var aControl = myControls[i];
		if (aControl.type != "button") {
			let n = new Num(Number(aControl.value), aControl.name);
		  	sudoku.push(n);
		}
	}
	console.log(sudoku);
	ft_solve(ft_sudoku(sudoku), 0);
}

function vsquare(sudoku, element, num)
{
	var pos = Number(sudoku[element].pos.substring(2));
	pos -= pos%3;

	for (var i = 0; i < sudoku.length && sudoku[i].pos.substring(0,1) != sudoku[element].pos.substring(0,1); i++);

	for (; i < sudoku.length && sudoku[i].pos.substring(0,1) == sudoku[element].pos.substring(0,1);i++)
	{
		if (pos <= Number(sudoku[i].pos.substring(2)) && Number(sudoku[i].pos.substring(2)) < pos+3)
		{
			if (i != element && sudoku[i].x == num)
				return (false);
		}
	}
	return (true);
}
function vrow(sudoku, element, num)
{
	for (var i = 0; i < sudoku.length && sudoku[i].pos.substring(0,2) != sudoku[element].pos.substring(0,2); i++);

	for (; i < sudoku.length && sudoku[i].pos.substring(0,2) == sudoku[element].pos.substring(0,2); i++)
	{
		if (i != element && sudoku[i].x == num)
			return (false);
	}
	return (true);
}
function vcol(sudoku, element, num)
{
	for (var i = Number(sudoku[element].pos.substring(2)); i < sudoku.length; i += 9)
	{
		if (i != element && sudoku[i].x == num)
			return (false);
	}
	return (true);
}

function fits(sudoku, i, e)
{
	return (!sudoku[i].x && vsquare(sudoku, i, e) &&
			vrow(sudoku, i, e) && vcol(sudoku, i, e));
}

function ft_sudoku(sudoku)
{
	for (var i = 0; i < sudoku.length; i++)
	{
		if (!sudoku[i].x)
		{
			[...Array(9).keys()].map(i => i + 1).forEach(function(e){
				if (fits(sudoku, i, e) && !sudoku[i].vposibl(e))
					sudoku[i].posibl.push(e);
			});

			if (sudoku[i].posibl.length == 1)
			{
				sudoku[i].x = sudoku[i].posibl[0];
				$('input[name='+sudoku[i].pos+']').val(sudoku[i].x);
				i = 0;
			}
		}
	}
	return (sudoku);
}

function ft_solve(sudoku, i)
{
	var bool = false;

	if (i  == sudoku.length)
		return (1);


	//console.log(sudoku[i]);
	if (fits(sudoku, i, sudoku[i].posibl[0]))
	{
		//copy of sudoku
		sudoku[i].x = sudoku[i].posibl[0];
		sudoku[i].posibl.shift();
		$('input[name='+sudoku[i].pos+']').val(sudoku[i].x);
		if (ft_solve(sudoku, i + 1))
			bool = true;
	}
	if (!bool) //ifnotfit
		return (ft_solve(sudoku, i+1));
	return (bool);
}
