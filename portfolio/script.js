{
  // =========for dynamic island====?
  const search_container = document.querySelector('.search-container');//of dynamic box
  const apps = document.querySelectorAll('.toggle-item')[4];//of toggle btn
  const social_media = document.querySelector('.social-media');//of dynamic box  
  const dynamic = document.querySelector('.dynamic');
  const search = document.querySelectorAll('.toggle-item')[2];//of toggle btn
  const time_btn = document.querySelectorAll('.toggle-item')[3];// of toggle btn
  const time_container = document.querySelector('.time-container');//of dynamic box
  const login = document.querySelectorAll('.toggle-item a')[0];//for value chng of lgn
  const login_btn = document.querySelectorAll('.toggle-item')[0];
  const dark_btn = document.querySelectorAll('.toggle-item')[1];//of toggle btn
  const dark = document.querySelectorAll('.dark-light-item')[1];
  const body = document.querySelector("body");
  const project = document.querySelector('.proj-container');
  const root =document.querySelector(':root'); //getting all root value
  const colourcontainer =document.querySelectorAll('.clrcntainerchild');//getting all childs of colour container

  //  ========to remove right click menu====
  dynamic.addEventListener("contextmenu", (e) => e.preventDefault());

  //for changiing the colour

  {
    var bingo;
    var localcolor= localStorage.getItem('color');
    root.style.setProperty('--primary-color-6',localcolor)
        colourcontainer.forEach((data)=>{
          data.addEventListener('click',()=>{
             bingo= window.getComputedStyle(data).getPropertyValue('background-color');
             localStorage.setItem('color',bingo);
            localcolor= localStorage.getItem('color');
            console.log("hello"+bingo)
            root.style.setProperty('--primary-color-6',localcolor)
          })
        })

        
  }
  
  
  
  {

    // to change dark light mode=====
    let getmode = localStorage.getItem('mode');

    dark_btn.addEventListener('click', () => {
      dark.classList.toggle('light');
      body.classList.toggle('dark');

      if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light");
      }
      else
        localStorage.setItem("mode", "dark");
    })
    if (getmode === "dark") {
      dark.classList.toggle('light');
      body.classList.toggle('dark');
    }

  }






  let a, b, c;

  // for click in app of side toggle
  apps.addEventListener('click', () => {
    dynamic.className = 'dynamic';                    //all this class name used inside click
    time_container.className = 'time-container tim';   //will remove previous opened time  
    search_container.className = 'search-container hov';
    social_media.classList.toggle('container');      // or apps or search
    // dynamic.classList.toggle('hov');

    if (a == true) {
      dynamic.className = 'dynamic';
    } a = true;
    b = false;
    c = false;


  })

  //for click in social media of dynamic
  social_media.addEventListener('click', () => {
    project.className = 'proj-container';
    social_media.classList.toggle('container');
    dynamic.className = 'dynamic hov';
  })

  //for click in search button in toggle
  search.addEventListener('click', () => {
    dynamic.className = 'dynamic';
    social_media.className = 'social-media container'
    time_container.className = 'time-container tim'
    search_container.classList.toggle('hov'); // for search there is not on click in dynamic 
    dynamic.classList.toggle('srch');          // because it will not help user for search

    if (b == true) {
      dynamic.className = 'dynamic';
    } a = false;
    b = true;
    c = false;
  })

  //for click in time button in toggle
  time_btn.addEventListener('click', () => {
    search_container.className = 'search-container hov';
    dynamic.className = 'dynamic';
    social_media.className = 'social-media container';
    time_container.classList.toggle('tim');
    // dynamic.classList.toggle('hov');

    if (c == true) {
      dynamic.className = 'dynamic';
    } a = false;
    b = false;
    c = true;
  })
  //for click in time of dyanamic
  time_container.addEventListener('click', () => {
    project.className = 'proj-container';
    time_container.classList.toggle('tim');
    dynamic.className = 'dynamic hov';
  })

  //for click in search of dynamic
  search_container.addEventListener('click', () => {
    project.className = 'proj-container';
    dynamic.className = 'dynamic srch';

  })


  {
    const Day = document.querySelector('.time-container h1');

    const time = document.querySelector('.time-container span');

    // for date and time====
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date_data = new Date();    //getting whole date and time 
    let current_day = date_data.getDay();   //getting day
    let current_month = date_data.getMonth();      //getting month
    let current_date = date_data.getDate();          //getting date
    let current_year = date_data.getFullYear();        //getting full year
    let current_hour = date_data.getHours();   //getting time in hour
    let current_minute = date_data.getMinutes();    //getting time in minute
    let am_pm = "";
    let a = "";
    Day.innerText = days[current_day] + " " + months[current_month] + " " + current_date + "   " + current_year;
    if (current_minute < 10) {
      a = "0"
    }
    else if (current_minute == 0) {
      a = "00"
    }
    if (current_hour > 12) {
      am_pm = 'PM';
      current_hour = current_hour - 12;
    }
    else {
      am_pm = 'AM';
    }
    time.innerText = current_hour + ":" + "" + a + "" + current_minute + " " + am_pm;

  }
  // =====for long touch in mobile========
  let time = 0;
  let funct;

  dynamic.addEventListener("touchstart", () => {
    funct = setInterval(() => {
      time += 1;

      if (time == 110) {

        search_container.classList.toggle('hov');
        dynamic.className = 'dynamic';
        clearInterval(funct);
        time = 0;
      }
    }, 1);
  });

  dynamic.addEventListener("touchend", () => {
    clearInterval(funct);
    if (time < 120) {
      time = 0;
    }
  });

  let clicks = true;

  // =========for click in laptop and mobile==========
  dynamic.addEventListener("click", () => {
    if (clicks == true) {
      dynamic.classList.toggle('hov');
      project.classList.toggle('clck');
    };
    clicks = true;
  });



  // ==============for long press in laptop===========
  dynamic.addEventListener("mousedown", () => {
    funct = setInterval(() => {
      time += 1;
      if (time == 120) {
       // dynamic.classList.toggle('srch');  //===add what to do after long press
        search_container.classList.toggle('hov');
        dynamic.className = 'dynamic';
        clearInterval(funct);
        time = 0;
        clicks = false;
      }
    }, 1);
  });

  dynamic.addEventListener("mouseup", () => {
    clearInterval(funct);
    time = 0;
  });



}

