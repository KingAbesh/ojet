
define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojbootstrap",
  "ojs/ojresponsiveutils",
  "ojs/ojresponsiveknockoututils",
  "ojs/ojknockout",
  "ojs/ojlabel",
  "ojs/ojinputtext",
  "ojs/ojformlayout",
  "ojs/ojbutton"
], function(oj, ko, $, Bootstrap, responsiveUtils, responsiveKnockoutUtils) {
  function LoginViewModel() {
    var self = this;
    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.
    self.isSmall = responsiveKnockoutUtils.createMediaQueryObservable(
      responsiveUtils.getFrameworkQuery(
        responsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
      )
    );
    // For small screens: labels on top
    // For medium or bigger: labels inline
    self.labelEdge = ko.computed(function() {
      return self.isSmall() ? "top" : "start";
    }, self);
    self.clickedButton = ko.observable("(k)");
    self.buttonClick = function(event) {
      self.clickedButton(event.currentTarget.id);
      return true;
    }.bind(self);
    self.value = ko.observable("What");

    self.userName = ko.observable();
    self.userPassword = ko.observable();
    self.message = ko.observable();

    self.buttonClick1 = function(event, data, bindingContext) {
      // $("oj-form-layout").validate();
      self.message(`Welcome Back`);
      console.log(self.userPassword());
      setTimeout(() => self.message(""), 3000);
      var rootViewModel = ko.dataFor(document.getElementById("globalBody"));
      rootViewModel.userLogin(self.userName());
      rootViewModel.userLoggedIn("Y");
      return true;
    };

    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    self.connected = function() {
      // Implement if needed
    };
    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    self.disconnected = function() {
      // Implement if needed
    };
    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    self.transitionCompleted = function() {
      // Implement if needed
    };
  }
  /*
   * Returns a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.  Return an instance of the ViewModel if
   * only one instance of the ViewModel is needed.
   */

  return new LoginViewModel();
});
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojknockout-validation', 'ojs/ojmodel','ojs/ojrouter'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function logintestContentViewModel() {
        var self = this;
        self.tracker = ko.observable();
        self.username = ko.observable("");
        self.password = ko.observable("");
        self.clickedButton = ko.observable();
        self.buttonClick = function(data, event)
        {
            var trackerObj = ko.utils.unwrapObservable(self.tracker);
            if (!this._showComponentValidationErrors(trackerObj))
            {
                return;
            }

        };
        self.routePage = function(data,event)
        {
            self.clickedButton(event.currentTarget.id);
            return true;  
        };
        self.onClick = function()
        {
            self.buttonClick();
            self.routePage();
            oj.Router.go("prfile");
        }
        self.shouldDisableCreate = function()
        {
          var trackerObj = ko.utils.unwrapObservable(self.tracker),
          hasInvalidComponents = trackerObj ? trackerObj["invalidShown"] : false;
          return  hasInvalidComponents;
        };
        self._showComponentValidationErrors = function (trackerObj)
        {
            trackerObj.showMessages();
            if (trackerObj.focusOnFirstInvalid())
            return false;
        };

    }
    return logintestContentViewModel;
});
