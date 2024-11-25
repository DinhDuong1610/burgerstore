<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<script>
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        grabCursor: true,
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        }
    });

    function toggleSidebar(event) {
        event.preventDefault();
        var sidebar = document.getElementById('sidebar');
        if (sidebar.style.transform === 'translateX(100%)') {
            sidebar.style.transform = 'translateX(0)';
        } else {
            sidebar.style.transform = 'translateX(100%)';
        }
    }
    const anchorElements = document.querySelectorAll('.item_wrap a');
    let totalAmount = 0;
    const addedImages = [];

    anchorElements.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const listItem = this.closest('.item_wrap');
            const imageUrl = listItem.querySelector('img').getAttribute('src');
            const priceElement = listItem.querySelector('.text-secondaryColor span');
            const priceText = priceElement ? priceElement.textContent.trim() : '';
            const name = listItem.querySelector('.card__title').innerText.trim();
            const price = parseFloat(priceText.split(' ')[0].replace(/\./g, '').replace(',', '.'));
            const existingImageIndex = addedImages.findIndex(img => img.url === imageUrl);
            if (existingImageIndex === -1) {
                addedImages.push({
                    url: imageUrl,
                    name: name,
                    price: price,
                    quantity: 1
                });
                createNewProductDiv(imageUrl, name, priceText, price);
            } else {
                const existingProductDiv = document.querySelector(`.newdiv-img img[src="${imageUrl}"]`)
                    .closest('.newDiv');
                const quantitySpan = existingProductDiv.querySelector('.quantitySpan');
                let quantity = parseInt(quantitySpan.textContent);
                quantity++;
                quantitySpan.textContent = quantity;
                addedImages[existingImageIndex].quantity = quantity;
                calculateTotalAmount();
            }
        });
    });

    function createNewProductDiv(imageUrl, name, priceText, price) {
        var newDiv = document.createElement("div");
        newDiv.className = "newDiv";
        newDiv.innerHTML = `
          <div class="newdiv-img">
              <img src="${imageUrl}" alt="Image">
          </div>
          <div>
              <div class="newdiv-name" ><span>${name}</span></div>
              <div class="newdiv-price">
                  <button class="decreaseBtn" style="width: 30%; border-radius: 10rem; border:2px solid yellow;">-</button>
                  <span class="quantitySpan" style="width: 40%;">1</span>
                  <button class="increaseBtn" style="width: 30%;border-radius: 10rem;border:2px solid yellow;">+</button>
              </div>
          </div>
          <div class="newdiv-quantity"><span class="priceSpan" data-price="${price}">${priceText}</span></div>
          <div class="newdiv-delete"><button class="deleteBtn">Delete</button></div>
      `;
        document.getElementById("mainDiv").appendChild(newDiv);
        calculateTotalAmount();
        const increaseBtn = newDiv.querySelector('.increaseBtn');
        const decreaseBtn = newDiv.querySelector('.decreaseBtn');
        const quantitySpan = newDiv.querySelector('.quantitySpan');
        const deleteBtn = newDiv.querySelector('.deleteBtn');

        increaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            const existingImageIndex = addedImages.findIndex(img => img.url === imageUrl);
            addedImages[existingImageIndex].quantity = quantity;
            calculateTotalAmount();
        });

        decreaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                const existingImageIndex = addedImages.findIndex(img => img.url === imageUrl);
                addedImages[existingImageIndex].quantity = quantity;
                calculateTotalAmount();
            } else {
                const existingImageIndex = addedImages.findIndex(img => img.url === imageUrl);
                addedImages.splice(existingImageIndex, 1);
                newDiv.remove();
                calculateTotalAmount();
            }
        });
        deleteBtn.addEventListener('click', function() {
            const existingImageIndex = addedImages.findIndex(img => img.url === imageUrl);
            addedImages.splice(existingImageIndex, 1);
            newDiv.remove();
            calculateTotalAmount();
        });
    }

    function calculateTotalAmount() {
        totalAmount = 0;
        const newDivs = document.querySelectorAll('.newDiv');
        newDivs.forEach(div => {
            const quantity = parseInt(div.querySelector('.quantitySpan').textContent);
            const price = parseFloat(div.querySelector('.priceSpan').getAttribute('data-price'));
            totalAmount += quantity * price;
        });
        document.getElementById("totalAmount").textContent = totalAmount.toLocaleString();
    }
    document.getElementById("pay-changeLog").addEventListener("click", function() {
        window.location.href = "signin.html";
    });
    document.getElementById("signinButton").addEventListener("click", function() {
        window.location.href = "signin.html";
    });
</script>
<script src="https://unpkg.com/scrollreveal"></script>
<script src="main.js"></script>
