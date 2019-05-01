// Implementation without any plugins

// Function to get number of image elements
function getNumOfImages(slcObj){
  var numOfImages = slcObj.length;
  return numOfImages;
}

// Function to switch displayed image one afiter another
function slideImgs(slcObj, interval = 1000){
  var i = 0;
  var numOfImages = getNumOfImages(slcObj)
  var img = $("main").find(".slidingImgsCont").find(".slidingImgs");

  console.log(img[i].id);
  console.log($("main"));

  slcQuery = "#" + img[i].id;
  $(slcQuery).css('display', 'block');

  setInterval(function(){
    slcQuery = "#" + img[i].id;
    $(slcQuery).css("display", "none");
    i =  (i + 1) % 6;
    slcQuery = "#" + img[i].id;
    $(slcQuery).css("display", "block");
  }, interval);
};

slcObj = $(".slidingImgs");
slideImgs(slcObj, 5000);
