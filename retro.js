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
    
    const div = document.createElement("div");
    div.innerHTML = `

                  <div class="avatar check-online max-h-[80px] ">
                        <div class="w-[80px]  rounded-full p-2">
                          <img  src="${post.image}" />
                        </div>
                      </div>

                   <div class="space-y-4">
                    <div class="flex gap-4">
                            <p>#<span>${post.category}</span>
                            </p>
                            <p> Author :<span>${post.author.name}</span>
                            </p>

                        </div>
                    <p id="${post.id}" class="color1 font-bold text-2xl">${post.title}</p>
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
                            <button  onClick="addInList(${post.id},${post.view_count})" class="btn rounded-full ">
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

 const addInList=(title,viewCount)=>{
    const bd= document.getElementById(`${title}`) 
    const text =bd.innerText
    const checkBox=document.getElementById('check-box')
    const div=document.createElement('div')
    div.innerHTML=`
                      <p class="w-[212px]">${text}</p>
                        <div>
                            <i class="fa-regular fa-eye"></i>
                            <p>${viewCount}</p>
    
                        </div>`

   
    
     
    div.classList.add('flex','justify-between','bg-white','p-5','rounded-xl','my-5') 
    checkBox.appendChild(div)
   
    
   const countClick=document.getElementById('count-click')
   const count=parseInt(countClick.innerText)
   countClick.innerText=count+1;
   
    

   
 }
  const fetchLatestPost= async()=>{
       const ref=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
       const data=await ref.json()
       displayLatestPost(data)
        

  }

  const displayLatestPost=(data)=>{
     const latestPostContainer=document.getElementById('latestPostContainer')
     
    data.map((dt)=>{
      console.log(dt)
      const div= document.createElement('div')
    div.innerHTML=`<figure>
                      <img
                        src="${dt.cover_image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div class="flex items-center gap-2">
                            <img class="w-5" src="images/Frame.png" alt="">
                        <p>${dt.author.posted_date||'No Publish'}</p>
                        </div>
                      <h2 class="card-title">
                      ${dt.title}
                        <div class="badge badge-secondary">NEW</div>
                      </h2>
                      <p>${dt.description}</p>
                      <div class="card-actions justify-start gap-9 ">
                        <img class="max-w-[58px]" src="${dt.profile_image}" alt="">
                        <div class="flex flex-col gap-3">
                            <div class="badge badge-outline">${dt.author.name}</div>
                            <div class="badge badge-outline">${dt.author.designation||'UNKNOWN'}</div>
                        </div>
                      </div>
                    </div>`

     div.classList.add('card','bg-base-100','w-96','shadow-sm')

   latestPostContainer.appendChild(div) })

  }

  fetchLatestPost()


fetchData();







