let loadCardData = async(para) => {
    let url = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    let data = await url.json();
    let data2 = data.data.tools
    gettingValue(data2,para)
}

let gettingValue = (data,para) => {
    let container = document.getElementById('main_card_container');
    container.textContent = '';
     if(data.length >6 && !para){
        data = data.slice(0,6);
        document.getElementById('see_more').classList.remove('hidden');
     }
     else{
        document.getElementById('see_more').classList.add('hidden');
     }
 


    data.forEach(element => {
        // console.log(element);
        let div = document.createElement('div');
        div.innerHTML = `
        <div onclick = "modalOpen('${element.id}')" class="card bg-base-100 shadow-xl">
  <figure><img onerror="replaceImg(this)" src="${element.image}" alt="Shoes" class="w-full h-1/2" /></figure>
  <div class="card-body">
    <h2 class="card-title">Feature</h2>
    <ol>
    <li>1. ${element.features[0]}</li>
    <li>2. ${element.features[1]}</li>
    <li>3. ${element.features[2]}</li>
   </ol>
   <hr>
    <h3 class="font-bold">${element.name}</h3>
    <p class="text-sm">${element.published_in}</p>
  </div>
</div>
        `;
        container.appendChild(div)
    });
}

function replaceImg(target){
    target.src = './a2.jpg';
}

function loadMoreBtn(){
    loadCardData(true)
}

let modalOpen =async (id) =>{
    let url2 = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    let loadData = await url2.json();
    let data3 = loadData.data
    modalValue(data3)
}

let modalValue = element =>{
    console.log(element)
    let container = document.getElementById('main_container1');
    container.textContent = '';
    let div = document.createElement('div');
    
    div.innerHTML = `
    <div class="w-full h-full flex flex-row-reverse justify-center items-center gap-3" id="main_container1">
    <!-- left part -->
    <div class="flex-1 w-full h-full">
      <img src="${element.image_link[0]}" class="w-full h-full" alt="">
    </div>
    <!-- right part -->
    <div class="flex-1 space-y-4">
      <h3>${element.description}</h3>
      <div class="w-full flex justify-around">
        <div class="text-green-500">
          <p>$10/ <br> month <br>Basic</p>
        </div>
        <div class="text-orange-500">
          <p>$50/ <br> month <br>Pro</p>
        </div>
        <div class="text-red-500">
          <p>Contact <br>Us <br>Enterprise</p>
        </div>
      </div>

      <div class=" flex justify-between">
        <div>
          <h3 class="font-bold mb-3">Features</h3>
          <ul>
            <li>${element.features['1'].feature_name}</li>
            <li>${element.features['2'].feature_name}</li>
            <li>${element.features['3'].feature_name}</li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-3">Integrations</h3>
          <ul>
            <li>${element.integrations[0]}</li>
            <li>${element.integrations[1]}</li>
            <li>${element.integrations[2]}</li>
          </ul>
        </div>


      </div>
    </div>
  </div>
  <div class="modal-action">
    <!-- if there is a button in form, it will close the modal -->
    <button class="btn">Close</button>
    `;
    container.appendChild(div);
    my_modal_5.showModal()
   

}





loadCardData()





 
       

