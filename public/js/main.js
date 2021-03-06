(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.parkTemplate = function() {
    var colorHeaderFourData, colorHeaderFourInfo, colorHeaderOneData, colorHeaderOneInfo, colorHeaderThreeData, colorHeaderThreeInfo, colorHeaderTwoData, colorHeaderTwoInfo, colorLinkFourData, colorLinkFourInfo, colorLinkOneData, colorLinkOneInfo, colorLinkThreeData, colorLinkThreeInfo, colorLinkTwoData, colorLinkTwoInfo, colorParFourData, colorParFourInfo, colorParOneData, colorParOneInfo, colorParThreeData, colorParThreeInfo, colorParTwoData, colorParTwoInfo, jumboHeaderData, jumboHeaderInfo, jumboInfoData, jumboInfoInfo, parkHeaderData, parkHeaderInfo, rowFourData, rowFourInfo, rowOneData, rowOneInfo, rowThreeData, rowThreeInfo, rowTwoData, rowTwoInfo, tableWhiteHeaderData, tableWhiteHeaderInfo, template1, template10, template11, template13, template14, template15, template16, template17, template18, template19, template2, template20, template21, template3, template4, template5, template6, template7, template8, template9;
    parkHeaderInfo = document.getElementById('park-header').innerHTML;
    template1 = Handlebars.compile(parkHeaderInfo);
    parkHeaderData = template1({
      navheader: 'Beside the park'
    });
    document.getElementById('park_header').innerHTML += parkHeaderData;
    jumboHeaderInfo = document.getElementById('jumbo-header').innerHTML;
    template2 = Handlebars.compile(jumboHeaderInfo);
    jumboHeaderData = template2({
      jumboheader: 'Lorem ipsum'
    });
    document.getElementById('jumbo_header').innerHTML += jumboHeaderData;
    jumboInfoInfo = document.getElementById('jumbo-info').innerHTML;
    template3 = Handlebars.compile(jumboInfoInfo);
    jumboInfoData = template3({
      jumboinfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    document.getElementById('jumbo_info').innerHTML += jumboInfoData;
    tableWhiteHeaderInfo = document.getElementById('table-white-header').innerHTML;
    template4 = Handlebars.compile(tableWhiteHeaderInfo);
    tableWhiteHeaderData = template4({
      tablewhiteheader: 'Lorem ipsum'
    });
    document.getElementById('table_white_header').innerHTML += tableWhiteHeaderData;
    rowOneInfo = document.getElementById('row-one').innerHTML;
    template5 = Handlebars.compile(rowOneInfo);
    rowOneData = template5({
      rowone: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    });
    document.getElementById('row_one').innerHTML += rowOneData;
    rowTwoInfo = document.getElementById('row-two').innerHTML;
    template6 = Handlebars.compile(rowTwoInfo);
    rowTwoData = template6({
      rowtwo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    });
    document.getElementById('row_two').innerHTML += rowTwoData;
    rowThreeInfo = document.getElementById('row-three').innerHTML;
    template7 = Handlebars.compile(rowThreeInfo);
    rowThreeData = template7({
      rowthreeA: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rowthreeB: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    document.getElementById('row_three').innerHTML += rowThreeData;
    rowFourInfo = document.getElementById('row-four').innerHTML;
    template8 = Handlebars.compile(rowFourInfo);
    rowFourData = template8({
      rowfour: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    });
    document.getElementById('row_four').innerHTML += rowFourData;
    colorHeaderOneInfo = document.getElementById('color-header-one').innerHTML;
    template9 = Handlebars.compile(colorHeaderOneInfo);
    colorHeaderOneData = template9({
      colorheaderone: 'Build to last'
    });
    document.getElementById('color_header_one').innerHTML += colorHeaderOneData;
    colorHeaderTwoInfo = document.getElementById('color-header-two').innerHTML;
    template10 = Handlebars.compile(colorHeaderTwoInfo);
    colorHeaderTwoData = template10({
      colorheadertwo: 'Our clients'
    });
    document.getElementById('color_header_two').innerHTML += colorHeaderTwoData;
    colorHeaderThreeInfo = document.getElementById('color-header-three').innerHTML;
    template11 = Handlebars.compile(colorHeaderThreeInfo);
    colorHeaderThreeData = template11({
      colorheaderthree: 'Sign up & see why'
    });
    document.getElementById('color_header_three').innerHTML += colorHeaderThreeData;
    colorHeaderFourInfo = document.getElementById('color-header-four').innerHTML;
    template13 = Handlebars.compile(colorHeaderFourInfo);
    colorHeaderFourData = template13({
      colorheaderfour: 'Perfect pictures'
    });
    document.getElementById('color_header_four').innerHTML += colorHeaderFourData;
    colorParOneInfo = document.getElementById('color-par-one').innerHTML;
    template14 = Handlebars.compile(colorParOneInfo);
    colorParOneData = template14({
      colorparone: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    document.getElementById('color_par_one').innerHTML += colorParOneData;
    colorParTwoInfo = document.getElementById('color-par-two').innerHTML;
    template15 = Handlebars.compile(colorParTwoInfo);
    colorParTwoData = template15({
      colorpartwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    document.getElementById('color_par_two').innerHTML += colorParTwoData;
    colorParThreeInfo = document.getElementById('color-par-three').innerHTML;
    template16 = Handlebars.compile(colorParThreeInfo);
    colorParThreeData = template16({
      colorparthree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    document.getElementById('color_par_three').innerHTML += colorParThreeData;
    colorParFourInfo = document.getElementById('color-par-four').innerHTML;
    template17 = Handlebars.compile(colorParFourInfo);
    colorParFourData = template17({
      colorparfour: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    });
    document.getElementById('color_par_four').innerHTML += colorParFourData;
    colorLinkOneInfo = document.getElementById('color-link-one').innerHTML;
    template18 = Handlebars.compile(colorLinkOneInfo);
    colorLinkOneData = template18({
      colorlinkone: 'Find Out more'
    });
    document.getElementById('color_link_one').innerHTML += colorLinkOneData;
    colorLinkTwoInfo = document.getElementById('color-link-two').innerHTML;
    template19 = Handlebars.compile(colorLinkTwoInfo);
    colorLinkTwoData = template19({
      colorlinktwo: 'Get insights'
    });
    document.getElementById('color_link_two').innerHTML += colorLinkTwoData;
    colorLinkThreeInfo = document.getElementById('color-link-three').innerHTML;
    template20 = Handlebars.compile(colorLinkThreeInfo);
    colorLinkThreeData = template20({
      colorlinkthree: 'Get started Now'
    });
    document.getElementById('color_link_three').innerHTML += colorLinkThreeData;
    colorLinkFourInfo = document.getElementById('color-link-four').innerHTML;
    template21 = Handlebars.compile(colorLinkFourInfo);
    colorLinkFourData = template21({
      colorlinkfour: 'Find Out more'
    });
    document.getElementById('color_link_four').innerHTML += colorLinkFourData;
  };

}).call(this);

 //# sourceMappingURL=main.js.map