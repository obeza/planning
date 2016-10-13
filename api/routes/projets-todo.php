<?

Flight::route('GET /projet/todos/@projetId', function($projetId){

    checkToken();

    $todos = ORM::for_table('projets-todo')
        ->where('projetId', $projetId)
        ->order_by_asc('ordre')
        ->find_array();

    $msg = array(
            'msg' => 'ok',
            'todos' => $todos
    );

    Flight::json($msg);  


});

// ajouter un todo
Flight::route('POST /projet/todo/@projetId', function($projetId){

    //devSleep();

    // check admin
    checkToken();

    $data = getJson();

    $todo = ORM::for_table('projets-todo')->create();
    $todo->projetId = $projetId;
    $todo->tache = $data->tache;
    $todo->save();

    $actu = ORM::for_table('projets-actualite')->create();
    $actu->titre = $data->user." a ajouté une tâche.";
    $actu->projetId = $projetId;
    $actu->save();

    $msg = array(
        'msg' => 'ok',
        'id'=> $todo->id
    );            

    Flight::json($msg);

});

//mettre a jour un todo
Flight::route('POST /projet/todo/update/@id', function($id){

    checkToken();

    $data = getJson();

    $todoData = $data->todo;

    // bizarerie du PHP pour gérer le bolean du JSON
    // la valeur 1 vaut false
    if ( $todoData->done == 1){
        $todoData->done=0;
    } else {
        $todoData->done=1;
    }

    $todo = ORM::for_table('projets-todo')
        ->where('id', $id)
        ->find_one();

    $checkDone = $todo->done;
    $todo->tache = $todoData->tache;
    $todo->done = $todoData->done;
    $todo->save();


    // on alimente l'onglet Actualité
    $actuTitre = " a mis à jour une tâche";

    if ($checkDone!==$todo->done && $todo->done==1)
        $actuTitre = " a terminé une tâche.";         

    $actu = ORM::for_table('projets-actualite')->create();
    $actu->titre = $data->user.$actuTitre;
    $actu->projetId = $todo->projetId;
    $actu->save();

    $msg = array(
        'msg' => 'ok',
        'actu'=> $actuTitre
    );            

    Flight::json($msg);

});

// effacer une tache
Flight::route('POST /projet/todo/delete/@id', function($id){

    checkToken();

    $data = getJson();

    $todo = ORM::for_table('projets-todo')
        ->where('id', $id)
        ->find_one();

    $actu = ORM::for_table('projets-actualite')->create();
    $actu->titre = $data->user." a supprimé une tâche.";
    $actu->projetId = $todo->projetId;
    $actu->save();

    $todo->delete();

    $msg = array(
        'msg' => 'ok'
    );            

    Flight::json($msg);

});