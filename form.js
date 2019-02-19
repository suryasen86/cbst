// $('.modal--signuplogin').modal('show');

$(".spinner").hide();

$("#contactusform").submit(function() {
  var name = $("#names").val();
  var email = $("#email").val();
  var mobile = $("#mobile").val();
  let emailRegex = /\S+@\S+\.\S+/;
  let mobileNumberRegex = /^[0-9]{10,10}$/;

  event.preventDefault();
  if (email.length !== 0 || (mobile.length !== 0 && name.length !== 0)) {
    if (emailRegex.test(email) == false) {
      $("#email").css("border-bottom", "1px solid red");
      $("#emailspan").css("display", "inline");
    }
    if (mobileNumberRegex.test(mobile) == false && email.length==0) {
      $("#mobile").css("border-bottom", "0.5px solid red");
      $("#mobilespan").css("display", "inline");
    }
    if (
      emailRegex.test(email) == true ||
      mobileNumberRegex.test(mobile) == true
    ) {
      if (name.length !== 0) {
        var body = {
          module: name,
          from: email,
          message: "Contact Me",
          other: `{
    mobile:${mobile}
  }`
        };
        var url = "http://172.104.191.160:3003/storemail";
        $("#contactsubmit").val("Sending");
        event.preventDefault();
        $(".spinner").show();
        $("#contactsubmit").hide();

        fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(response => {
            $(".spinner").hide();
            $("#contactusform")[0].reset();
            $("#contactsubmit").val("Send");
            $("#contactsubmit").show();
            $("#contactusSucess").text(
              "Sucessfully received we will contact you soon"
            );
          })
          .catch(error => {
            $(".spinner").hide();
            $("#contactsubmit").show();
            $("#contactsubmit").val("Send");
            $("#contactusSucess").val("Please try again server is busy");
          });
      } else {
        $("#names").css("border-bottom", "0.5px solid red");
        $("#namespan").css("display", "inline");
      }
    }
  } else {
    if (email.length == 0) {
      $("#email").css("border-bottom", "1px solid red");
      $("#emailspan").css("display", "inline");
    }
    if (mobile.length == 0) {
      $("#mobile").css("border-bottom", "0.5px solid red");
      $("#mobilespan").css("display", "inline");
    }

    if (name.length == 0) {
      $("#names").css("border-bottom", "0.5px solid red");
      $("#namespan").css("display", "inline");
    }
    
  }

  setTimeout(clearerror, 1500);

  function clearerror() {
    $(".form__row-error").css("display", "none");
    $(".form__input").css("border-bottom", "1px solid #a8a8a8 ");
  }
});

$("#demoform").submit(function() {
  var name = $("#demonames").val();
  var email = $("#demoemail").val();
  var mobile = $("#demomobile").val();
  var product = $("#productname").val();
  let emailRegex = /\S+@\S+\.\S+/;
  let mobileNumberRegex = /^[0-9]{10,10}$/;

  event.preventDefault();
  if (email.length !== 0 || mobile.length !== 0 && name.length !== 0 ) {
    if (emailRegex.test(email) == false) {
      $("#demoemail").css("border-bottom", "1px solid red");
      $("#demailspan").css("display", "inline");
    }
   else if (mobileNumberRegex.test(mobile) == false && email.length==0) {
        $("#demomobile").css("border-bottom", "0.5px solid red");
        $("#dmobilespan").css("display", "inline");
    }
    if (
      emailRegex.test(email) == true ||
      mobileNumberRegex.test(mobile) == true
    ) {
      if (name.length !== 0) {

                  var body = {
                      module: name,
                      from: email,
                      message: "Product Demo",
                      other: {
                      mobile: mobile,
                      product: product
                      }
                };
                var url = "http://172.104.191.160:3003/storemail";
                $("#demosubmit").val("Sending");
                $("#demosubmit").hide();
                $(".spinner").show();
                event.preventDefault();
                fetch(url, {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                  .then(res => res.json())
                  .then(response => {
                    $(".spinner").hide();
                    $("#demoform")[0].reset();
                    $("#demosubmit").val("Send");
                    $("#demosubmit").show();
                    $("#demoproductSucess").text(
                      "Sucessfully received we will contact you soon"
                    );
                  })
                  .catch(error => {
                    $(".spinner").hide();
                    $("#demosubmit").val("Send");
                    $("#demosubmit").show();
                    $("#demoproductSucess").val("Please try again server is busy");
                  });
  }
    else {
    $("#demonames").css("border-bottom", "0.5px solid red");
    $("#dnamespan").css("display", "inline");
      }
    }
  } else {
    if (email.length == 0) {
    $("#demoemail").css("border-bottom", "1px solid red");
    $("#demailspan").css("display", "inline");
  }
    if (mobile.length == 0) {
    $("#demomobile").css("border-bottom", "0.5px solid red");
    $("#dmobilespan").css("display", "inline");
  }

    if (name.length === 0) {
    $("#demonames").css("border-bottom", "0.5px solid red");
    $("#dnamespan").css("display", "inline");
    }
    // if (product.length == 0) {
    //   $("#productname").css("border-bottom", "0.5px solid red");
    //   $("#dproductspan").css("display", "inline");
    //   }
  }
  setTimeout(clearerror, 1500);

  function clearerror() {
    $(".form__row-error").css("display", "none");
    $(".form__input").css("border-bottom", "1px solid #a8a8a8 ");
  }
});

$(".grid__item").flip({
  axis: "x",
  trigger: "hover",
  reverse: true
});

$('#mumbaichange').css('border-bottom','3px solid white');

$('#mumbaichange').click(function(){
   event.preventDefault();
$('#mumbai').show();
$('#mumbaichange').css('border-bottom','3px solid white');
$('#suratchange').css('border-bottom','0px solid white');
$('#surat').hide();

})


$('#surat').hide();
$('#suratchange').click(function(){
   event.preventDefault();
    $('#surat').show();
    $('#mumbai').hide();
    $('#mumbaichange').css('border-bottom','0px solid white');
    $('#suratchange').css('border-bottom','3px solid white');


})

/* DemoMap */
$('#mumbaid').css('border-bottom','3px solid white');

$('#mumbaid').click(function(){
   event.preventDefault();
$('#mumbaidemo').show();
$('#mumbaid').css('border-bottom','3px solid white');
$('#suratd').css('border-bottom','0px solid white');
$('#suratdemo').hide();

})


$('#suratdemo').hide();
$('#suratd').click(function(){
   event.preventDefault();
    $('#suratdemo').show();
    $('#mumbaidemo').hide();
    $('#mumbaid').css('border-bottom','0px solid white');
    $('#suratd').css('border-bottom','3px solid white');


})