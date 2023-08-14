const postsEl = document.getElementById('posts');
const btn = document.getElementById('allposts');
const btns = document.getElementById('buttons');


const func = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    data.map((el) => {
        if(el.id <=10){
              if (`${el['id']} === ${el['userId']}`) {
            btns.innerHTML += `<button id = '${el.id}'>${el.id}</button>`;
        } 
       
        }
      
    });
    
    
    const btn1 = document.getElementById('1');
    const btn2 = document.getElementById('2');
    const btn3 = document.getElementById('3');
    const btn4 = document.getElementById('4');
    const btn5 = document.getElementById('5');
    const btn6 = document.getElementById('6');
    const btn7 = document.getElementById('7');
    const btn8 = document.getElementById('8');
    const btn9 = document.getElementById('9');
    const btn10 = document.getElementById('10');
    
    
    data.map((el) => {
        postsEl.innerHTML += `
         №${el.id}:</b> ${el.title} <hr>
        `;
    });
    btn.onclick = () => {
        postsEl.innerHTML = '';
        data.map((el) => {
            postsEl.innerHTML += `
            №${el.id} ${el.title}
            `;
        }
        );
    }
    
    const phonk = (userId) => {
        postsEl.innerHTML = '';
        const filteredPosts = data.filter((post) => post.userId === userId);
        filteredPosts.map((el) => {
          postsEl.innerHTML += `№${el.id} ${el.title} <hr> ` ;
        });
      }
      
btn1.onclick = () =>phonk(1);
btn2.onclick = () =>phonk(2);
btn3.onclick = () =>phonk(3);
btn4.onclick = () =>phonk(4);
btn5.onclick = () =>phonk(5);
btn6.onclick = () =>phonk(6);
btn7.onclick = () =>phonk(7);
btn8.onclick = () =>phonk(8);
btn9.onclick = () =>phonk(9);
btn10.onclick = () =>phonk(10);
};

func();