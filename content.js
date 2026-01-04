//Main initialization file - loads all modules and starts the extension


(function() {
    'use strict';

    function init() {
        // Initialize modules based on page
        AttendanceModule.init();
        GradebookModule.init();
        ResultsModule.init();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
