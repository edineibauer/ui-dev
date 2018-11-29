var change = false;

$(function () {
    $(".allow-session").off("change").on("change", function () {
        post("ui-dev", "permissoes/sessionAllow", {
            session: $(this).attr("rel"),
            entity: $(this).val(),
            action: $(this).prop("checked")
        }, function () {
        });
    });

    $(".allow-menu-session").off("change").on("change", function () {
        post("ui-dev", "permissoes/sessionMenuAllow", {
            session: $(this).attr("rel"),
            entity: $(this).val(),
            action: $(this).prop("checked")
        }, function () {
        });
    });
});