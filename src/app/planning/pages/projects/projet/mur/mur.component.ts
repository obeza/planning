import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetComponent } from './../projet.component'
import { RestService } from './../../../../../services/rest.service'
import { UtilisateurService } from './../../../../../services/utilisateur.service'

@Component({
  selector: 'app-mur',
  templateUrl: './mur.component.html',
  styleUrls: ['./mur.component.styl']
})
export class MurComponent implements OnInit {

  projectId = 0
  projet = {}
  todos = []
  todo = {
    tache:'',
    done:false
  }
  showTodoForm = false

  constructor(
    private _aRoute:ActivatedRoute,
    private _projet:ProjetComponent,
    private _rest:RestService,
    private _user:UtilisateurService,
    private _el:ElementRef
  ) { }

  ngOnInit() {    
    this.loadTodos()
  }

  loadTodos(){
    this._rest.get('projet/todos', this._projet.projectId)
      .subscribe( (res)=>{
        console.log('loadTodos', res)
        this.todos = res.todos.map( res=>{
          if ( res.done == "0"){
            res.done = false
          } else {
            res.done = true
          }
          return res
        })

      })
  }

  onAjouterTodo(){
    this.showTodoForm = true
    //this._el.nativeElement.querySelector('#inputTodo').focus();
  }

  onAnnulerTodo(){
    this.showTodoForm = false
    this.todo = {
      tache:'',
      done:false
    }
  }

  onSubmitTodo(){
    //this.todos = [...this.todos, this.todo]
    //this.onAnnulerTodo()
    let projetId = this._projet.projectId
    let todo = Object.assign({}, this.todo)
    //todo['projectId'] = projetId
    todo['user'] = this._user.user.prenom + " " + this._user.user.nom
    console.log(' todo', todo)
    this._rest.post('projet/todo/' + projetId, todo )
      .then( res=> {
        console.log('res api todos', res)
        this.todo['id'] = res.id
        this.todos = [...this.todos, this.todo]
        this.onAnnulerTodo()
      })
  }

  onCheckTodo(key, item){
    this.todos[key].item= item.done
    this.sauverTodo( key )
  }

  onModifierTodo(key){
    console.log('input show ' + key)
    this.todos[key].inputShow = true
  }

  onUpdateTodo(key){
    console.log('update todo')
    this.todos[key].inputShow = false
    this.sauverTodo( key )
  }

  sauverTodo(key){
    let data = {
      todo: this.todos[key],
      user: this._user.user.prenom + " " + this._user.user.nom
    }

    this._rest.post('projet/todo/update/' + this.todos[key].id, data)
      .then( res=> {
        console.log('res api todo', res)
    })

  }

  onDeleteTodo(key){
    let data = {
      user: this._user.user.prenom + " " + this._user.user.nom
    }
    this._rest.post('projet/todo/delete/' + this.todos[key].id, data )
      .then( res=> {
        console.log('res api todo', res)
        if(res.msg="ok"){
          this.todos.splice(key, 1);
        }
    })
  }

}
