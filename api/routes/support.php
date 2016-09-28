<?

Flight::route('GET /support/config/@sitewebId', function($sitewebId){

    devSleep();
    
    $formats = ORM::for_table('formats')
        ->order_by_asc('titre')
        ->find_array();

    $supports = ORM::for_table('supports')
        ->where('sitewebId', $sitewebId)
        ->find_array();
    
    if ( !empty($supports))
        $supps = json_decode( $supports[0]['formatIds'] );
    
    for ($i = 0; $i<count($formats); $i++) {

        if ( !empty($supports)) {
            for ($sel = 0; $sel<count($supps); $sel++) {
                //echo $formats[$i]['id']." ".$supps[$sel]." - ";
                if ( intval($formats[$i]['id']) == intval($supps[$sel])){
                    $formats[$i]['select'] = 1;
                }
            }
        }
        if ( !array_key_exists('select', $formats[$i])){
            $formats[$i]['select']=0;
        }

    }

    $msg = array(
            'msg' => 'ok',
            'formats' => $formats
    );

    Flight::json($msg);  

});

Flight::route('POST /support/config/@sitewebId', function($sitewebId){

    devSleep();

    $data = file_get_contents("php://input");

    $support = ORM::for_table('supports')
        ->where('sitewebId', $sitewebId)
        ->find_one();

    if ( empty($support)){
        $support = ORM::for_table('supports')
            ->create();
        $support->sitewebId = $sitewebId;
        $support->formatIds = $data;
        $support->save();
        
    } else {
        $support->formatIds = $data;
        $support->save();
    }




    $msg = array(
            'msg' => 'ok'
    );

    Flight::json($msg);
    
});