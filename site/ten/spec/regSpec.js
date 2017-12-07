// regSpec.js  adapted from angular documentation
// https://docs.angularjs.org/guide/unit-testing
describe("RegController", function(){
  beforeEach(module('public'));

    var $controller;
    var regController;

    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;

      var MenuServiceMock = {};
      MenuServiceMock.getOneMenuItem = function(){
        return 'Orange Chicken';
      };
      regController =
      $controller('RegController',
                {MenuService:MenuServiceMock});
    }));
      it('sets reg.selection to "Orange Chicken" if reg.user.menuPick is "C1"', function(){
        RegController.user.menuPick = "C1";
        RegController.checkone();
        expect(RegController.selection).toEqual('Orange Chicken');
      });
    });
