<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>

<p class="tips">This is a tips</p>
<p class="tips">This is a tips</p>
<p class="tips">This is a tips</p>
<script>
	//write plugin
	$.fn.greenText = function () {
		this.css('color', 'green');
		this.append(' This is Text 2');
	};

	$(document).ready(function () {
		$('p.tips').greenText();
	});
</script>