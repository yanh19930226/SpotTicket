/*
 * @Author: yanh
 * @Date:   2018-05-08 10:23:35
 * @Last Modified by:   yanh
 * @Last Modified time: 2018-05-15 17:48:34
 */

'use strict';

$(function() {
	/**
	 * 控制标签页的标签容器宽度
	 */
	var $ulContainer = $('.nav-tabs');
	// 获取所有子元素的宽度和
	var width = 30; // 因为原本ul上有padding-left
	// console.log($ulContainer.children());
	// 遍历子元素
	$ulContainer.children().each(function(index, element) {
		// console.log(element.clientWidth);
		// console.log($(element).width());
		width += element.clientWidth;
	});
	// 此时width等于所有LI的宽度总和
	// 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
	if (width > $(window).width()) {

		$ulContainer
			.css('width', width)
			.parent().css('overflow-x', 'scroll');
	}
})
/**
重置返回顶部按钮位置
*/
	// var topcontrol = document.getElementById("topcontrol"); //获取Id为"div1"的div
	// topcontrol.style.right = '10px';
	// topcontrol.style.bottom = '66px';

/**
 * 模态框底部弹出方法
 */
$('.menuright').click(function() {
	$('.modal')
		.prop('class', 'modal fade')
		.addClass($(this).data('direction'));
	$('#myModal').modal('show');
});