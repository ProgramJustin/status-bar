
var life = 100;
var subtract = function(total) {
  life -= 10
};
//------------------------------------//
$(document).ready(function() {

  $("button").click(function() {
    var newLife = subtract(life);
    if (life < 100 && life >= 90) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 90 && life >= 80) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 80 && life >= 70) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 70 && life >= 60) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 60 && life >= 50) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 50 && life >= 40) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 40 && life >= 30) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 30 && life >= 20) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 20 && life >= 10) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
    if (life < 10 && life >= 0) {
      $(".lifeBar").animate({width: "-=10px"}, "slow");
    }
  });
});
