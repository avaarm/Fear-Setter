if(localStorage.getItem("bigFearObject") !== null) {
    var bigFearObject = JSON.parse(localStorage.getItem("bigFearObject"));
    $(".chosenFear").text(bigFearObject[0].chosenFear);
    for (var i = 0; i < bigFearObject[0].addedThings.length; i++){
      $("#defineList1").append($("<li>").text(bigFearObject[0].addedThings[i]));
    }
    for (var i = 0; i < bigFearObject[0].addedPreventions.length; i++){
      $("#preventList1").append($("<li>").text(bigFearObject[0].addedPreventions[i]));
    }
    for (var i = 0; i < bigFearObject[0].addedRepairs.length; i++){
      $("#repairList1").append($("<li>").text(bigFearObject[0].addedRepairs[i]));
    }
    for (var i = 0; i < bigFearObject[0].addedBenefits.length; i++){
      $("#benefitsList1").append($("<li>").text(bigFearObject[0].addedBenefits[i]));
    }
  } else {
    var bigFearObject = [{chosenFear: "", addedThings: [], addedPreventions: [], addedRepairs: [], addedBenefits: []}];
  }

  $("#changeFear1").on("click", function() {
    $("#defineList1").empty();
    $("#preventList1").empty();
    $("#repairList1").empty();
    $("#benefitsList1").empty();
    bigFearObject = [{chosenFear: "", addedThings: [], addedPreventions: [], addedRepairs: [], addedBenefits: []}];
    $(".chosenFear").text($(".bigFear").val());
    bigFearObject[0].chosenFear = $(".bigFear").val();
  });

  $("#addThing1").on("click", function () {
    var addedThing = $("<li>").text($(".newWorst").val());
    $("#defineList1").append(addedThing);
    bigFearObject[0].addedThings.push($(".newWorst").val());
  });

  $("#addPrevention1").on("click", function () {
    var addedPrevention = $("<li>").text($(".newPrevention").val());
    $("#preventList1").append(addedPrevention);
    bigFearObject[0].addedPreventions.push($(".newPrevention").val());
  });

  $("#addHow1").on("click", function () {
    var addedRepair = $("<li>").text($(".newRepair").val());
    $("#repairList1").append(addedRepair);
    bigFearObject[0].addedRepairs.push($(".newRepair").val());
  });

  $("#addBenefit1").on("click", function () {
    var addedBenefit = $("<li>").text($(".newBenefit").val());
    $("#benefitsList1").append(addedBenefit);
    bigFearObject[0].addedBenefits.push($(".newBenefit").val());
  });

  $("#saveFear").on("click", function () {
    localStorage.setItem("bigFearObject", JSON.stringify(bigFearObject));
  });