$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {

  palya = parseFloat(document.getElementById("circuit").value)
  let hossz = 0
    if (palya = "HUN"){
      hossz = 4.381
    }else{
      if (palya = "MON"){
        hossz = 3,337
      }else{
        if (palya = "BEL"){
          hossz = 7,004
        }else{
          if (palya = "ITA"){
            hossz = 5,793
          }else{
            
          }
        }
      }
    }
    laptime = parseFloat(document.getElementById("laptime").value)
    
    let ossz = hossz/(laptime/3600)
    
    document.getElementById('averagepeed').innerHTML = calculate()
  }
