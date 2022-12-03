$(document).ready(function () {
    var json = "input.json"
    $("#number").hover(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p1").html(result.id.info);
            }
        });
    });
    $("#text1").blur(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p1").html(result.id.warning);
            }
        });
    });
    $("#text1").hover(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p2").html(result.adress.info);
            }
        });
    });
    $("#text1").blur(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p2").html(result.adress.warning);
            }
        });
    });
    $("#text2").hover(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p3").html(result.city.info);
            }
        });
    });
    $("#text2").blur(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p3").html(result.city.warning);
            }
        });
    });
    $("#sumbit").click(function () {
        if (document.getElementById('number').value.length < 3) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p1").html(result.id.error);
                }
            });
        }
        if (document.getElementById('text1').value.length < 3) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p2").html(result.adress.error);
                }
            });
        }
        if (document.getElementById('text2').value.length < 9) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p3").html(result.city.error[0]);
                }
            });
        }
        if (document.getElementById('text2').value.length > 10) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p3").html(result.city.error[1]);

                }
            });
        }
    })
});