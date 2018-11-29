<?php
$tpl = new \Helpers\Template("ui-dev");
$dados['dominio'] = VENDOR . "ui-dev/";
$dados['version'] = VERSION;
$dados['dashboard'] = "";

if(!empty($_SESSION['userlogin']['setor'])) {
    //Notificações
    $read = new \ConnCrud\Read();
    $read->exeRead("dashboard_note", "WHERE autor = :a ORDER BY id LIMIT 16", "a={$_SESSION['userlogin']['id']}");
    $dados['note'] = $read->getResult() ?? [];
    if (!empty($dados['note'])) {
        $dataTime = new \Helpers\DateTime();
        foreach ($dados['note'] as $i => $item)
            $dados['note'][$i]['data'] = $dataTime->getDateTime($item['data'], 'd \d\e M \d\e Y');
    }
}

$data['data'] = $tpl->getShow('UIDev', $dados);