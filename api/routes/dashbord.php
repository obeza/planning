<?

Flight::route('GET /dashbord/reservations/@userId', function($userId){

    // check admin
    checkToken();
    
    $comptes = ORM::for_table('comptes-favoris')
        ->where('userId', $userId)
        ->find_one();

    $comptes = json_decode($comptes->favoris);


/*    $siteweb = ORM::for_table('siteweb')
        ->raw_query('SELECT * FROM siteweb WHERE id IN ('.$selectFavs.')')
        ->find_array();    

    $results = ORM::for_table('reservations')->join('person_profile', array('person.id', '=', 'person_profile.person_id'))->find_many();*/

    $reserv = ORM::for_table('reservations')
        ->where_in('compte', $comptes)
        ->join('comptes', array('reservations.compte','=','comptes.id'))
        ->join('siteweb', array('reservations.siteweb','=','siteweb.id'))
        ->join('formats', array('reservations.format','=','formats.id'))
        ->select('reservations.title')
        ->select('reservations.start')
        ->select('reservations.end')
        ->select('reservations.statut')
        ->select('comptes.prenom')
        ->select('comptes.nom')
        ->select('siteweb.titre', 'siteweb')
        ->select('formats.titre', 'format')
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'reservations' => $reserv
        );
    
    Flight::json($msg);

});
