var hasDot = false;

function Append(x)
{

	document.getElementById("input").value += x;
}

function AppendDot()
{
	if (hasDot == false)
	{
		document.getElementById("input").value += ".";
		hasDot = true;
	}
}