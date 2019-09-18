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