import { Component, OnInit } from '@angular/core';
import { Blogpost } from'../blogpost';
import { PostService } from '../post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  blogposts: Blogpost[];

  selectedBlogpost: Blogpost;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getBlogposts();
  }

  onSelect (blogpost: Blogpost): void {
    this.selectedBlogpost = blogpost; 
  }

  onSelectHeart(blogpost: Blogpost): void {
    if(blogpost.checked === 1){
      blogpost.checked = 0;
    } else {
      blogpost.checked = 1;
    }
  }

  getBlogposts(): void {
    this.postService.getBlogposts()
        .subscribe(posts => this.createPostArray(posts))
  }

  createPostArray(posts): void {
    this.blogposts = posts;
    this.blogposts.forEach(element => {
      element.checked = 0;
    });
    console.log(this.blogposts);
  }

}
