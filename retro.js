const fetchData = async (inputValue) => {
  const ref = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await ref.json();
  const posts = data.posts;

  displayPost(posts);
};

const displayPost = (posts) => {

  const apiContainer = document.getElementById("api-container");
  apiContainer.innerText=''

  posts.map((post) => {
    // console.log(post);
    const div = document.createElement("div");
    div.innerHTML = `

                  <div class="avatar max-h-[80px] avatar-online">
                        <div class="w-[80px]  rounded-full p-2">
                          <img src="${post.image}" />
                        </div>
                      </div>

                   <div class="space-y-4">
                    <div class="flex gap-4">
                            <p>#<span>${post.category}</span>
                            </p>
                            <p> Author :<span>${post.author.name}</span>
                            </p>

                        </div>
                    <p class="color1 font-bold text-2xl">${post.title}</p>
                    <p class="max-w-[569px] text-xl">${post.description}</p>
                    <hr>
                     <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <i class="fa-regular fa-comment"></i>
                                <p>${post.comment_count}</p>
                                <i class="fa-regular fa-eye"></i>
                                <p>${post.view_count}</p>
                                <i class="fa-regular fa-clock"></i>
                                <p>${post.posted_time}</p>
                                
                            </div>
                            <button class="btn rounded-full ">
                                <img src="images/email 1.jpg" alt="">
                            </button> 
                        </div>

                    
                   </div>
    
    `;
    apiContainer.appendChild(div);
    div.classList.add(
      "max-w-[772px]",
      "min-h-[270px]",
      "border",
      "p-16",
      "bg-[#F3F3F5]",
      "rounded-xl",
      "space-y-4",
      "flex",
      "gap-3",
      "my-4"
    );
  });
};
const input=document.getElementById('inputField')
const findInput=()=>{
    const inputValue= input.value
    fetchByCategory(inputValue)

}

const fetchByCategory=async(inputValue)=>{
   const ref=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputValue}`)
   let  data=await ref.json()
   const categoryData=data.posts
   
   displayPost(categoryData);
  
   
   

   

   
}



fetchData();
