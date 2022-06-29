function highlightNavItem() {
    var links = document.getElementById("divWheel");
  
    for(var i = 0; i < links.children.length; i++) {
      if(links.children[i].children[0].pathname == window.location.pathname) {
        return i;
      }
    }

    return 0;
  }

function navWheel() {
    var highlighttedNav = highlightNavItem();
    var wheel = new wheelnav("divWheel", null, 300, 300);
    wheel.slicePathFunction = slicePath().DonutSlice;
    wheel.slicePathCustom = slicePath().DonutSliceCustomization();
    wheel.maxPercent = 1.0;
  
    wheel.slicePathCustom.minRadiusPercent = 0.3;
    wheel.slicePathCustom.maxRadiusPercent = 0.6;
    wheel.sliceSelectedPathCustom = wheel.slicePathCustom;
    wheel.sliceInitPathCustom = wheel.slicePathCustom;
  
    wheel.spreaderEnable = true;
    wheel.spreaderInTitle = 'imgsrc:/static/img/globe.svg';
    wheel.spreaderOutTitle = 'imgsrc:/static/img/globe.svg';
    wheel.spreaderInPercent = 1.0;
    wheel.spreaderOutPercent = 1.0;
    wheel.spreaderRadius = wheel.wheelRadius * 0.25;
    wheel.spreaderPathInAttr = { fill: '#FFF' };
    wheel.spreaderPathOutAttr = { fill: '#FFF' }
  
    wheel.createWheel();
    wheel.navigateWheel(highlighttedNav);
    wheel.setTooltips(["Home", "Timer", "Settings"]);
    wheel.sliceSelectedAttr = { stroke: '#111111', 'stroke-width': 4 };
    wheel.refreshWheel();
  
    var wheelspreader = document.getElementById("wheelnav-divWheel-spreader");
    var wheelspreadertitle = document.getElementById("wheelnav-divWheel-spreadertitle");
  
    wheelspreader.onmouseup = function() {
      openSpreader();
    }
  
    wheelspreadertitle.onmouseup = function() {
      openSpreader();
    }
  
    var openSpreader = function() {
      wheel.minPercent = wheel.maxPercent;
    }
  }
  navWheel();