{
  // script for toggle button====
  const toggle_container = document.querySelector('.toggle-container');

  const container = document.querySelector(".toggle-content");
  const body = document.querySelector("body");

  // for desktop======
  let laptop = false;
  let x;
  let y;
  let time = false;
  function myfun(event) {
    x = event.clientX;
    y = event.clientY;
    container.style.position = "fixed";
    container.style.left = x - 30 + "px";
    container.style.top = y - 30 + "px";
    time = true;
  }

  container.addEventListener("mousedown", () => {
    laptop = true;
    body.addEventListener("mousemove", myfun);
  });

  body.addEventListener("mouseup", () => {
    body.removeEventListener("mousemove", myfun);
  });

  container.addEventListener("click", () => {
    if (time == false) {
      toggle_container.classList.toggle('tog-open');
    }
    time = false;
  });

  // ====for mobiles======
  if (laptop == false) {
    let w;
    let z;
    function myfun(e) {
      w = e.targetTouches[0].clientX;
      z = e.targetTouches[0].clientY;

      container.style.position = "fixed";
      container.style.left = w - 40 + "px";
      container.style.top = z - 40 + "px";

    }

    container.addEventListener("touchstart", () => {
      body.addEventListener("touchmove", myfun);
    });

    body.addEventListener("touchend", () => {
      body.removeEventListener("touchmove", myfun);
    });
  }

}

