/**
 * Created by rahul on 9/13/2016.
 */


import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";


import { Task } from './task/task'

//declare var KanBanTool:any;

@Injectable()
export  class TaskService{

  KBTool:any ;

  constructor(private http:Http){

    //this.KBTool = new KanBanTool.Api('rsach22','XYNKY2LV8TSS');

  }

  storeData(task:Task){


    var body = 'name='+task.name+'&custom_field_1='+task.project+'&custom_field_2='+task.set+'&custom_field_3='+task.type;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var boardId ='252020';
    var api_token = 'XYNKY2LV8TSS';

    var domain ='rsach22';
    var url = 'https://'+domain+'.kanbantool.com/api/v1/boards/'+boardId+'/tasks.json?api_token='+api_token;

    this.http
      .post(url,
        body, {
          headers: headers
        })
      .subscribe(data => {
        alert('ok');
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
    //this.KBTool.createTask(

    console.log();







     }

}
