var wait=60;
function time()
{
    var codesix;
    codesix = $("#codesix").val();

    if (codesix.length<3)
    {
        return;
    }

    var mobile = $("#codenum").val();
    if (mobile.length==11)
    {
        if (wait == 0)
        {
            $('#btnmsg').removeAttr("disabled");
            $('#btnmsg').val("点击获取");
            //p.html("如果您在1分钟内没有收到验证码，请检查您填写的手机号码是否正确或重新发送");
            wait = 60;
        }
        else
        {
            $('#btnmsg').attr("disabled", true);
            $('#btnmsg').val(wait + "秒");
            wait--;
            setTimeout(
                function() {
                    time();
                },
                1000) ;
        }
    }
}

function sendMsg()
{
    var codesix;
    codesix = $("#codesix").val();

    if (codesix.length<3 || isNaN(codesix))
    {
        $("#data").html("请输入卡号或编码");
        return;
    }

    var mobile, u;
    mobile = $("#codenum").val();
    if (mobile.length==11)
    {
        $("#data").html("请输入您收到的验证码");
        u = "/dy/weixinm/send_msg?mobile=" + mobile + "&a=" + Math.floor(Math.random()*9999+1000);
        jQuery.getJSON(u, function(d) {
            $("#data").html(d.message);
        });

    }
    else
    {
        $("#data").html("请输入正确手机号");
    }
}
   
		   