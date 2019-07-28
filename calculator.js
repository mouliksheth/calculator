		$(document).ready(function() {
			$("#content").find("[id^='tab']").hide(); // Hide all content
			$("#tabs li:first").attr("id","current"); // Activate the first tab
			$("#content #tab1").fadeIn(); // Show first tab's content
			
			$('#tabs a').click(function(e) {
				e.preventDefault();
				if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
				 return;       
				}
				else{             
				  $("#content").find("[id^='tab']").hide(); // Hide all content
				  $("#tabs li").attr("id",""); //Reset id's
				  $(this).parent().attr("id","current"); // Activate this
				  $('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
				}
			});
		});
			function checkcashreward(price, id){
				if(id == 3){
					var hmval = $("#hmvalue").val();
					var mbal = $("#mbal").val();
					if(mbal != '' && hmval != ''){
						var hval = (hmval*80)/100;
						$("#refamnt").val( hval.toFixed(2));
						var hequity = hval-mbal;
						$("#hequity").val( hequity.toFixed(2));
						var cashprice = ( hval * 0.50 )/ 100;
						$("#cashreward"+id).val(cashprice.toFixed(2));
					}
				}else{
					var cashprice = ( price * 0.50 )/ 100;
					$("#cashreward"+id).val(cashprice.toFixed(2));
				}
			}
	
