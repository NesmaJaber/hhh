$(function () {
  $(".switch-btn").click(function () {
    $("button").removeClass("active");
    $(this).addClass("active");
  });
  $(".link-item").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  $(".page-item").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });


});

function viewPassword1() {
  let passField1 = document.getElementById("password-field1");
  let iconEye1 = document.getElementById("icon-eye1");
  if (passField1.type === "password") {
    passField1.type = "text";
    iconEye1.classList = "fa-regular fa-eye";


  } else {
    passField1.type = "password";
    iconEye1.classList = "fa-regular fa-eye-slash";
  }
}

function viewPassword2() {
  let passField2 = document.getElementById("password-field2");
  let iconEye2 = document.getElementById("icon-eye2");
  if (passField2.type === "password") {
    passField2.type = "text";
    iconEye2.classList = "fa-regular fa-eye";


  } else {
    passField2.type = "password";
    iconEye2.classList = "fa-regular fa-eye-slash";
  }
}
function viewPassword3() {
  let passField3 = document.getElementById("password-field3");
  let iconEye3 = document.getElementById("icon-eye3");
  if (passField3.type === "password") {
    passField3.type = "text";
    iconEye3.classList = "fa-regular fa-eye";


  } else {
    passField3.type = "password";
    iconEye3.classList = "fa-regular fa-eye-slash";
  }
}

const categories = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data = [0, 20, 15, 25, 30, 0];
Highcharts.chart('chartHome', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', // Customize the line color
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' // Customize the marker color
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500 // Define the maximum width for responsiveness
      },
      chartOptions: {
        legend: {
          enabled: false // Hide the legend on small screens
        }
      }
    }]
  }
});


const categories2 = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "ggg"];
const data2 = [0, 20, 15, 25, 30, 0];
Highcharts.chart('chart1', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories2,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data2,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', 
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' 
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          enabled: false 
        }
      }
    }]
  }
});

const categories3 = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const data3 = [0, 20, 15, 25, 30, 0];
Highcharts.chart('chart2', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: ''

  },
  xAxis: {
    categories: categories3,
    title: {
      text: ''
    }
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  series: [{
    name: '',
    data: data3,
    color: 'rgba(0, 0, 232,0.5)',
    lineColor: '#1165BF', 
    marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: 'rgba(124, 181, 236, 1)' 
    }
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          enabled: false 
        }
      }
    }]
  }
});



function switchBtn(chartId) {
  var switchContents = document.querySelectorAll('.switch-content');
  switchContents.forEach(function (switchContent) {
    switchContent.style.display = 'none';
  });

  var switchbtns = document.querySelectorAll('.switch-btn');
  switchbtns.forEach(function (switchbtn) {
    switchbtn.classList.remove('active');
  });

  document.getElementById(chartId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="switchBtn(\'' + chartId + '\')"]');
  clickedButton.classList.add('active');
}

switchBtn('chart1');


// managers page
function showMContent(mContentId) {
  var managercontents = document.querySelectorAll('.manager-content');
  managercontents.forEach(function (managercontent) {
    managercontent.style.display = 'none';
  });

  var managerbtns = document.querySelectorAll('.manager-btn');
  managerbtns.forEach(function (managerbtn) {
    managerbtn.classList.remove('active');
   });

  document.getElementById(mContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showMContent(\'' + mContentId + '\')"]');
  clickedButton.classList.add('active');

   if(mContentId == "mContent1"){
      document.getElementById("addDiv1").style.display ="block";
      document.getElementById("addDiv2").style.display ="none";
   }else if(mContentId == "mContent2"){
    document.getElementById("addDiv1").style.display ="none";
    document.getElementById("addDiv2").style.display ="block";
   }else{
    document.getElementById("addDiv1").style.display ="block";
    document.getElementById("addDiv2").style.display ="none";
   }

  
}

showMContent('mContent1');

/* tab button store */
function showTab(tabId) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('activee');
  });

  document.getElementById(tabId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab(\'' + tabId + '\')"]');
  clickedButton.classList.add('activee');
}

showTab('tab1');



let navList = document.querySelectorAll(".link-item"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll(".section"),
  totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  let a = navList[i].querySelector("a");
  a.addEventListener('click', function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    showSection(this);
  })
}
function showSection (element){
  for(let i =0 ;i<totalSection;i++){
    allSections[i].classList.remove("active");
    
  }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}





// month slider with next and previous buttons
const selectedMonth = document.getElementById("selectedMonth");
const prevButton = document.getElementById("prevMonth");
const nextButton = document.getElementById("nextMonth");

const months = [
    "يناير", "فبراير", "مارس", "أبريل",
    "مايو", "يونيو", "يوليو", "أغسطس",
    "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

let currentMonthIndex = 0;

function updateSelectedMonth() {
    selectedMonth.textContent = months[currentMonthIndex];
}

updateSelectedMonth();

prevButton.addEventListener("click", function() {
    currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
    updateSelectedMonth();
});

nextButton.addEventListener("click", function() {
    currentMonthIndex = (currentMonthIndex + 1) % 12;
    updateSelectedMonth();
});


/* tab button store */
function showTab3(tabAccountId) {
  var tabContents = document.querySelectorAll('.account-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.account-btn');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('active');
  });

  document.getElementById(tabAccountId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab3(\'' + tabAccountId + '\')"]');
  clickedButton.classList.add('active');
}

showTab3('tabAccount1');

//settings page 
function settingShow(settingContentId) {
  var settingsContents = document.querySelectorAll('.settings-content');
  settingsContents.forEach(function (settingsContent) {
    settingsContent.style.display = 'none';
  });

  var settingBtns = document.querySelectorAll('.setting-btn');
  settingBtns.forEach(function (settingBtn) {
    settingBtn.classList.remove('active');
  });

  document.getElementById(settingContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="settingShow(\'' + settingContentId + '\')"]');
  clickedButton.classList.add('active');

  
    if(settingContentId == "settingContent2"){
      document.getElementById("addSettings").style.display ="block";
    }else if(settingContentId == "settingContent1"){
      document.getElementById("addSettings").style.display ="none";
    }else{
      document.getElementById("addSettings").style.display ="block";
    }

}

settingShow('settingContent1');


// account page
const fileImageInput = document.getElementById('fileImageInput');
const uploadedImage = document.getElementById('uploadedImage');

fileImageInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedImage.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});