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
				var x = ((window.innerWidth - page.width) / 2) / k;
				var j = window.innerHeight / page.height;
				var y = ((window.innerHeight - page.height) / 2) / k;
				document.body.style.transform = 'scale(' + k + ') translate(' + x + 'px,' + y + 'px)';
			}
		}
	}


	// page.resize();
	// window.onresize = function () {
	// 	page.resize();
	// }

	document.addEventListener('touchmove', function (event) {
		event.preventDefault();
	}, false);

	//1
	$('.bg1').on('touchend', function () {
		$('.bg1').removeClass('on');
		$('.bg2').addClass('on');
	})


	//2
	$('.bg2 .min .item').on('touchend', function () {
		$(this).toggleClass('active');
	})
	var vl = 0;
	$('.bg2 .btn').on('touchend', function () {
		var len = $('.bg2 .min .item.active').length;
		if (len <= 3) {
			lv = 0;
		} else if (len == 4) {
			lv = 1;
			$('.bg2 .min .item.active').each(function (i, e) {
				if ($(e).hasClass('antang') ||
					$(e).hasClass('weishengsu') ||
					$(e).hasClass('danbaifen')) {
					lv = 2;
				}
			});
		} else if (len == 5) {
			lv = 1;
			$('.bg2 .min .item.active').each(function (i, e) {
				if ($(e).hasClass('antang') ||
					$(e).hasClass('weishengsu') ||
					$(e).hasClass('danbaifen')) {
					lv = 3;
				}
			});
		} else if (len > 5) {
			lv = 4;
		}


		$('.bg2').removeClass('on');
		$('.bg3').addClass('on');
	})


	//3
	function getQueryStringByName(name) {
		var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
		if (result == null || result.length < 1) {
			return "";
		}
		return result[1];
	}
	$('.bg3 .lv').addClass('lv_' + vl);

	$('.btn').on('touchend', function () {
		$('.bg3').removeClass('on');
		$('.bg4').addClass('on');
	})


	//4
	$('.bg4 .btn_01').on('touchend', function () {
		$('.bg4 .dialog1').show();
		$('.bg4 .dialog1_border').show();
		$('.bg4 .modal_bg').show();
	})
	$('.bg4 .close').on('touchend', function () {
		$('.bg4 .dialog1').hide();
		$('.bg4 .dialog2').hide();
		$('.bg4 .dialog3').hide();
		$('.bg4 .dialog1_border').hide();
		$('.bg4 .modal_bg').hide();
	})
	$('.bg4 .btn_02').on('touchend', function () {
		$('.bg4 .dialog2').show();
		$('.bg4 .modal_bg').show();
	})
	$('.bg4 .btn_03').on('touchend', function () {

	})
	$('.bg4 .submit').on('touchend', function () {
		var data = $('form').serialize();
		$('.dialog2').hide();
	})


	$('.bg4 .sexbtn').on('touchend', function () {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children().click();
	});
	var imgs = [''];
})

document.onreadystatechange = subSomething; //当页面加载状态改变的时候执行这个方法. 

var iscrollOptions = {
	tap: false,
	scrollbars: true,
	bindToWrapper: true,
	fadeScrollbars: false,
	disableMouse: false,
	//scrollbars: 'custom-scrollbar',
	disablePointer: true
}


function subSomething() {
	if (document.readyState == 'complete') {
		//alert('complete!');
		 document.getElementById('loading').style.display = "none";
		

	}

}



// function orient(e) {
// 	if (window.orientation == 0 || window.orientation == 180) {
// 		$('body').css('transform', 'none');
// 		return false;

// 	} else if (window.orientation == 90 || window.orientation == -90) {
// 		page.resize();
// 		return false;

// 	}
// }


// $(function () {
// 	orient();
// });


// $(window).bind('orientationchange', function (e) {
// 	orient();
// });
