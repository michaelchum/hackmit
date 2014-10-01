$( document ).ready(function() {

	var userList = new Firebase('https://cheapcheep.firebaseio.com/user_list');
	
	$('#submit').click(function() {
		var email = $('#email').val();
		var telephone = $('#telephone').val();
		var u = userList.push();
		u.set({email: email, telephone: telephone});
		nextPage(u);
	});
});

function nextPage(x) 
{

	function addNewItem(k) {
  				var title = $('#dealTitle').val();
  				$('#dealTitle').val("");
  				x.once('value', function(snapshot) {
  					user = snapshot.val();
  					bKeyWord = user.hasOwnProperty('keywords');
  					if(bKeyWord){
  						var titleArray = user.keywords;
  						titleArray.push(title);
  						x.update({keywords:titleArray});
  					}
  					else{
  						x.update({keywords:[title]});
  					}
  				$('#titlesWrapper').append("<div class='dealTitle' id='" + k + "'>" + title + "<input type='button' class='close' value='X'></input></div>");
  				k++;
  				
  				$('.close').on('click', function() {
  					var id = $(this).parent().attr('id');
  					x.once('value', function(snapshot) {
  						user = snapshot.val();
  						var titleArray = user.keywords;
  						titleArray.splice(id, 1);
  						x.update({keywords:titleArray});
  					});
  					$(this).closest('div').fadeOut();	
  				});
  				});
  			}
	var user;
	$('#userInfo').fadeOut()
	$('#description').fadeOut(function(){
		$('#bodyWrapper').prepend("<form id='userInfo'><input type='text' id='dealTitle' placeholder='Enter a Product'><input type='button' id='add' value='Find Deals'></form>");
		x.once('value', function(snapshot) {
  			user = snapshot.val();
  			var k = 0;
  			if (user.keywords){
  				for (var i; i<= user.keywords.length; i++)
  				{
  					$('#descriptionWrapper').append("<div class='dealTitle' id='" + i + "'>" + user.keywords[i] + "</div>");
  					k = i;
  				}
  			}
  					$(document).keydown( function(event) {
  			if(event.keyCode == 13){		
  				event.preventDefault();
  				if($('#dealTitle').val().length >= 1){
  					addNewItem(k);
  				}
  			}	
  		});
  			$('#add').on('click', function(){
  				if($('#dealTitle').val().length >= 1){
  					addNewItem(k);
  				}
  			});
		});
	});
}