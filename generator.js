const text = [
    `Maiden ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Fethc ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Hydra ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Lofi ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Zaka ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `4effv ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `bunah ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Hatem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Xovbe ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
    `Roybu ipsum dolor sit amet consectetur adipisicing elit. Amet, dolor fuga, corrupti consequatur officiis consequuntur aperiam quod veniam doloremque incidunt laboriosam asperiores commodi cumque repellat inventore nulla exercitationem expedita ea recusandae ad suscipit distinctio pariatur sint voluptatibus. Fugit libero tenetur nam voluptatibus vel mollitia quos commodi voluptatum possimus, consequatur recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore repellendus dolorem blanditiis voluptas soluta, quod, necessitatibus, voluptate sit reiciendis quam animi! Cupiditate aperiam, officia quos voluptate minus autem tenetur!`,
];


const form = document.querySelector('.input-section');
const amount = document.querySelector('#number');
const show = document.querySelector('.main-body');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    
    //checking if input field is empty, less than 0 (-) or greater than 10
    if(isNaN(num) || num =< 0 || num > 10) {
        show.innerHTML = `<p class="display-text">${text[random]}</p>`;
    }
    else {
        const tempText = text.slice(0, num);
        const newitemText = tempText.map((item) => {
            return `<p class="display-text">${item}</p>`
        }).join('');
        show.innerHTML = newitemText;
    }

})