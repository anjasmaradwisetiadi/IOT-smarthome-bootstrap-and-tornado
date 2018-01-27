$(document).ready(function(){

        var WEBSOCKET_ROUTE = "/ws";

        if(window.location.protocol == "http:"){
            //localhost
            var ws = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
            }
        else if(window.location.protocol == "https:"){
            //Dataplicity
            var ws = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
            }

        ws.onopen = function(evt) {
            $("#ws-status").html("Connected");
            };

        ws.onmessage = function(evt) {
            };

        ws.onclose = function(evt) {
            $("#ws-status").html("Disconnected");
            };

		
			
			  $("#Tombol_tombol").click(function (events) {
				$("#Panel_tombol").slideToggle()
				events.preventDefault()//untuk referesh tanpa tambah #
			  })
			  //display kamar
			  $("#Tombol_Action").click(function (events) {
				$("#Panel_Action").slideToggle()
				events.preventDefault()
			  })
			  //display Dapur
			   $("#Tombol_Dapur").click(function (events) {
				$("#Panel_Dapur").slideToggle()
				events.preventDefault()
			  })
			 //tombol warna kirim sinyal (led_1) 
			 var stateLampuOn=true;
			 $("#tombol_button").click(function (events) {
				//$(this).toggleClass("btn-primary")
				//events.preventDefault()//untuk referesh tanpa tambah #
				if(stateLampuOn){
				  $(this).toggleClass ("btn-primary");
				  $(this).removeClass ("btn-default");
				  $("#tombol_button").text("Hidup") //melakukan pergantian text ke hidup
				  stateLampuOn=false;
				  ws.send("on_g");
				}
				else{
				  $(this).toggleClass ("btn-default");
				  $(this).removeClass ("btn-primary");
				  $("#tombol_button").text("Mati")
				  stateLampuOn=true;
				  ws.send("off_g");
				}
			  })
			  
			 //tombol warna kirim sinyal (led_2) 
			 var stateLampuOn_1=true;
			 $("#tombol_button_1").click(function (events) {
				//$(this).toggleClass("btn-primary")
				//events.preventDefault()//untuk referesh tanpa tambah #
				if(stateLampuOn_1){
				  $(this).toggleClass ("btn-primary");
				  $(this).removeClass ("btn-default");
				  $("#tombol_button_1").text("Hidup") //melakukan pergantian text ke hidup
				  stateLampuOn_1=false;
				  ws.send("nyala");
				}
				else{
				  $(this).toggleClass ("btn-default");
				  $(this).removeClass ("btn-primary");
				  $("#tombol_button_1").text("Mati")
				  stateLampuOn_1=true;
				  ws.send("mati");
				}
			  })
			//tombol warna kirim sinyal (led_3) 
			 var stateLampuOn2=true;
			 $("#tombol_button2").click(function (events) {
				//$(this).toggleClass("btn-primary")
				//events.preventDefault()//untuk referesh tanpa tambah #
				if(stateLampuOn2){
				  $(this).toggleClass ("btn-primary");
				  $(this).removeClass ("btn-default");
				  $("#tombol_button2").text("Hidup") //melakukan pergantian text ke hidup
				  stateLampuOn2=false;
				  ws.send("on1_g");
				}
				else{
				  $(this).toggleClass ("btn-default");
				  $(this).removeClass ("btn-primary");
				  $("#tombol_button2").text("Mati")
				  stateLampuOn2=true;
				  ws.send("off1_g");
				}
			  })
			//tombol warna kirim sinyal (relay)
			 var stateRelayOn=true;
			 $("#tombol_button3").click(function (events) {
				//$(this).toggleClass("btn-primary")
				//events.preventDefault()//untuk referesh tanpa tambah #
				if(stateRelayOn){
				  $(this).toggleClass ("btn-primary");
				  $(this).removeClass ("btn-default");
				  $("#tombol_button3").text("Mati") //melakukan pergantian text ke hidup
				  stateRelayOn=false;
				  ws.send("on_TV");
				}
				else{
				  $(this).toggleClass ("btn-default");
				  $(this).removeClass ("btn-primary");
				  $("#tombol_button3").text("Hidup")
				  stateRelayOn=true;
				  ws.send("off_TV");
				}
			  })
			//tombol warna kirim sinyal (servo)
			 var stateServoOn=true;
			 $("#tombol_button4").click(function (events) {
				//$(this).toggleClass("btn-primary")
				//events.preventDefault()//untuk referesh tanpa tambah #
				if(stateServoOn){
				  $(this).toggleClass ("btn-primary");
				  $(this).removeClass ("btn-default");
				  $("#tombol_button4").text("Unlock") //melakukan pergantian text ke hidup
				  stateServoOn=false;
				  ws.send("on_kirim");
				}
				else{
				  $(this).toggleClass ("btn-default");
				  $(this).removeClass ("btn-primary");
				  $("#tombol_button4").text("Lock")
				  stateServoOn=true;
				  ws.send("off_Pagar_kirim");
				}
			  })
			//tombol warna kirim sinyal (servo pagar)
			 var stateServo_1_On=true;
			 $("#tombol_button_5").click(function (events) {
				//$(this).toggleClass("btn-primary")
				//events.preventDefault()//untuk referesh tanpa tambah #
				if(stateServo_1_On){
				  $(this).toggleClass ("btn-primary");
				  $(this).removeClass ("btn-default");
				  $("#tombol_button_5").text("Buka") //melakukan pergantian text ke hidup
				  stateServo_1_On=false;
				  ws.send("on_kirim_data_Pagar");
				}
				else{
				  $(this).toggleClass ("btn-default");
				  $(this).removeClass ("btn-primary");
				  $("#tombol_button_5").text("Tutup")
				  stateServo_1_On=true;
				  ws.send("off_kirim_data_Pagar");
				}
			  })
});		  
