$(function () {
	page = {
		width: 375,
		height: 667,
		resize: function () {
			document.body.style.height = page.height + 'px';
			document.body.style.width = page.width + 'px';
			if (window.innerWidth != page.width) {
				var k = 0;
				k = window.innerWidth > window.innerHeight ? window.innerHeight / page.height : window.innerWidth / page.width;
				// var k = window.innerWidth / page.width;
				var x = ((window.innerWidth - page.width) / 2) / k;
				var j = window.innerHeight / page.height;
				var y = ((window.innerHeight - page.height) / 2) / k;
				document.body.style.transform = 'scale(' + k + ') translate(' + x + 'px,' + y + 'px)';


			}
		}
	}


	page.resize();
	window.onresize = function () {
		page.resize();
	}

	document.addEventListener('touchmove', function (event) {
		event.preventDefault();
	}, false);


	$('.go_btn').on('touchend', function () {
		location.href = 'index2';
	})
})
