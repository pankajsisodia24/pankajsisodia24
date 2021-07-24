$(document).ready(() => {

    $("#form2").submit((event) => {

        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/forgetpass',
            data: $('#form2').serialize(),
            dataType: "json",
            success: (response) => {
                //alert("a");
                //console.log(response.Success);
                $('#form2')[0].reset();
                //alert("abc");
                document.getElementById("check").innerHTML = response.Success;

                setTimeout(() => {
                    document.getElementById("check").innerHTML = "";
                }, 3000);
                if (response.Success == "Password changed!") {
                    document.getElementById("aa").click();
                };
            },
            error: () => {
            }
        })
    });

});