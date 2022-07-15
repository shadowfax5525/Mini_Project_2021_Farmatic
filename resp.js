var burger = document.querySelector('.burger')
        var navbar = document.querySelector('.navbar')
        
        
        var navList = document.querySelector('.nav-list')
        var flag=0;


        burger.addEventListener('click', () => {

            navList.classList.toggle('v-class-resp');
            navbar.classList.toggle('h-nav-resp');

            if(flag==1){
                document.getElementById('li1').style.display = 'none'
                document.getElementById('li2').style.display = 'none'
                document.getElementById('li4').style.display = 'none'
                document.getElementById('li3').style.display = 'none'
                flag=0;

            }
            else{
                document.getElementById('li1').style.display = 'Block'
                document.getElementById('li2').style.display = 'Block'
                document.getElementById('li4').style.display = 'Block'
                document.getElementById('li3').style.display = 'Block'
                flag=1;

            }

        })  