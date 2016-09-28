<?

Flight::route('GET /favoris/@userId', function($userId){

    devSleep();

    $data = array();

    $favoris = ORM::for_table('favoris')
        ->where('userId', $userId)
        ->find_array();

    $favs = json_decode( $favoris[0]['siteweb'] );
    $selectFavs = implode(',', array_map('intval', $favs));

    $siteweb = ORM::for_table('siteweb')
        ->raw_query('SELECT * FROM siteweb WHERE id IN ('.$selectFavs.')')
        ->find_array();
    
    $count = count($siteweb);
    for ($i = 0; $i < $count; $i++) {

        $supports = ORM::for_table('supports')
            ->where('sitewebId', $siteweb[$i]['id'])
            ->find_array();

        $formatIds = json_decode( $supports[0]['formatIds'] );
        $selectformatIds = implode(',', array_map('intval', $formatIds));

        $formats = ORM::for_table('formats')
            ->raw_query('SELECT * FROM formats WHERE id IN ('.$selectformatIds.')')
            ->find_array();
                

        array_push( $data,  
            $formats
        );

    };

    
    
    
    $msg = array(
            'msg' => 'ok',
            'siteweb' => $siteweb,
            'formats' => $data
        );

    Flight::json($msg);

});

Flight::route('GET /favoris/formatsxxxxx/@sitewebId', function($sitewebId){

    devSleep();
    $supports = ORM::for_table('supports')
        ->where('sitewebId', $sitewebId)
        ->find_array();

    $formatIds = json_decode( $supports[0]['formatIds'] );
    $selectformatIds = implode(',', array_map('intval', $formatIds));

    $formats = ORM::for_table('formats')
        ->raw_query('SELECT * FROM formats WHERE id IN ('.$selectformatIds.')')
        ->find_array();
    
    $msg = array(
            'msg' => 'ok',
            'formats' => $formats
        );

    Flight::json($msg);

});

Flight::route('GET /favoris/config/@userId', function($userId){

    devSleep();
    
    $siteweb = ORM::for_table('siteweb')
        ->order_by_asc('titre')
        ->find_array();

    $favoris = ORM::for_table('favoris')
        ->where('userId', $userId)
        ->find_array();
    
    if ( !empty($favoris))
        $favs = json_decode( $favoris[0]['siteweb'] );
    
    for ($i = 0; $i<count($siteweb); $i++) {

        if ( !empty($favoris)) {
            for ($sel = 0; $sel<count($favs); $sel++) {
                //echo $siteweb[$i]['id']." ".$supps[$sel]." - ";
                if ( intval($siteweb[$i]['id']) == intval($favs[$sel])){
                    $siteweb[$i]['select'] = 1;
                }
            }
        }
        if ( !array_key_exists('select', $siteweb[$i])){
            $siteweb[$i]['select']=0;
        }

    }

    $msg = array(
            'msg' => 'ok',
            'siteweb' => $siteweb
    );

    Flight::json($msg);  

});

Flight::route('POST /favoris/config/@userId', function($userId){

    devSleep();
    
    $data = file_get_contents("php://input");

    $favoris = ORM::for_table('favoris')
        ->where('userId', $userId)
        ->find_one();

    if ( empty($favoris)){
        $favoris = ORM::for_table('favoris')
            ->create();
        $favoris->userId = $userId;
        $favoris->siteweb = $data;
        $favoris->save();
        
    } else {
        $favoris->siteweb = $data;
        $favoris->save();
    } 

    $msg = array(
            'msg' => 'ok'
    );

    Flight::json($msg);

});
