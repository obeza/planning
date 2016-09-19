<?

Flight::route('POST /invitation', function(){

    $data = getJson();
    
    // generate random code

    if (filter_var($data->email, FILTER_VALIDATE_EMAIL)) {

        $check = ORM::for_table('users')
            ->where('email', $invite->email)
            ->find_one();

        if ( empty($check)){

            $code = createRandomPassword();
            $invite = ORM::for_table('invitations')->create();
            $invite->email = $data->email;
            $invite->code = $code;
            $invite->save();

            // modify later for send a mail with invitation

            $msg = array(
                'msg' => 'ok', 
                'code' => $code
            );

        } else {
            $msg = array('msg' => 'exist');
        }

    } else {
        $msg = array('msg' => 'error');
    }

    Flight::json($msg);

});

Flight::route('GET /invitation/@code', function( $code){

    $invite = ORM::for_table('invitations')
    ->where('code', $code)
    ->find_array();

    if ( empty($invite))
    {
        $msg = array(
            'msg' => 'error'
        );
    } else {
        $msg = array(
            'msg' => 'ok'
        );
    }

    Flight::json($msg);

});