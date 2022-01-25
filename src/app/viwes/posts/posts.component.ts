import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfases/postinterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]=[]
  constructor(private postsService:PostsService) { }
  getPosts(){
    this.postsService.getPost().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.posts=res
      },
      error:(httpeError:any)=>{
        console.log(httpeError);
      }
    })
   
  }

  ngOnInit(): void {
    this.getPosts()
  }

}
