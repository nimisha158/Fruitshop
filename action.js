$(document).ready(function () {
  $("#btnm").click(function () {
    $(this).hide();
    $("#para1").slideDown();
    $("#btnl").show();
  });
  $("#btnl").click(function () {
    $(this).hide();
    $("#para1").slideUp();
    $("#btnm").show();
  });
  $("#btnmr").click(function () {
    $(this).hide();
    $("#para2").slideDown();
    $("#btnls").show();
  });
  $("#btnls").click(function () {
    $(this).hide();
    $("#para2").slideUp();
    $("#btnmr").show();
  });
  $(".effect").mouseenter(function () {
    $(this).fadeOut(2000);
    $(this).fadeIn(2000);
  });
  $("#text").mouseenter(function () {
    $(this).slideUp(2000);
    $(this).slideDown(2000);
  });
});
function sub() {
  if (document.subscribe.email.value == "") {
    alert("Enter your Email Id");
    return false;
  }
}

function regalert() {
  if (document.usermsg.name.value == "") {
    alert("Enter your Name");
    return false;
  } else {
    var name1 = document.usermsg.name.value;
    var name2 = /^[A-z\s\.]+$/;
    var name3 = name2.test(name1);
    if (name3 == false) {
      alert("Enter name correctly");
      return false;
    }
  }
  if (document.usermsg.mail.value == "") {
    alert("Enter your Email Id");
    return false;
  }
  if (document.usermsg.phn.value == "") {
    alert("Enter your Phone Number");
    return false;
  } else {
    var phone1 = document.usermsg.phn.value;
    var phone2 = /^\d{10}$/;
    var phone3 = phone2.test(phone1);
    if (phone3 == false) {
      alert("Invalid number");
      return false;
    }
  }
  if (document.usermsg.msg.value == "") {
    alert("Enter your message");
    return false;
  }
}
