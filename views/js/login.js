$(document).ready(() => {

    $("#form").submit((event) => {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/login',
            data: $('#form').serialize(),
            dataType: "json",
            success: (response) => {
                $('#form')[0].reset();

                document.getElementById("check").innerHTML = response.Success;
                //ADD THIS CODE
                setTimeout(() => {
                    document.getElementById("check").innerHTML = "";
                }, 3000);
                if (response.Success == "Success!") {
                    document.getElementById("aa").click();
                };
            },
            error: () => {
            }
        })
    });

});