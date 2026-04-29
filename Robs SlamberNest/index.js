

    document.getElementById('changeImagesButton').addEventListener('click', function() {
        //get the images by their IDs//
        var image1 = document.getElementById('images1');
        var image2 = document.getElementById('images2');
        var image3 = document.getElementById('images3');
        var textAbove = document.getElementById('textAbove');
        var textBelow = document.getElementById('textBelow')
       
        //imge 3//
        image3 . src= "./slumbersense-full.jpg"  ;
        textAbove.textContent = 'kingsize pillow top';
        textAbove.style.color = 'green';
        textBelow3.textContent = 'USD200.00';
        textBelow3.style.color ='red ';
        image3.style.height= '30vh'
         
         image2 . src = "./double_pillowtop_grey_1.png_2.png";
        textAbove2.textContent = 'double bed pillow top';
        textAbove2.style.color = 'green'
        textBelow2.textContent = 'USD200.00';
        textBelow2.style.color ='red ';
        image2.style.height ='30vh';  
    });
    //back button//
    document.getElementById('back').addEventListener('click', function(){
        var image1 = document.getElementById('images1');
        var image2 = document.getElementById('images2');
        var image3 = document.getElementById('images3');
        var textAbove = document.getElementById('textAbove');
        var textBelow = document.getElementById('textBelow');
  image3 .src = "./RESTADEPIC_BED_SET_ATLANTIS_QUEEN.jpg";
  image2 .src = "./RESTADEPIC_BED_SET_ATLANTIS_QUEEN.jpg";
   textAbove2.textContent = 'double bed';
        textAbove2.style.color = 'black'
        textBelow2.textContent = 'USD2200.00';
        textBelow2.style.color ='green ';
        image2.style.height = '45vh';

        textAbove.textContent = 'kingsize bed';
        textAbove.style.color = 'black';
        textBelow3.textContent = 'USD200.00';
        textBelow3.style.color ='green';
        image3.style.height= '45vh';
    })

    document.getElementById("whatsapp-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const phoneNumber = "263789052888"; 

  const text = 
`*New Customer Inquiry*
-----------------------
*Name:* ${name}
*Email:* ${email}
*Message:* ${message}`;

  const encodedText = encodeURIComponent(text);

  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, "_blank");

  // Reset form
  document.getElementById("whatsapp-form").reset();
});


document.getElementById("send").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const phoneNumber = "263789052888"; 

  const text = 
`*New Customer Inquiry*
-----------------------
*Name:* ${name}
*Email:* ${email}
*Message:* ${message}`;

  const encodedText = encodeURIComponent(text);

  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, "_blank");

  // Reset form
  document.getElementById("whatsapp-form").reset();
});

document.getElementById('changePillow').addEventListener('click', function() {
        //get the images by their IDs//
        var image6ssssss = document.getElementById('image6');
        var image2 = document.getElementById('image7');
        var textAbove = document.getElementById('textAbove');
        var textBelow = document.getElementById('textBelow')
       
        //imge 3//
        image6 . src= "./pillow top 1.webp"  ;
        textAbove.textContent = "hi us"
})
