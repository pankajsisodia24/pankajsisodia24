$(document).ready(() => {

    $("#form1").submit((event) => {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/',
            data: $('#form1').serialize(),
            dataType: "json",
            success: (response) => {
                $('#form1')[0].reset();

                document.getElementById("check").innerHTML = response.Success;
                //ADD THIS CODE
                setTimeout(() => {
                    document.getElementById("check").innerHTML = "";
                }, 3000);
                if (response.Success == "You are regestered,You can login now.") {
                    document.getElementById("aa").click();
                };
            },
            error: () => {
            }
        })
    });
});