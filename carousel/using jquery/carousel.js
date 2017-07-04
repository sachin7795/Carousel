$(document).ready(function(){
	
	$('#prev').fadeTo(100,0.5);
	$('#next').fadeTo(100,0.5);
	
	setInterval(autoslide,5000);
	
	function autoslide(){
		$('.dot').css('list-style','circle');
		var currentimage = $('.active');
		var nextimage = currentimage.next();
		var currentindicator = $('.activeindi');
		var cont = currentimage.attr('id');
		if(cont == 'last'){
			var firstimage = $('#first');
			var firstindicator = $('#firstdot');
			currentimage.removeClass('active').css('z-index',-10);
			firstimage.addClass('active').css('z-index',10);
			currentindicator.removeClass('activeindi').css('list-style','circle');
			firstindicator.addClass('activeindi').css('list-style','disc');
			
		}else{
		var nextindicator = currentindicator.next();
		currentimage.removeClass('active').css('z-index',-10);
		nextimage.addClass('active').css('z-index',10);
		currentindicator.removeClass('activeindi').css('list-style','circle');
		nextindicator.addClass('activeindi').css('list-style','disc');		
	}}
	
	$('#next').on('click',function(){
		$('.dot').css('list-style','circle');
		var currentimage = $('.active');
		var nextimage = currentimage.next();
		var currentindicator = $('.activeindi');
		var nextindicator = currentindicator.next();
		if(nextimage.length){
			currentimage.removeClass('active').css('z-index',-10);
			nextimage.addClass('active').css('z-index',10);
			currentindicator.removeClass('activeindi').css('list-style','circle');
			nextindicator.addClass('activeindi').css('list-style','disc');
			
			
		}else{
			var firstimage = $('#first');
			var firstindicator = $('#firstdot');
			currentimage.removeClass('active').css('z-index',-10);
			firstimage.addClass('active').css('z-index',10);
			currentindicator.removeClass('activeindi').css('list-style','circle');
			firstindicator.addClass('activeindi').css('list-style','disc');
		}
	
	});
	
	$('#prev').on('click',function(){
		$('.dot').css('list-style','circle');
		var currentimage = $('.active');
		var previmage = currentimage.prev();
		var currentindicator = $('.activeindi');
		var previndicator = currentindicator.prev();
		if(previmage.length){
			currentimage.removeClass('active').css('z-index',-10);
			previmage.addClass('active').css('z-index',10);
			currentindicator.removeClass('activeindi').css('list-style','circle');
			previndicator.addClass('activeindi').css('list-style','disc');
	}else{
		var lastimage = $('#last');
		var lastindicator = $('#fifthdot');
		currentimage.removeClass('active').css('z-index',-10);
		lastimage.addClass('active').css('z-index',10);
		currentindicator.removeClass('activeindi').css('list-style','circle');
		lastindicator.addClass('activeindi').css('list-style','disc');
	}
	});
	
	$('#fifthdot').on('click',function(){
		var currentimage = $('.active');
		var fifthimage = $('#last');		
		currentimage.removeClass('active').css('z-index',-10);
		fifthimage.addClass('active').css('z-index',10);
		$(this).addClass('activeindi').css('list-style','disc');
		$('#seconddot').css('list-style','circle');
		$('#thirddot').css('list-style','circle');
		$('#fourthdot').css('list-style','circle');
		$('#firstdot').css('list-style','circle');
	});
	
	$('#fourthdot').on('click',function(){
		var currentimage = $('.active');
		var fourthimage = $('#fourth');
		currentimage.removeClass('active').css('z-index',-10);
		fourthimage.addClass('active').css('z-index',10);
		$(this).addClass('activeindi').css('list-style','disc');
		$('#seconddot').css('list-style','circle');
		$('#thirddot').css('list-style','circle');
		$('#firstdot').css('list-style','circle');
		$('#fifthdot').css('list-style','circle');
	});
	
	$('#thirddot').on('click',function(){
		var currentimage = $('.active');
		var thirdimage = $('#third');
		currentimage.removeClass('active').css('z-index',-10);
		thirdimage.addClass('active').css('z-index',10);
		$(this).addClass('activeindi').css('list-style','disc');
		$('#seconddot').css('list-style','circle');
		$('#firstdot').css('list-style','circle');
		$('#fourthdot').css('list-style','circle');
		$('#fifthdot').css('list-style','circle');
	});
	
	$('#seconddot').on('click',function(){
		var currentimage = $('.active');
		var secondimage = $('#second');
		currentimage.removeClass('active').css('z-index',-10);
		secondimage.addClass('active').css('z-index',10);
		$(this).addClass('activeindi').css('list-style','disc');
		$('#firstdot').css('list-style','circle');
		$('#thirddot').css('list-style','circle');
		$('#fourthdot').css('list-style','circle');
		$('#fifthdot').css('list-style','circle');
		
	});
	
	$('#firstdot').on('click',function(){
		var currentimage = $('.active');
		var firstimage = $('#first');
		currentimage.removeClass('active').css('z-index',-10);
		firstimage.addClass('active').css('z-index',10);
		$(this).addClass('activeindi').css('list-style','disc');
		$('#seconddot').css('list-style','circle');
		$('#thirddot').css('list-style','circle');
		$('#fourthdot').css('list-style','circle');
		$('#fifthdot').css('list-style','circle');
	});
	
	$('#prev').mouseenter(function(){
		$(this).fadeTo(100,1);
	}).mouseleave(function(){
		$(this).fadeTo(100,0.5);
	});
	
	$('#next').mouseenter(function(){
		$(this).fadeTo(100,1);
	}).mouseleave(function(){
		$(this).fadeTo(100,0.5);
	});
	
});