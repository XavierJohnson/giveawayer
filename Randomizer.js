function RandomizeIt()
{
	var Minimum = document.getElementById("Minimum").value;
	var Maximum = document.getElementById("Maximum").value;
	var Result = document.getElementById("Result");
	if( Minimum.length == 0 || Maximum.length == 0 )
	{
		Result.innerHTML = "Enter a number!";
	}
	else 
	{
		if( isNaN(Minimum) || isNaN(Maximum) )
		{
			Result.innerHTML = "Put in a number!";
		}
		else 
		{
			var Winner = Math.floor(Math.random() * Maximum);
			if( Winner < Minimum )
			{
				Winner = Winner + Minimum;
			}
			Result.innerHTML = "Winner is number " + Winner + "!";
		}
	}
	return 1;
}