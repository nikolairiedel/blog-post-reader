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

  /**
   * On initialization of the component, the blogposts are retrieved.
   */
  ngOnInit() {
    this.getBlogposts();
  }

  /**
   * Is called when a blogpost title in the postlist is selected. Each blogpost title listens for the condition, 
   * that it is the selected blogpost. Upon selection it a css class is added to this title,
   * which changes its background color to light grey.
   * @param blogpost 
   */
  onSelect (blogpost: Blogpost): void {
    this.selectedBlogpost = blogpost; 
  }

  /**
   * Is called when one of the hearts besides the blogpost titles in the postlist is called. It sets the checked value
   * of the corresponding blogpost to one. The html heart label listens for this condition, and adds a css class to its
   * styles if the condition is met. The css class turns the color of the heart red.
   * @param blogpost 
   */
  onSelectHeart(blogpost: Blogpost): void {
    if(blogpost.checked === 1){
      blogpost.checked = 0;
    } else {
      blogpost.checked = 1;
    }
  }

  /**
   * Calls the getBlogposts() function in the postService and subscribes to its returning observable.
   * Asynchronous operation. Upon arrival of the data, another function (createPostArray()) is called, 
   * which assigns the data and adds the checked variable to the objects.
   */
  getBlogposts(): void {
    this.postService.getBlogposts()
        .subscribe(posts => this.createPostArray(posts))
  }

  /**
   * Is called upon arrival of the blogposts. Assigns the blogpost data and sets an additional variable checked to each
   * object in the array.
   * @param posts 
   */
  createPostArray(posts): void {
    this.blogposts = posts;
    this.blogposts.forEach(element => {
      element.checked = 0;
    });
  }

}
