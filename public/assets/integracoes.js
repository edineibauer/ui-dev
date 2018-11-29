function saveConfig(field, value) {
    post("ui-dev", "settings/saveConfig", {field: field, value: value}, function (g) {
        if (g)
            toast("erro", 3000, "toast-warning")
    })
}

$(function () {
    $(".inputConfig").off("keyup change").on("keyup change", function () {
        saveConfig($(this).attr("id"), $(this).val())
    });
});